// Used for searches.
export class CustomerSearchDto {
  constructor(
    public firstName?: string,
    public lastName?: string,
    public companyName?: string,
    public isCompany?: boolean,
    public phoneNumber?: string,
    public email?: string,
  ) { }
}
