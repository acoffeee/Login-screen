let data = {
  "jdoe92": "BlueSky!482",
  "emma_w": "Sunset#914",
  "liam23": "TigerPaw77",
  "sophia.m": "CloudyDay12",
  "alexTurner": "RacingFan88",
  "mia_2024": "PurpleRain55",
  "noahb": "MapleLeaf21",
  "olivia.k": "StarDust999",
  "ethan_h": "OceanWave44",
  "ava1999": "MoonLight73",
  "lucas.dev": "CodeMaster88",
  "isabella_r": "CherryTree61",
  "mason22": "RocketFuel93",
  "charlotte.a": "SunnySide77",
  "logan_h": "NightFox29",
  "amelia88": "CrystalSky40",
  "elijah.s": "WinterWind15",
  "harperj": "Firefly66",
  "james_k": "RedRiver84",
  "evelyn.m": "GoldenLeaf22",
  "benjaminp": "ThunderCat71",
  "abigail_w": "SnowFall93",
  "daniel.c": "PixelHero54",
  "ella_rose": "MagicMoon38",
  "michael99": "FastTrack72",
  "scarlett_h": "VelvetSky49",
  "henry_t": "BrightStar19",
  "grace.l": "ForestPath81",
  "jacksonv": "SilverLake27",
  "chloe_m": "LuckyStone56",
  "sebastian.a": "DeepOcean65",
  "victoriaj": "HappyTrail88",
  "owen_b": "IronShield44",
  "zoe.s": "GoldenCloud31",
  "samuel_h": "BlueRiver76",
  "nora_anne": "DreamLight58",
  "gabrielp": "EchoMountain92",
  "lily.r": "AmberField64",
  "carterx": "RapidStorm39",
  "hannah_k": "WildFlower83"
};
//note this is ai generated cause im LAZY
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
let running = false;
async function submit() {
    if(running) return;
    running = true;
    let username = document.getElementById("user");
    let password = document.getElementById("pass");
    let terminal = document.getElementById("terminal");
    username = username.value
    password = password.value;
    if(username === "" || password === "") {
        let box = document.getElementById("loginbox");
        const errorMessage = document.createElement("p");
        errorMessage.classList.add("null-userpass");
        errorMessage.textContent ="Username or Password is invalid.";
        box.append(errorMessage);
        console.log("condition met")
        await wait(1000);
        errorMessage.remove();
        running = false;
        return;
    }
    for(const [user, pass] of Object.entries(data)) {
        let result;
        if(username === user && password === pass) {
            result =  document.createElement("div");
            result.classList.add("log-box");
            result.textContent = "Login succeful!";
        } else {
            result =  document.createElement("div");
            result.classList.add("log-box-fail");
            result.textContent = `---\nUser: ${user} \n Pass: ${pass}) \n does not match the given credentials \n (user=${username}, pass=${password}) \n Trying next entry in database...`;
        }
        terminal.append(result);
        await wait(700);
    running = false;
    }
}
