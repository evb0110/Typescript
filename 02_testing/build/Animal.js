"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.sayName = function () {
        console.log("Name: " + this.name);
    };
    return Animal;
}());
exports.Animal = Animal;
