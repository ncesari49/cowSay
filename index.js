const userInfo = require("./information")

var cowsay = require("cowsay");

console.log(cowsay.say({
    text: `I am ${userInfo.name} and i study at ${userInfo.pos}`,
    e: "^^",
    T: "U "
}));
