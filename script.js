const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

function quest(txt, callback) {
    rl.question(txt, (response) => {
        callback(response);
    });
}

function menu() {
    showmenu();

    quest("Choose a option", (op) => {
        switch (op) {
            case '1':
                registerbook();
                break;
            case '2':
                listbooks();
                break;
            case '3':
                editbooks();
                break;
        }
    })
}

function showmenu() {}