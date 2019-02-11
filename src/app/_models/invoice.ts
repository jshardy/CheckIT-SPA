import { Item } from './item';

// Converted to interface instead of class
export interface Invoice {
  id?: number;
  invoiceDate?: string;
  outgoingInv?: boolean;
  incomingInv?: boolean;
  amountPaid?: number;
  lineItems?: Item[];
}
