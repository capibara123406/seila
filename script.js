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
    quest("Chose a option",)
}

