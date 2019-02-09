export class Address {
    constructor (
    public id?: number,
    public country?: string,
    public state?: string,
    public zipCode?: string,
    public city?: string,
    public street?: string,
    public aptNum?: string,
    public defaultAddress?: boolean
    ) { }
  }