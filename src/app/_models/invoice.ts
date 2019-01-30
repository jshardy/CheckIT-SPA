export class Invoice {
  constructor (
  public id?: number,
  public businessId?: number,
  public date?: string,
  public outgoingInv?: number,
  public incomingInv?: number,
  public totalcost?: number,
  ) {}
}
