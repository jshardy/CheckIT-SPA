import { Address } from './address';
import { Invoice } from './invoice';

// "id": 1,
//   "firstName": "William",
//     "lastName": "Jacmar",
//       "companyName": "Jatri",
//         "isCompany": true,
//           "phoneNumber": "748-518-9986",
//             "email": "wjacmar0@unblog.fr",
//               "custAddress": {
// "customerInvoiceList": [
//   {

export class Customer {
  constructor (
  public id: number,
  public firstName: string,
  public lastName: string,
  public companyName: string,
  public isCompany: boolean,
  public phoneNumber: string,
  public email: string,
  public custAddress: Address,
  public customerInvoiceList: Invoice[]
  ) { }
}
