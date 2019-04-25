  //       public int Quantity { get; set; }
  //       public decimal Price { get; set; }
  //       public int ItemId {
  // get; set;

export class LineItemData {
  constructor(
    id?: number,
    quantity?: number,
    price?: number,
    itemID?: number,
    InvoiceId?: number
  ) { }
}


// public class LineItemData {
//   public int Id { get; set; }
//         public int Quantity { get; set; }
// [Column(TypeName = "Money")]
//         public decimal Price { get; set; }
//         public int ItemId { get; set; }
//         public int InvoiceId { get; set; }
//     }
