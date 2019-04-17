export interface InvoiceItem {
  id?: number;
  upc?: string;
  price?: number;
  name?: string;
  description?: string;
  quantityOnHand?: number;
  quantity?: number;
  locationId?: number;
  alertId?: number;
}
