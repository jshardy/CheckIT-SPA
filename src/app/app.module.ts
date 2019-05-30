import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule, AlertComponent } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { TimeAgoPipe } from 'time-ago-pipe';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
// import { CarouselModule } from 'ngx-bootstrap/carousel';

// IF YOU HAVE A COMPONENT IT MUST BE LISTED HERE.
// SCROLL DOWN TO DECLARATIONS AND PUT IT IN THERE!!
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { CustomersComponent } from './customers/customers.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { CustomerComponent } from './customer/customer.component';
import { NewcustomerComponent } from './newcustomer/newcustomer.component';
import { InventorySearchComponent } from './inventory-search/inventory-search.component';
import { InventoryResultsComponent } from './inventory-results/inventory-results.component';
import { NewItemComponent } from './inventory/newitem/newitem.component';
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';
import { TestComponent } from './test/test.component';
import { CustomercomponentComponent } from './customercomponent/customercomponent.component';
import { UserpermissionsComponent } from './userpermissions/userpermissions.component';
import { InvoiceSearchComponent } from './invoice-search/invoice-search.component';
import { QuickbooksComponent } from './quickbooks/quickbooks.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AlertsComponent } from './alerts/alerts.component';
import { LocationsComponent } from './locations/locations.component';
import { NewlocationComponent } from './newlocation/newlocation.component';

import { AuthGuard } from './_guard/auth.guard';

// IF YOU CREATED A SERVICE IT SHOULD BE HERE!
// SCROLL DOWN TO PROVIDERS AND ADD IT TO PROVIDERS!
import { AddressService } from './_services/address.service';
import { AlertifyService } from './_services/alertify.service';
import { AuthService } from './_services/auth.service';
import { CustomerService } from './_services/customer.service';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { ItemService } from './_services/inventory.service';
import { InvoiceService } from './_services/invoice.service';
import { ItemAlertService } from './_services/item-alert.service';
import { QuickService } from './_services/quick.service';
import { UserService } from './_services/user.service';
import { LocationService } from './_services/location.service';
import { LocationComponent } from './location/location.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      TimeAgoPipe,
      NavbarComponent,
      HomeComponent,
      RegisterComponent,
      CustomersComponent,
      InvoicesComponent,
      InventoryComponent,
      InvoiceComponent,
      CustomerComponent,
      NewcustomerComponent,
      InventorySearchComponent,
      InventoryResultsComponent,
      NewItemComponent,
      NewInvoiceComponent,
      TestComponent,
      CustomercomponentComponent,
      UserpermissionsComponent,
      InvoiceSearchComponent,
      QuickbooksComponent,
      ResetPasswordComponent,
      UserProfileComponent,
      AlertsComponent,
      LocationsComponent,
      NewlocationComponent,
      LocationComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      RouterModule,
      SelectDropDownModule,
      TypeaheadModule.forRoot(),
      ModalModule.forRoot(),
      Ng2SearchPipeModule,
      // CarouselModule.forRoot(),
      AccordionModule.forRoot(),
      JwtModule.forRoot({
        config: {
          tokenGetter: tokenGetter,
          whitelistedDomains: ['localhost:5000'],
          blacklistedRoutes: ['localhost:5000/api/auth']
        }
      })
   ],
   providers: [
      AuthGuard,
      AddressService,
      AlertifyService,
      AuthService,
      CustomerService,
      ErrorInterceptorProvider,
      ItemService,
      InvoiceService,
      ItemAlertService,
      QuickService,
      UserService,
      LocationService,
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
