import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { TimeAgoPipe } from 'time-ago-pipe';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { AccordionModule } from 'ngx-bootstrap/accordion';
// import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { CustomersComponent } from './customers/customers.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { AlertifyService } from './_services/alertify.service';
import { AuthGuard } from './_guard/auth.guard';
import { InvoiceService } from './_services/invoice.service';
import { InvoiceComponent } from './invoice/invoice.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerService } from './_services/customer.service';
import { NewcustomerComponent } from './newcustomer/newcustomer.component';
import { InventorySearchComponent } from './inventory-search/inventory-search.component';
import { NewItemComponent } from './inventory/newitem/newitem.component';
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';
import { TestComponent } from './test/test.component';


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
      NewItemComponent,
      NewInvoiceComponent,
      TestComponent
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
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      InvoiceService,
      CustomerService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
