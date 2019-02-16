import { Component, OnInit } from '@angular/core';

import { Customer } from '../_models/customer';
import { Address } from '../_models/address';
import { Invoice } from '../_models/invoice';

@Component({
  selector: 'app-customer',
  templateUrl: './customerresults.component.html',
  styleUrls: ['./customerresults.component.css']
})
export class CustomerResultsComponent implements OnInit {
  customers?: Customer[];

  constructor() { }

  ngOnInit() {
  }

}
