import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
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

// simulating the web api until for testing purposes
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './InMemoryData.service';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      HomeComponent,
      RegisterComponent,
      CustomersComponent,
      InvoicesComponent,
      InventoryComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      BsDropdownModule.forRoot(),
      RouterModule,
      // for testing purposes
      HttpClientModule,
      // This module intercepts Http requests and returns simulated server respones
      // Remove once testing the Http requests are configured and tested
      HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, { dataEncapsulation: false}
      )
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
