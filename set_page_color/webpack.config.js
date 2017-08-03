const path = require("path");

module.exports = {
    entry: {
        popup: "./popup.src.js"
    },
    output: {
        path: path.resolve(__dirname),
        filename: "popup.js"
    }
};
