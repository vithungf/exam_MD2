import {Product} from "../model/product";

export class ProductManager {
    listProduct :Product[] = [];


    constructor (){
        this.listProduct.push(new Product(1,"banh",'banh keo',20000,10,'20/1/2023','an ngay'))
        this.listProduct.push(new Product(2,"keo",'banh keo',1000,50,'20/5/2023','sll'))
        this.listProduct.push(new Product(3,"thit bo",'thit',50000,5,'24/1/2023','mai giam gia'))
        this.listProduct.push(new Product(4,"rau cai",'rau',3000,20,'29/12/2023','sap hong'))
        this.listProduct.push(new Product(5,"nuoc loc",'nuoc',10000,100,'23/2/2023','sap het'))

         }

    addProduct(id: number, T: Product, kind: any, price: number, amount: number, datecreate: any, describe: any):void {
        this.listProduct.push(T);
    }
    searchName(name){
        for (let i = 0; i < this.listProduct.length; i++){
            if (this.listProduct[i].getName() == name){
                console.table(`id product: ${this.listProduct[i].getID()}
                                          name product: ${this.listProduct[i].getName()}
                                          kind product: ${this.listProduct[i].getKind()}
                                          price product: ${this.listProduct[i].getPrice()}
                                          amount product: ${this.listProduct[i].getAmount()}`)
            } else {
                console.log("-------*không có mặt hàng này*----")
            }
        }
    }
    updateProduct(ID,name,price,kind,amount,datecreated,describe){

            for (let i = 0; i < this.listProduct.length; i++){
                if (this.listProduct[i].getID()==ID){
                    this.listProduct[i].setName(name);
                    this.listProduct[i].setKind(kind);
                    this.listProduct[i].setPrice(price);
                    this.listProduct[i].setAmount(amount);
                    this.listProduct[i].setDateCreated(datecreated);
                    this.listProduct[i].setDescribe(describe);
                    console.log("------*Sửa Thành công*-------")
                } else {
                    console.log("------*không có id món hàng này*-------")
                }
            }
        }

    deleteProduct (ID: number):void {
        let index = this.findByID(ID);
        if (index === -1) {
            console.log('------------*ko tim thay mat hang nay *----------------')
        }else {
            this.listProduct.splice(index, 1);
            console.log('------------*xoa thanh cong*----------------')
        }
    }

    findByID(id: number): number {
        for (let i = 0; i < this.listProduct.length; i++) {
            if (this.listProduct[i].getID() === id) {
                return i;
            }
        }
        return
    }
    showProduct (){
        console.table(this.listProduct)
    }
}



