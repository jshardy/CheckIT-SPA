import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Customer } from '../_models/customer';
import { CustomerService } from '../_services/customer.service';
import { AddressService } from '../_services/address.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  sub?: any;
  currentCustomer?: Customer;
  @Input() id: number;
  modify: boolean;
  public stateNames = 
  ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia',
  'Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana',
  'Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada',
  'New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma',
  'Oregon','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont',
  'Virgin Islands','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
  public stateCodes = 
  ['AL','AK','AZ','AR','CA','CO','CT','DE','DC','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO',
  'MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','PR','RI','SC','SD','TN','TX','UT','VT','VI','VA','WA','WV','WI','WY'];

  constructor(private customerService: CustomerService, private route: ActivatedRoute, private router: Router,
      private alertify: AlertifyService, private addressService: AddressService) { }

  ngOnInit() {
    if (this.id === undefined) {
      this.sub = this.route.params.subscribe(params => {
         this.customerService.getCustomer(+params['id']).subscribe((customer: Customer) => {
           this.currentCustomer = customer;
           let i = 0;
           this.stateNames.forEach(state => {
             if (this.currentCustomer.custAddress.state === state) {
               this.currentCustomer.custAddress.state = this.stateCodes[i];
             }
             i++;
           });
        });
      });
    } else {
      this.customerService.getCustomer(this.id).subscribe((customer: Customer) => {
        this.currentCustomer = customer;
        let i = 0;
        this.stateNames.forEach(state => {
          if (this.currentCustomer.custAddress.state === state) {
            this.currentCustomer.custAddress.state = this.stateCodes[i];
          }
          i++;
        });
      });
    }
    this.modify = false;
  }

  deleteCustomer() {
    if (this.modify) {
      this.customerService.getCustomer(this.currentCustomer.id).subscribe((customer: Customer) => {
        this.currentCustomer = customer;
      });
      this.toggleModify();
    } else {
      this.customerService.deleteCustomer(this.currentCustomer.id).subscribe();
      this.router.navigate(['/customers/searchcustomers']);
    }
  }

  modifyCustomer() {
    if (this.modify) {
      this.customerService.modifyCustomer(this.currentCustomer).subscribe(() => {
        this.addressService.modifyAddress(this.currentCustomer.custAddress, this.currentCustomer.custAddressId).subscribe(() => {
          this.alertify.success('Success');
        }, error => {
          this.alertify.error('Failed to modify address of customer');
        });
      }, error => {
        this.alertify.error('Failed to modify customer');
      });
    }
    this.toggleModify();
  }

  toggleModify() {
    (<HTMLInputElement>document.getElementById('fnameElement')).disabled = this.modify;
    (<HTMLInputElement>document.getElementById('lnameElement')).disabled = this.modify;
    (<HTMLInputElement>document.getElementById('phoneElement')).disabled = this.modify;
    (<HTMLInputElement>document.getElementById('emailElement')).disabled = this.modify;
    (<HTMLInputElement>document.getElementById('streetElement')).disabled = this.modify;
    (<HTMLInputElement>document.getElementById('cityElement')).disabled = this.modify;
    (<HTMLInputElement>document.getElementById('stateElement')).disabled = this.modify;
    (<HTMLInputElement>document.getElementById('zipElement')).disabled = this.modify;
    (<HTMLInputElement>document.getElementById('countryElement')).disabled = this.modify;
    if (this.modify) {
      (<HTMLInputElement>document.getElementById('modifyButton')).innerHTML = 'Modify';
      (<HTMLInputElement>document.getElementById('deleteButton')).innerHTML = 'Delete';
    } else {
      (<HTMLInputElement>document.getElementById('modifyButton')).innerHTML = 'Confirm';
      (<HTMLInputElement>document.getElementById('deleteButton')).innerHTML = 'Cancel';
    }
    this.modify = !this.modify;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
