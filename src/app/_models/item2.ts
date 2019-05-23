// Created new class out of fear of breaking other stuff
export class Item2 {
  constructor(
    public id?: number,
    public upc?: string,
    public price?: number,
    public name?: string,
    public description?: string,
    public quantity?: number,
    public archived?: boolean,
  ) { }
}
