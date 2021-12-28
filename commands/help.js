// help Function
function helpFn( ){
    console.log(`
        List of All the commands:
            // node main.js tree "directoryPath"
            // node main.js organize "directoryPath"
            // node main.js help
            `); // use backtickfor preferd intendation o
}
module.exports = {
    helpKey: helpFn
}