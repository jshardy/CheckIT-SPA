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

export interface AddressOnly {
  country: String;
  state: String;
  zipCode: String;
  city: String;
  street: String;
  aptNum: String;
  defaultAddress: Boolean;
}
