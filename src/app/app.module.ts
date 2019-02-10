import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
<<<<<<< HEAD
=======
import { JwtModule } from '@auth0/angular-jwt';
import { NbThemeModule } from '@nebular/theme';

>>>>>>> FAST-GUI
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


export function tokenGetter() {
  return localStorage.getItem('token');
}

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
      InventoryComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
<<<<<<< HEAD
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
=======
      NbThemeModule.forRoot(),
      BsDropdownModule.forRoot(),
      RouterModule,
      JwtModule.forRoot({
        config: {
          tokenGetter: tokenGetter,
          whitelistedDomains: ['localhost:5000'],
          blacklistedRoutes: ['localhost:5000/api/auth']
        }
      })
>>>>>>> FAST-GUI
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      InvoiceService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
