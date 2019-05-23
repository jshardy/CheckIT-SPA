
export class User {
  constructor(
    public id: number,
    public username: string,
    public permissionLevel?: number,
    public mainAdmin?: boolean
  ) { }
}
