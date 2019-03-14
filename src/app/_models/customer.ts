import { Address } from './address';
import { Invoice } from './invoice';
import { AddressOnly } from './AddressOnly';

// {
//   "id": 1,
//   "firstName": "William",
//   "lastName": "Jacmar",
//   "companyName": "Jatri",
//   "isCompany": true,
//   "phoneNumber": "748-518-9986",
//   "email": "wjacmar0@unblog.fr",
//   "custAddress": {
//   "customerInvoiceList": [
// {
// TODO: All of your objects are wrong! You are giving me raw objects!
// TODO: You are giving me MODELS!
export class Customer {
  constructor (
  public id?: number,
  public firstName?: string,
  public lastName?: string,
  public companyName?: string,
  public isCompany?: boolean,
  public phoneNumber?: string,
  public email?: string,
  public custAddressId?: number,
  public custAddress?: AddressOnly,
  public customerInvoiceList?: Invoice[]
  ) { }
}
