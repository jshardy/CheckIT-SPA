import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Customer } from '../_models/customer';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const customers = [
      { id: 11 , firstname: 'test', lastname: 'tester', companyName: 'Shoes Inc.'
      , addressId: 10, phoneNumber: '123-123-1234', email: 'blah@yahoo.com'},
      { id: 12 , firstname: 'Joe', lastname: 'Dirt', companyName: 'Shirts Inc.'
      , addressId: 11, phoneNumber: '123-123-1245', email: 'blah@google.com'},
      { id: 13 , firstname: 'Sally', lastname: 'Mally', companyName: 'Jacks Co.'
      , addressId: 12, phoneNumber: '123-152-1234', email: 'jack@jacks.co'},
      { id: 14 , firstname: 'Georgie', lastname: 'Boy', companyName: 'Finders Inc.'
      , addressId: 13, phoneNumber: '151-156-1234', email: 'hild@yahoo.com'},
      { id: 15 , firstname: 'Doe', lastname: 'John', companyName: 'Lost Co.'
      , addressId: 14, phoneNumber: '459-783-1234', email: 'lostfoo@google.com'},
      { id: 16 , firstname: 'Janice', lastname: 'Griffith', companyName: 'Shoes Inc.'
      , addressId: 15, phoneNumber: '125-215-4869', email: 'sqawk@yahoo.com'},
      { id: 17 , firstname: 'Blast', lastname: 'Hardcheese', companyName: 'Ripplin Inc.'
      , addressId: 16, phoneNumber: '111-000-2222', email: 'BlastCheeser@aol.com'},
    ];
    return {customers};
  }

  genId(customers: Customer[]): number {
    return customers.length > 0 ? Math.max(...customers.map(customer => customer.id)) + 1 : 11;
  }
}
