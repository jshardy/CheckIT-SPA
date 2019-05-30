import { Item } from './item'

// for location paage
// created by Gabe 5/29

export class Location {
  constructor (
  public id?: number,
  public name?: string,
  public description?: string,
  public locationInventoryList?: Item[]
  ) { }
}