export class AlertData {
  constructor(
    public id: Number,
    public alertInvId: Number,
    public threshold: Number,
    public dateUnder: Date,
    public dateOrdered: Date,
    public alertOn: Boolean,
    public alertTriggered: Boolean,
    public itemName: String,
    public itemUPC: String,
    public quantity: Number,
  )
  { }
}


        // public int Id { get; set; }
        // [Required]
        // public int AlertInvId { get; set; }
        // [Required]
        // public int Threshold { get; set; }
        // public DateTime? DateUnder { get; set; }
        // public DateTime? DateOrdered { get; set; }
        // public bool AlertOn { get; set; }
        // public bool AlertTriggered { get; set; }
        // public string ItemName { get; set; }
        // public string ItemUPC { get; set; }
        // public int Quantity { get; set; }
