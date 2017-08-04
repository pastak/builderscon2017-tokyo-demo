const path = require("path");

module.exports = {
    entry: {
        background: "./background.src.js"
    },
    output: {
        path: path.resolve(__dirname),
        filename: "[name].js"
    }
};
