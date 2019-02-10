<<<<<<< HEAD
export class Customer {
    constructor (
    public id?: number,
    public firstname?: string,
    public lastname?: string,
    public companyName?: string,
    public addressID?: number,
    public phoneNumber?: string,
    public email?: string
    ) { }
=======
import { Address } from './address';

export class Customer {
  constructor (
  public id?: number,
  public firstname?: string,
  public lastname?: string,
  public companyName?: string,
  public address?: Address,
  public phoneNumber?: string,
  public email?: string
  ) { }
>>>>>>> FAST-GUI
}
