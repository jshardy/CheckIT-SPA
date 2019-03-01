import { Customer } from '../_models/customer';
// I need a first and last name from web api in one field.

export interface CustomerSelectionData {
  id: number;
  firstLastName: String;
  companyName: String;
  phoneNumber: String;
}
