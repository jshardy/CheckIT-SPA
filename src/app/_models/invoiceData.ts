export interface InvoiceData {
  id?: number;
  invoiceDate?: string;
  outgoingInv?: Boolean;
  amountPaid?: number;
  invoiceCustID?: number;
  itemList?: number[];
}
