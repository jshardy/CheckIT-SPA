<<<<<<< HEAD
export class invoice
{
    id: number;
    totalcost: number;
    invoicedate: Date;
    
}
=======
import { Item } from './item';

// Converted to interface instead of class
export interface Invoice {
  id: number;
  businessId: number;
  invoiceDate?: string;
  outgoingInv?: number;
  incomingInv?: number;
  amountPaid?: number;
  items?: Item[];
}
>>>>>>> FAST-GUI
