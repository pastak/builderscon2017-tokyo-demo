const path = require("path");

module.exports = {
    entry: {
        choose_beast: "./popup/choose_beast.src.js",
        beastify: "./content_scripts/beastify.src.js"
    },
    output: {
        path: path.resolve(__dirname),
        filename: "[name].js"
    }
};
