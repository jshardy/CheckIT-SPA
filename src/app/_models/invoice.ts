import { LineItem } from './lineItem';

// {
//   "id": 1,
//     "invoiceDate": "2017-06-06T00:00:00",
//       "outgoingInv": false,
//         "amountPaid": 8.19,
//           "invoiceCustID": 1,
//             "invoicesLineList": null
// }

// Converted to interface instead of class
export interface Invoice {
  id: number;
  invoiceDate?: string;
  outgoingInv?: boolean;
  amountPaid?: number;
  invoiceCustID: number;
  lineItems?: LineItem[];
}
