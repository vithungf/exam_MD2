"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(id, name, kind, price, amount, dateCreated, describe) {
        this._ID = id;
        this._name = name;
        this._kind = kind;
        this._price = price;
        this._amount = amount;
        this._dateCreated = dateCreated;
        this._describe = describe;
    }
    Product.prototype.getID = function () {
        return this._ID;
    };
    Product.prototype.setID = function (value) {
        this._ID = value;
    };
    Product.prototype.getName = function () {
        return this._name;
    };
    Product.prototype.setName = function (value) {
        this._name = value;
    };
    Product.prototype.getKind = function () {
        return this._kind;
    };
    Product.prototype.setKind = function (value) {
        this._kind = value;
    };
    Product.prototype.getPrice = function () {
        return this._price;
    };
    Product.prototype.setPrice = function (value) {
        this._price = value;
    };
    Product.prototype.getAmount = function () {
        return this._amount;
    };
    Product.prototype.setAmount = function (value) {
        this._amount = value;
    };
    Product.prototype.getDateCreated = function () {
        return this._dateCreated;
    };
    Product.prototype.setDateCreated = function (value) {
        this._dateCreated = value;
    };
    Product.prototype.getDescribe = function () {
        return this._describe;
    };
    Product.prototype.setDescribe = function (value) {
        this._describe = value;
    };
    return Product;
}());
exports.Product = Product;
