const leftPad = require("left-pad");

const resultNode = document.getElementById("result");
const textNode = document.getElementById("text");
const amountNode = document.getElementById("amount");
const withNode = document.getElementById("with");

document.getElementById("pad").addEventListener("click", (e) => {
    e.preventDefault();

    console.log("padding");
    resultNode.value = leftPad(textNode.value, Number(amountNode.value), withNode.value);
}, false);

document.getElementById("pad-bg").addEventListener("click", (e) => {
    e.preventDefault();
    var sendingMessage = browser.runtime.sendMessage({
        text: textNode.value,
        amount: Number(amountNode.value),
        with: withNode.value
    });
    sendingMessage.then((result) => {
      resultNode.value = result;
    });
});
