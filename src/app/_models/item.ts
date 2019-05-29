// Converted to interface instead of class
// Josh Checked - matches backend - 5/23/2019
export interface Item {
  id?: number;
  upc?: string;
  price?: number;
  name?: string;
  description?: string;
  quantity?: number;
  archived?: boolean;
  locationId?: number;
  alertId?: number;
}
