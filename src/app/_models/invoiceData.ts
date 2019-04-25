import { LineItemData } from './LineItemData';

export interface InvoiceData {
  id?: number;
  invoiceDate?: Date;
  outgoingInv?: Boolean;
  amountPaid?: number;
  invoiceCustID?: number;
  lineItemList?: LineItemData[];
}


// public class InvoiceData {
//   public int Id { get; set; }
//         public DateTime InvoiceDate { get; set; }
//         public bool OutgoingInv { get; set; }
//         public decimal AmountPaid { get; set; }
//         public int InvoiceCustID { get; set; }
//         public List < LineItemData > LineItemList { get; set; }
//     }
