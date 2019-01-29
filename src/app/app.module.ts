import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';

// used to create fake backend
//import { fakeBackendProvider } from './_helpers/fake-backend';

import { AppRoutingModule } from './app-routing';
import { AppComponent } from './app.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { CustomersComponent } from './customers/customers.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { AlertifyService } from './_services/alertify.service';
import { AuthGuard } from './_guard/auth.guard';
//import { LoginComponent } from './login/login.component';
import { JwtInterceptor} from './_helpers/jwt.interceptor';
import { ErrorInterceptor} from './_helpers/error.interceptor';
//import { AlertComponent } from './alert/alert.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      HomeComponent,
      RegisterComponent,
      CustomersComponent,
      InvoicesComponent,
      InventoryComponent,
      //LoginComponent,
      //AlertComponent,
      SearchComponent,
      NavbarComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      ReactiveFormsModule,
      RouterModule
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
      // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        //fakeBackendProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
