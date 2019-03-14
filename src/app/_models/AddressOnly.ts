import { Customer } from './customer';
// {
//     "country": "Cameroon",
//     "state": "Alabama",
//     "zipCode": "35290",
//     "city": "Birmingham",
//     "street": "Raven",
//     "aptNum": "332",
//     "defaultAddress": false
// }

// for use with api/address/id

export class AddressOnly {
  constructor(
  public id?: number,
  public country?: String,
  public state?: String,
  public zipCode?: String,
  public city?: String,
  public street?: String,
  public aptNum?: String,
  public defaultAddress?: Boolean
  ) { }
}
