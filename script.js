
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
    running = false;
}
