const categories = {
    objects: [
        { word: "Umbrella", hints: ["Beach", "Handle", "Dry"] },
        { word: "Candle", hints: ["Romantic", "Scent", "Bath"] },
        { word: "Backpack", hints: ["Books", "School", "Strain"] },
        { word: "Clock", hints: ["Gear", "Face", "Realise"] },
        { word: "Guitar", hints: ["Strum", "Pick", "Romantic"] }
    ],
    food: [
        { word: "Pizza", hints: ["Red", "Box", "Crust"] },
        { word: "Ice Cream", hints: ["Scoop", "Cone", "Freeze"] },
        { word: "Popcorn", hints: ["Butter", "Salt", "Bucket"] },
        { word: "Sushi", hints: ["Roll", "Raw", "Rice"] },
        { word: "Coffee", hints: ["Bean", "Roast", "Morning"] }
    ],
    places: [
        { word: "Beach", hints: ["Sand", "Tide", "Towel"] },
        { word: "Gym", hints: ["Sweat", "Weights", "Membership"] },
        { word: "Airplane", hints: ["Aisle", "Seatbelt", "Sky"] },
        { word: "Library", hints: ["Quiet", "Books", "Card"] },
        { word: "Cinema", hints: ["Screen", "Ticket", "Dark"] }
    ],


  footballers: [
{ word: "Messi", hints: ["Left", "Short", "Legend"] },
{ word: "Ronaldo", hints: ["Euro", "Records", "UCL"] }, // Completed
{ word: "Mbappe", hints: ["Mask", "Money", "Paris"] },
{ word: "Lewandowski", hints: ["Complete", "Five", "Records"] }, // Completed
{ word: "Neymar", hints: ["Dribble", "Flair", "Brazil"] },
{ word: "Modric", hints: ["Luka", "Finalist", "Outside"] },
{ word: "Iniesta", hints: ["Final", "Clutch", "Midfield"] },
{ word: "Xavi", hints: ["Pass", "TikiTaka", "Brain"] },
{ word: "Beckham", hints: ["Spice", "FreeKick", "Hair"] },
{ word: "Ibrahimovic", hints: ["KungFu", "Quote", "Tall"] },
{ word: "Salah", hints: ["Left", "Speed", "Curl"] },

{ word: "Kane", hints: ["Captain", "Penalty", "Spurs"] },
{ word: "Son", hints: ["Smile", "Weak Foot", "Finish"] },
{ word: "DeBruyne", hints: ["Assist", "Blonde", "City"] },
{ word: "VanDijk", hints: ["Defender", "Aura", "Wall"] },
{ word: "Alisson", hints: ["Gloves", "ShotStopper", "Beard"] },
{ word: "Ederson", hints: ["Tattoo", "Keeper", "Pass"] },
{ word: "Neuer", hints: ["Sweeper", "Rush", "Leader"] },
{ word: "Buffon", hints: ["Legend", "Longevity", "Age"] },
{ word: "Casillas", hints: ["Saint", "Reflex", "Gloves"] },
{ word: "Puyol", hints: ["Hair", "Captain", "Lion"] },

{ word: "Ronaldinho", hints: ["Smile", "Teeth", "Skills"] },
{ word: "Kaka", hints: ["Bible", "BallonDor", "Elegant"] },
{ word: "Rivaldo", hints: ["Left", "Volley", "2002"] },
{ word: "Henry", hints: ["Arsenal", "Fast", "Hand"] },
{ word: "Vieira", hints: ["Midfield", "Tall", "Captain"] },
{ word: "Bergkamp", hints: ["Ice", "Touch", "Planes"] },
{ word: "Lampard", hints: ["Frank", "Goals", "Chelsea"] },
{ word: "Gerrard", hints: ["Slip", "Liverpool", "LongShot"] },
{ word: "Scholes", hints: ["Red", "Pass", "Quiet"] },
{ word: "Giggs", hints: ["Wing", "OneClub", "Longevity"] },

{ word: "Pirlo", hints: ["Beard", "FreeKick", "Wine"] },
{ word: "Totti", hints: ["Rome", "Prince", "Loyal"] },
{ word: "DelPiero", hints: ["Curl", "Juventus", "Smile"] },
{ word: "Zidane", hints: ["Head", "Magic", "Bald"] },
{ word: "Figo", hints: ["Transfer", "Wing", "Whistle"] },
{ word: "Raul", hints: ["Seven", "Madrid", "Finger"] },
{ word: "Robben", hints: ["CutInside", "Left", "Bald"] },
{ word: "Ribery", hints: ["Scar", "Wing", "Flair"] },
{ word: "Klose", hints: ["WorldCup", "Headers", "Poacher"] },
{ word: "Forlan", hints: ["Volley", "GoldenBoot", "WorldCup"] },

{ word: "Shearer", hints: ["Records", "95", "Balding"] },
{ word: "Cantona", hints: ["Collar", "Kick", "King"] },
{ word: "Keane", hints: ["Captain", "Temper", "Brexit"] },
{ word: "Sanchez", hints: ["Regret", "Marseille", "Hoe"] },
{ word: "Aguero", hints: ["Heart", "Near-Post", "Godfather"] }, // Completed
{ word: "Sterling", hints: ["Pace", "City", "Controversy"] },
{ word: "GabrielJesus", hints: ["Smile", "Brazil", "Speed"] },
{ word: "Mahrez", hints: ["Algeria", "Left", "Trick"] },
{ word: "Tevez", hints: ["Scars", "Traitor", "City"] },
{ word: "DiMaria", hints: ["Angel", "Wings", "Left"] },
{ word: "Higuain", hints: ["Final", "Naples", "Striker"] },
{ word: "Dybala", hints: ["Mask", "Tattoo", "Left"] },
{ word: "Lukaku", hints: ["Power", "Chelsea", "Strength"] }, // 

{ word: "Haaland", hints: ["Trapped", "Records", "Disciplined"] }, // Completed
{ word: "Bellingham", hints: ["Brother", "Accent", "Ancelotti"] }, // Completed
{ word: "Foden", hints: ["Wonderkid", "HomeGrown", "Talent"] }, // Completed
{ word: "Vinicius", hints: ["Dance", "Sulky", "Robbed"] }, // Completed
{ word: "Rodri", hints: ["Holding", "Anchor", "Systematic"] }, // Completed
{ word: "Alaba", hints: ["Versatile", "Eastern-European", "Left"] }, // Completed 
{ word: "Kimpembe", hints: ["Injury", "FIFA", "Maestro"] }, // Completed
{ word: "Pedri", hints: ["Wonderkid", "Talent", "Loyalty"] }, // Completed
{ word: "Gavi", hints: ["Wonderkid", "Talent", "Aggression"] }, // Completed
{ word: "AnsuFati", hints: ["Injury", "Wonderkid", "Failed"] }, // Completed
{ word: "Osimhen", hints: ["Mask", "African", "Height"] }, // Completed
{ word: "Kvaratskhelia", hints: ["Dribble", "Unpredictable", "Eastern-European"] }, // Completed
{ word: "Courtois", hints: ["Tall", "Reach", "Pinnacle"] },
{ word: "TerStegen", hints: ["Sweeper", "Reflex", "Barca"] },

{ word: "Chiellini", hints: ["Controversial", "Shithouse", "Smile"] }, // Completed
{ word: "Bonucci", hints: ["Euro", "BuildUp", "Center"] },
{ word: "Thiago", hints: ["Precision", "Tempo", "Control"] }, // Completed
{ word: "Fabregas", hints: ["Assist", "Vision", "Midfield"] },
{ word: "Isco", hints: ["Magic", "BallRoll", "Elegant"] }, // Completed
{ word: "Morata", hints: ["Head", "Chelsea", "Striker"] }, 
{ word: "J.Rodríguez", hints: ["Volley", "Playmaker", "Left"] },
{ word: "Falcao", hints: ["Tiger", "Header", "Box"] },
{ word: "Cavani", hints: ["Workrate", "Hair", "Run"] },
{ word: "Suarez", hints: ["Shithouse", "Bite", "Chaos"] },
{ word: "Godin", hints: ["Defense", "Leadership", "Blocks"] },

{ word: "Davids", hints: ["Glasses", "Pitbull", "Dreadlocks"] },
{ word: "Seedorf", hints: ["Champions", "Power", "Icon"] },
{ word: "Nedved", hints: ["Blonde", "Engine", "Run"] },
{ word: "Cech", hints: ["Helmet", "Keeper", "Chelsea"] },
{ word: "Yashin", hints: ["Icon", "Revolution", "Legend"] },
{ word: "Lineker", hints: ["Crisps", "Poacher", "Goals"] },
{ word: "Owen", hints: ["Wonder", "Young Prime", "Wonderkid"] },
{ word: "Riquelme", hints: ["Slow", "Pause", "Vision"] },
{ word: "Batistuta", hints: ["Hair", "Power", "Thunder"] },
{ word: "Stoichkov", hints: ["Left", "Attitude", "Temper"] },

{ word: "Eto'o", hints: ["Treble", "Runs", "Speed"] },
{ word: "Drogba", hints: ["Final", "Clutch", "Power"] },
{ word: "Essien", hints: ["Bison", "Engine", "Icon"] },
{ word: "Toure", hints: ["BoxToBox", "City", "Midfield"] },
{ word: "Mahrez", hints: ["Left", "Touch", "Curl"] },
{ word: "Mane", hints: ["Press", "Smile", "Wing"] },
{ word: "Koulibaly", hints: ["Defense", "Strength", "Wall"] }, 
{ word: "Hakimi", hints: ["Overlap", "Speed", "Right"] },
{ word: "Ziyech", hints: ["Left", "African", "Forgotten"] }, // Moroccan heritage - Completed
{ word: "Ochoa", hints: ["WorldCup", "Reflex", "Keeper"] }
]

,
    footballTeams: [
        { word: "Real Madrid", hints: ["Laliga", "Kings", "Spain"] },
        { word: "Barcelona", hints: ["Camp Nou", "Messi", "Catalonia"] },
        { word: "Man City", hints: ["Blue", "Pep", "Champions"] },
        { word: "Liverpool", hints: ["Red", "Anfield", "Klopp"] },
        { word: "Man United", hints: ["Red", "Devils", "Old Trafford"] },
        { word: "Arsenal", hints: ["Gunners", "Cannon", "London"] },
        { word: "Chelsea", hints: ["Blue", "London", "Lions"] },
        { word: "Bayern Munich", hints: ["Red", "Germany", "Bundesliga"] },
        { word: "Juventus", hints: ["Zebra", "Italy", "Old Lady"] },
        { word: "Brazil", hints: ["Yellow", "Samba", "Five"] },
        { word: "Argentina", hints: ["Blue", "Messi", "WorldCup"] },
        { word: "PSG", hints: ["Tower", "France", "Money"] }
    ],
    footballGoals: [
        { word: "Penalty", hints: ["Spot", "12 Yards", "Foul"] },
        { word: "Free Kick", hints: ["Wall", "Spray", "Curl"] },
        { word: "Header", hints: ["Jump", "Cross", "Corner"] },
        { word: "Volley", hints: ["Air", "Strike", "Cross"] },
        { word: "Bicycle Kick", hints: ["Overhead", "Back", "Acrobatic"] },
        { word: "Own Goal", hints: ["Mistake", "Wrong", "Embarrassing"] },
        { word: "Panenka", hints: ["Chip", "Cheeky", "Penalty"] },
        { word: "Tap In", hints: ["Easy", "Close", "Pass"] },
        { word: "Long Shot", hints: ["Distance", "Power", "Scream"] },
        { word: "Chip", hints: ["Lob", "Over", "Keeper"] }
    ],
    footballPositions: [
        { word: "Goalkeeper", hints: ["Gloves", "Penalty", "Last Man"] },
        { word: "Centre Back", hints: ["Header", "Tackle", "Leader"] },
        { word: "Left Back", hints: ["Overlap", "Wing", "Left"] },
        { word: "Right Back", hints: ["Bomb On", "Wing", "Right"] },
        { word: "Sweeper", hints: ["Cover", "Last", "Clean"] },
        { word: "Defensive Mid", hints: ["Screen", "Shield", "Anchor"] },
        { word: "Central Mid", hints: ["Box To Box", "Engine", "Link"] },
        { word: "Attacking Mid", hints: ["Ten", "Vision", "Creative"] },
        { word: "Left Winger", hints: ["Pace", "Dribble", "Left Foot"] },
        { word: "Right Winger", hints: ["Pace", "Cross", "Right Foot"] },
        { word: "False Nine", hints: ["Drop", "Space", "Confuse"] },
        { word: "Striker", hints: ["Goal", "Poach", "Box"] }
    ]
};

document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'z') {
        const btn = document.getElementById('disguise-btn') || document.querySelector('.fa-graduation-cap');
        if (btn) btn.click();
    }
});
