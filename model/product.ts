export class Product{

    private _ID: number;
    private _name: string;
    private _kind: string;
    private _price: number;
    private _amount: number;
    private _dateCreated: string;
    private _describe : string;

    constructor(id: number,
                name: string,
                kind: string,
                price: number,
                amount: number,
                dateCreated: string,
                describe: string    ){
        this._ID = id;
        this._name = name;
        this._kind = kind;
        this._price = price;
        this._amount = amount;
        this._dateCreated = dateCreated;
        this._describe = describe;
    }


    getID(): number {
        return this._ID;
    }

    setID(value: number) {
        this._ID = value;
    }

    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }

    getKind(): string {
        return this._kind;
    }

    setKind(value: string) {
        this._kind = value;
    }

    getPrice(): number {
        return this._price;
    }

    setPrice(value: number) {
        this._price = value;
    }

    getAmount(): number {
        return this._amount;
    }

    setAmount(value: number) {
        this._amount = value;
    }

    getDateCreated(): string {
        return this._dateCreated;
    }

    setDateCreated(value: string) {
        this._dateCreated = value;
    }

    getDescribe(): string {
        return this._describe;
    }

    setDescribe(value: string) {
        this._describe = value;
    }

}