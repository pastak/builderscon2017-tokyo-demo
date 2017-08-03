const path = require("path");

module.exports = {
    entry: {
        cookies: "./cookies.src.js"
    },
    output: {
        path: path.resolve(__dirname),
        filename: "[name].js"
    }
};
