"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Log(target, PropertyName) {
    console.log("property decoratoe");
    console.log(target, PropertyName);
}
function Log2(target, name, descriptor) {
    console.log("methode Decoratot");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
class Product {
    constructor(s, title, _price) {
        this.title = title;
        this._price = _price;
        this.store = s;
    }
    set price(value) {
        if (value <= 0)
            throw new Error("invalid price - should be positive!");
        this._price = value;
    }
    get priceValue() {
        return `${this.title} ${this._price}`;
    }
    getProductTax(tax) {
        return this._price * (1 * tax);
    }
}
__decorate([
    Log
], Product.prototype, "store", void 0);
__decorate([
    Log2
], Product.prototype, "getProductTax", null);
//# sourceMappingURL=decorators.js.map