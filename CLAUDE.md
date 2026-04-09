# CLAUDE.md — Football Imposter

## Project Overview

Football Imposter is a browser-based party game inspired by Spyfall. Players try to identify an "imposter" who receives clues about the secret word rather than the word itself. The game is exclusively football-themed, drawing from 100+ footballer names, teams, and goal types.

## Repository Structure

```
Football-Imposter/
├── imposter.html      # Entire application: markup, CSS, and game logic
├── categories.js      # All game data (words + hints per category)
└── CLAUDE.md          # This file
```

There is no build system, package manager, or external dependencies. The app runs entirely in the browser by opening `imposter.html` directly.

## Running the App

```bash
# Open directly in a browser — no server needed
open imposter.html           # macOS
xdg-open imposter.html       # Linux
start imposter.html          # Windows
```

Or serve it locally if cross-origin concerns arise:
```bash
python3 -m http.server 8080
# Then visit http://localhost:8080/imposter.html
```

## Architecture

### `imposter.html`

The entire application lives in one file with three logical sections:

**1. CSS (inside `<style>`)** — Uses CSS custom properties defined on `:root`:
- `--bg-dark`, `--card-bg`, `--surface-light` — background/surface colours
- `--text-main`, `--text-muted` — typography colours
- `--accent-red`, `--accent-blue`, `--accent-green`, `--accent-purple` — accent colours
- The `body.football-theme` class overrides these variables with a green pitch palette.

**2. Game State** — A single mutable `state` object (not a class):
```js
let state = {
    // Config (set on setup screen)
    players: 4,
    imposters: 1,
    hardMode: false,    // imposter sees no hint
    suddenDeath: false, // 2-min timer, 2 hints

    // Runtime
    usedWords: [],
    playerSpecificHints: {},
    currentRoles: [],
    currentPlayerIndex: 0,
    currentWord: "",
    startPlayerIndex: 0,
    timerInterval: null,
    secondsLeft: 0
};
```

**3. Screens object** — Pure functions that return HTML strings rendered with `app.innerHTML = ...`:
| Screen | Triggered by |
|--------|-------------|
| `Screens.Setup()` | App init, `resetGame()` |
| `Screens.PassDevice()` | After each player reveal, `startGame()` |
| `Screens.Reveal(role, info)` | `revealRole()` |
| `Screens.GameActive()` | After last player reveal |

**4. Actions object** — All game logic:
| Action | Purpose |
|--------|---------|
| `init()` | First load, renders Setup screen and applies football theme |
| `adjustCount(type, delta)` | Increment/decrement players (3–15) or imposters (1–3) |
| `startGame()` | Assigns roles, picks word, distributes hints, starts pass-device flow |
| `revealRole()` | Shows current player's role/word/hint |
| `nextPlayer()` | Advances player index; starts timer after last player |
| `runTimer()` | Countdown via `setInterval`, renders `GameActive` screen |
| `resetGame()` | Clears timer, calls `init()` |
| `resetSession(el)` | Clears `state.usedWords` history |
| `startFootballEffect()` | Injects falling-football animation container |
| `stopFootballEffect()` | Removes it |

**5. Disguise Mode** — A hidden feature that overlays fake A-Level Maths notes to conceal the app. Triggered via:
- `🎓` button (top-left corner)
- `Esc` key pressed twice within 500 ms
- `Z` key (defined in `categories.js`)

### `categories.js`

Exports a single global `categories` object with these arrays:

| Key | Entries | Notes |
|-----|---------|-------|
| `objects` | 5 | General items (Umbrella, Guitar…) |
| `food` | 5 | Food items (Pizza, Sushi…) |
| `places` | 5 | Locations (Beach, Cinema…) |
| `footballers` | ~100 | Footballer names with 3 hints each |
| `footballTeams` | 12 | Club/national teams |
| `footballGoals` | 10 | Goal types (Volley, Panenka…) |

Each entry shape:
```js
{ word: "Messi", hints: ["Left", "Short", "Legend"] }
```

The file also registers the `Z`-key shortcut for disguise mode.

## Key Conventions

### Naming
- **State properties**: camelCase (`currentPlayerIndex`, `timerInterval`)
- **DOM IDs**: kebab-case (`#hard-mode`, `#sudden-death`, `#disguise-btn`)
- **CSS classes**: kebab-case (`.role-hidden-content`, `.counter-wrapper`, `.football-bg-container`)
- **Functions**: camelCase within `Screens` and `Actions` objects

### HTML Rendering Pattern
Screens are rendered by setting `app.innerHTML` to a template-literal string. There is no virtual DOM or diffing — the entire screen is replaced on every transition.

```js
// Correct pattern for adding/modifying screens
Screens.MyScreen = () => {
    return `<div class="card fade-in">...</div>`;
};
// Then render:
app.innerHTML = Screens.MyScreen();
```

### State Mutations
Mutate `state` directly — there is no reactivity layer. After mutating, re-render affected DOM nodes manually (e.g. `document.getElementById('p-count-display').innerText = state.players`) or re-render the full screen.

### Theme
The football theme (`body.football-theme`) is always active — applied on `init()` and never removed. All colour variables cascade from this class — do not hardcode colours outside of the `:root` block.

## Adding New Content

### Adding words to an existing category
Add entries to the relevant array in `categories.js`:
```js
{ word: "NewWord", hints: ["Hint1", "Hint2", "Hint3"] }
```
Each entry **must** have exactly 3 hints.

### Adding a new category
1. Add the array to `categories.js` under a new key.
2. In `imposter.html` → `Actions.startGame()`, extend the pool-building line:
   ```js
   const pool = [...categories.footballers, ...categories.footballTeams, ...categories.footballGoals, ...categories.newCategory];
   ```

### Adding a new disguise topic
Append to the `disguiseTopics` array in `imposter.html`:
```js
{
    title: "Subject: Topic Title",
    topic: "Subtitle",
    content: `<h3>...</h3><p>...</p>`
}
```

## Game Rules (for context)

1. Players configure the game on the Setup screen (3–15 players, 1–3 imposters, mode, hard mode, sudden death).
2. Each player passes the device and taps to reveal their role privately.
3. **Crewmates** see the secret word. **Imposters** see a one-word hint (or two hints in Sudden Death; nothing in Hard Mode).
4. A random player starts the questioning round (shown on the GameActive screen).
5. After discussion (5 min default; 2 min in Sudden Death), players vote out who they think is the imposter.
6. Word history is tracked in `state.usedWords` so the same word is not repeated in the same session.

## Constraints & Gotchas

- `categories.js` is loaded with a cache-busting query string (`?v=Date.now()`) via `document.write`. It must remain a synchronous global script — do not convert it to an ES module.
- There is no `var lastEscTime` declaration visible before its use in the keydown listener — it works due to implicit global hoisting but should be declared explicitly if refactoring.
- Duplicate entry: `Mahrez` appears twice in `categories.footballers` (lines 78 and 127). This is a known data issue.
- The `Z`-key listener is in `categories.js` (not `imposter.html`). Keep keyboard shortcuts co-located with the file that defines their target element, or consolidate into `imposter.html`.
- Player count minimum is 3; imposter count is always strictly less than player count (`imposters < players`).
- The app is designed for mobile-first use (max-width 420px container). Avoid layout changes that break this constraint.
