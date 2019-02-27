import { Customer } from '../_models/customer';
// I need a first and last name from web api in one field.

export interface SelectionData {
  id: number;
  selected: String;
  firstLastName: String[];
  customers: Customer[];
}
