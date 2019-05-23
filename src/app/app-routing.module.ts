import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { AuthGuard } from './_guard/auth.guard';
import { InvoiceComponent } from './invoice/invoice.component';
import { CustomerComponent } from './customer/customer.component';
import { NewcustomerComponent } from './newcustomer/newcustomer.component';
import { NewItemComponent } from './inventory/newitem/newitem.component';
import { InventorySearchComponent } from './inventory-search/inventory-search.component';
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';
import { TestComponent } from './test/test.component';
import { CustomercomponentComponent } from './customercomponent/customercomponent.component';
import { UserpermissionsComponent } from './userpermissions/userpermissions.component';
import { InvoiceSearchComponent } from './invoice-search/invoice-search.component';
import { QuickbooksComponent } from './quickbooks/quickbooks.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AlertsComponent } from './alerts/alerts.component';

const routes: Routes = [
  // this is literally nothing
  { path: '', component: HomeComponent },
  {
    // this is accept any of the routes
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'customers/searchcustomers', component: CustomersComponent}, // Customer->Search
      { path: 'customers/customer', component: CustomerComponent}, // Customer->Search-> then type a persons name. Selecting an invoice gets you here
      { path: 'customers/new', component: NewcustomerComponent}, // Customer->New

      { path: 'invoice/new', component: NewInvoiceComponent }, // Invoice-> New Invoice
      { path: 'invoice/search', component: InvoiceSearchComponent }, // Invoice->Search

      { path: 'inventory/newitem', component: NewItemComponent}, // Inventory->New Items
      { path: 'inventory-search', component: InventorySearchComponent }, // Inventory->Search
      { path: 'inventory', component: InventoryComponent}, // Inventory->All items

      { path: 'auth/userpermissions', component: UserpermissionsComponent}, // Auth->Permissions

      { path: 'invoices', component: InvoicesComponent}, // Not connected.
      { path: 'invoices/invoice', component: InvoiceComponent }, // Not connected.

      { path: 'test', component: TestComponent }, // Hidden
      { path: 'customer-modal', component: CustomercomponentComponent },

      { path: 'quickbooks', component: QuickbooksComponent }, // Auth->Quickbooks
      { path: 'password/reset', component: ResetPasswordComponent }, // Access via login screen.
      { path: 'user/profile', component: UserProfileComponent }, // Username menu->Settings
      { path: 'invoice/search', component: InvoiceSearchComponent },
      { path: 'quickbooks', component: QuickbooksComponent },
      { path: 'password/reset', component: ResetPasswordComponent },
      { path: 'user/profile', component: UserProfileComponent },
      { path: 'alerts', component: AlertsComponent}
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
