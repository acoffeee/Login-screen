import authenticate from '/backend/api/main.js';
//note this is ai generated cause im LAZY
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
let running = false;
async function submit() {
    if(running) return;
    running = true;
    let username = document.getElementById("user");
    let password = document.getElementById("pass");
    let keyboard = document.getElementById("keyboard");
    username = username.value
    password = password.value;
    let box = document.getElementById("loginbox");
    if(username === "" || password === "") {
        const errorMessage = document.createElement("p");
        errorMessage.classList.add("null-userpass");
        errorMessage.textContent ="Username or Password is invalid.";
        box.append(errorMessage);
        await wait(1000);
        errorMessage.remove();
        running = false;
        return;
    }
    let [ response_code, message ] = await authenticate(username, password);
    console.log(response_code);
    console.log(message);
    if(response_code === 1) {
        //login logic idr what im bouta do tbh
        return;
    } else {
        const errorMessage = document.createElement("p");
        errorMessage.classList.add("null-userpass");
        errorMessage.textContent = message;
        box.append(errorMessage);
        await wait(1000);
        errorMessage.remove();
    }
    running = false;
}

let submit_EL = document.getElementById("submitDetails").addEventListener("click", submit);
