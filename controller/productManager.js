"use strict";
exports.__esModule = true;
exports.ProductManager = void 0;
var product_1 = require("../model/product");
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this.listProduct = [];
        this.listProduct.push(new product_1.Product(1, "banh", 'banh keo', 20000, 10, '20/1/2023', 'an ngay'));
        this.listProduct.push(new product_1.Product(2, "keo", 'banh keo', 1000, 50, '20/5/2023', 'sll'));
        this.listProduct.push(new product_1.Product(3, "thit bo", 'thit', 50000, 5, '24/1/2023', 'mai giam gia'));
        this.listProduct.push(new product_1.Product(4, "rau cai", 'rau', 3000, 20, '29/12/2023', 'sap hong'));
        this.listProduct.push(new product_1.Product(5, "nuoc loc", 'nuoc', 10000, 100, '23/2/2023', 'sap het'));
    }
    ProductManager.prototype.addProduct = function (id, T, kind, price, amount, datecreate, describe) {
        this.listProduct.push(T);
    };
    ProductManager.prototype.searchName = function (name) {
        for (var i = 0; i < this.listProduct.length; i++) {
            if (this.listProduct[i].getName() == name) {
                console.table("id product: ".concat(this.listProduct[i].getID(), "\n                                          name product: ").concat(this.listProduct[i].getName(), "\n                                          kind product: ").concat(this.listProduct[i].getKind(), "\n                                          price product: ").concat(this.listProduct[i].getPrice(), "\n                                          amount product: ").concat(this.listProduct[i].getAmount()));
            }
            else {
                console.log("-------*không có mặt hàng này*----");
            }
        }
    };
    ProductManager.prototype.updateProduct = function (ID, name, price, kind, amount, datecreated, describe) {
        for (var i = 0; i < this.listProduct.length; i++) {
            if (this.listProduct[i].getID() == ID) {
                this.listProduct[i].setName(name);
                this.listProduct[i].setKind(kind);
                this.listProduct[i].setPrice(price);
                this.listProduct[i].setAmount(amount);
                this.listProduct[i].setDateCreated(datecreated);
                this.listProduct[i].setDescribe(describe);
                console.log("------*Sửa Thành công*-------");
            }
            else {
                console.log("------*không có id món hàng này*-------");
            }
        }
    };
    ProductManager.prototype.deleteProduct = function (ID) {
        var index = this.findByID(ID);
        if (index === -1) {
            console.log('------------*ko tim thay mat hang nay *----------------');
        }
        else {
            this.listProduct.splice(index, 1);
            console.log('------------*xoa thanh cong*----------------');
        }
    };
    ProductManager.prototype.findByID = function (id) {
        for (var i = 0; i < this.listProduct.length; i++) {
            if (this.listProduct[i].getID() === id) {
                return i;
            }
        }
        return -1;
    };
    ProductManager.prototype.showProduct = function () {
        console.table(this.listProduct);
    };
    return ProductManager;
}());
exports.ProductManager = ProductManager;
