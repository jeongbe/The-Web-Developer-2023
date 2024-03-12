const args = process.argv.slice(2);
for (let arg of args) {
    console.log(`HI there, ${arg}`);
}

//? $ node greeter.js jse sst ssstg
// HI there, jse
// HI there, sst
// HI there, ssstg
