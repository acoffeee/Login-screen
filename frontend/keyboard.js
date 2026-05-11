let curFocused = "none";
let keyboardIsToggled = false;
function toggleKeyboard() {
    const keyboard = document.getElementById("keyboard");
    const button = document.getElementById("toggleKeyboard");
    reset_forum()
    if(!keyboardIsToggled) {
        keyboard.style.display="flex";
        button.innerHTML = `Hide Keyboard`;
        keyboardIsToggled = true;
    }
    else{
        keyboard.style.display="none";
        button.innerHTML = `Show Keyboard`;
        keyboardIsToggled = false;
        
    }
}

function reset_forum() {
    let username = document.getElementById("user");
    let password = document.getElementById("pass");
    username.value = "";
    password.value = "";
    curFocused = "username";
    setFocus();
}

function add_keycaps(randomize) {
    let keys = []
    
    for(let i = 0; i <=0; i++) {
        keys.push(i);
    }
    
    for(let i = 65; i<= 90; i++) {
        keys.push(String.fromCharCode(i));
    }
    
    keys.push( "<", ">","🠈", "🠊", "⥀");
    if(randomize) {
        for (let i = keys.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [keys[i], keys[j]] = [keys[j], keys[i]];
        }
    }
    const keyboard = document.getElementById("keyboard");
    for(let key of keys){
        let keyElement = document.createElement("div");
        keyElement.classList.add("key");
        keyElement.style.color = "purple";
        if(["<",">"].includes(key)) keyElement.style.color = "white";
        if(["⥀", "🠈"].includes(key)) keyElement.style.color = "red";
        if(key === "🠊") keyElement.style.color = "green";
        keyElement.innerHTML = `${key}`;
        keyboard.append(keyElement);
    }
}
function getCurrentFocused() {
    let cur;
    if(curFocused === "username") {
        cur = document.getElementById("user");
    } else if(curFocused === "password") {
        cur = document.getElementById(("pass"));
    } else {
        return null;
    }
    return cur;
}
function moveCursor(direction) {
    let cur = getCurrentFocused();
    if(cur == null) {
        return false;
    }
    cur.focus();

    let pos = cur.selectionStart;
    temp = pos;
    pos += direction;

    // keep inside bounds
    pos = Math.max(0, Math.min(pos, cur.value.length));

    cur.setSelectionRange(pos, pos);
    //if unchanged, return false, else return true;
    if(temp == pos) {
        return false;
    } else {
        return true;
    }
}

function delete_character() {
    let cur = getCurrentFocused();
    if(cur == null) {
        return;
    }
    let start = cur.selectionStart;
    cur.value = cur.value.slice(0, start - 1) + cur.value.slice(start);
    return true;
}
function setFocus(){
    switch(curFocused) {
        case "none":
            curFocused = "username";
            break;

        case "username":
            curFocused = "username";
            break;

        case "password":
            curFocused = "password";
            break;
    }
}
function pressKey(key){
    let cur = getCurrentFocused();
    if(cur == null) {
        return;
    }
    let start = cur.selectionStart;
    let end = cur.selectionEnd;
    const text = cur.value;
    cur.value = text.slice(0, start) + key + text.slice(end);

}
document.getElementById("keyboard").addEventListener("click", function(key){
    if (key.target.classList.contains('key')) {
        const keyValue = key.target.textContent;
        switch(keyValue) {
            case "<":
                moveCursor(-1);
                break;
            case ">":
                moveCursor(1);
                break;
            case "🠈":
                if(moveCursor(-1)) {
                    delete_character();
                }
                break;
            case "⥀":
                reset_forum();
                break;
            case "🠊":
                if(curFocused === "none" || curFocused === "username") {
                    curFocused = "password";
                    setFocus();
                }
                break;
            default:
                pressKey(keyValue);
                break;
                
        }
    }
});
let toggle_EL = document.getElementById("toggleKeyboard").addEventListener("click", toggleKeyboard);
add_keycaps(false);
