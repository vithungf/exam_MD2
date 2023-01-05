import {ProductManager} from "../controller/productManager";
import {Product} from "../model/product";

let readlinesync = require('readline-sync');

export class menu {
    private manager = new ProductManager()
    private list = `
            1.show List Product:
            2.search Product:
            3.add Product:
            4.update Product:
            5.delete Product:
            6.exit`

    selection() {
        while (true) {
            let choice;
            do {
                console.log(this.list);
                choice = +readlinesync.question("choice:");
                if (choice < 1 || choice > 6) {
                    console.log("wrong choice. try again")
                }
            } while (choice < 1 || choice > 6);
            switch (choice) {
                case 1:
                    console.log("----*danh sach hang hoa*----");
                    this.manager.showProduct();
                    break;
                case 2:
                    let Name = readlinesync.question("Name: ");
                    this.manager.searchName(Name)

                    break;
                case 3:
                    let id = +readlinesync.question('id:');
                    let name = readlinesync.question('name:');

                    let kind = readlinesync.question("kind: ");
                    let price = +readlinesync.question("price: ");
                    let amount = +readlinesync.question("amount: ");
                    let datecreate = readlinesync.question("datecreate: ");
                    let describe = readlinesync.question("describe: ");
                    this.manager.addProduct(id, name, kind, price, amount, datecreate, describe)
                    break;
                case 4:

                    let newid = +readlinesync.question("ID")
                    let newkind = readlinesync.question("kind: ");
                    let newprice = +readlinesync.question("price: ");
                    let newamount = readlinesync.question("amount: ");
                    let newdatecreate = readlinesync.question("datecreate: ");
                    let newdescribe = readlinesync.question("describe: ");
                    this.manager.updateProduct(id, name, kind, price, amount, datecreate, describe)
                    break;
                case 5:
                    let ID = readlinesync.question("ID: ");
                    this.manager.deleteProduct(ID)
                    break;
                case 6:
                    return
                default:
                    break;


            }
        }
    }
}