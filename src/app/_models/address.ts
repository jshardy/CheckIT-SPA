// "id": 1,
// "country": "Portugal",
// "state": "Florida",
// "zipCode": "33731",
// "city": "Saint Petersburg",
// "street": "Main",
// "aptNum": "331",
// "defaultAddress": false,
// "addressCustID": 1

export class Address {
    constructor (
    public id?: number,
    public country?: string,
    public state?: string,
    public zipCode?: string,
    public city?: string,
    public street?: string,
    public aptNum?: string,
    public defaultAddress?: boolean,
    public addressCustID?: number
    ) { }
  }
