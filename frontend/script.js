
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
let terminalIsToggled = false;
function terminalToggle() {
    const terminal = document.getElementById("terminal");
    const button = document.getElementById("toggle-logs");
    if(!terminalIsToggled) {
        terminal.classList.add("funny-box");
        button.innerHTML = `Hide Logs`;
        terminalIsToggled = true;
    }
    else{
        terminal.classList.remove("funny-box");
        button.innerHTML = `Show Logs`;
        terminalIsToggled = false;
        
    }
    
}
