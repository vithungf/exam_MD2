"use strict";
exports.__esModule = true;
exports.menu = void 0;
var productManager_1 = require("../controller/productManager");
var readlinesync = require('readline-sync');
var menu = /** @class */ (function () {
    function menu() {
        this.manager = new productManager_1.ProductManager();
        this.list = "\n            1.show List Product:\n            2.search Product:\n            3.add Product:\n            4.update Product:\n            5.delete Product:\n            6.exit";
    }
    menu.prototype.selection = function () {
        while (true) {
            var choice = void 0;
            do {
                console.log(this.list);
                choice = +readlinesync.question("choice:");
                if (choice < 1 || choice > 6) {
                    console.log("wrong choice. try again");
                }
            } while (choice < 1 || choice > 6);
            switch (choice) {
                case 1:
                    console.log("----*danh sach hang hoa*----");
                    this.manager.showProduct();
                    break;
                case 2:
                    var Name = readlinesync.question("Name: ");
                    this.manager.searchName(Name);
                    break;
                case 3:
                    var id = +readlinesync.question('id:');
                    var name_1 = readlinesync.question('name:');
                    var kind = readlinesync.question("kind: ");
                    var price = +readlinesync.question("price: ");
                    var amount = +readlinesync.question("amount: ");
                    var datecreate = readlinesync.question("datecreate: ");
                    var describe = readlinesync.question("describe: ");
                    this.manager.addProduct(id, name_1, kind, price, amount, datecreate, describe);
                    break;
                case 4:
                    var newid = +readlinesync.question("ID");
                    var newkind = readlinesync.question("kind: ");
                    var newprice = +readlinesync.question("price: ");
                    var newamount = readlinesync.question("amount: ");
                    var newdatecreate = readlinesync.question("datecreate: ");
                    var newdescribe = readlinesync.question("describe: ");
                    this.manager.updateProduct(id, name_1, kind, price, amount, datecreate, describe);
                    break;
                case 5:
                    var ID = readlinesync.question("ID: ");
                    this.manager.deleteProduct(ID);
                    break;
                case 6:
                    return;
                default:
                    break;
            }
        }
    };
    return menu;
}());
exports.menu = menu;
