import { LineItemData } from './LineItemData';

        // public DateTime InvoiceDate { get; set; }
        // public bool OutgoingInv { get; set; }
        // public decimal AmountPaid { get; set; }
        // public int InvoiceCustID { get; set; }
        // public ICollection < LineItemData > ItemList
export interface InvoiceData {
  invoiceData: Date;
  outgoingInv: boolean;
  AmountPaid: number;
  invoiceCustID: number;
  itemList: LineItemData[];
}
