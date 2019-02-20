import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { AuthGuard } from './_guard/auth.guard';
import { InvoiceComponent } from './invoice/invoice.component';
import { CustomerComponent } from './customer/customer.component';
import { InventorySearchComponent } from './inventory-search/inventory-search.component';
import { NewItemComponent } from './inventory/newitem/newitem.component';

const routes: Routes = [
  // this is literally nothing
  { path: '', component: HomeComponent },
  {
    // this is accept any of the routes
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'customers/searchcustomers', component: CustomersComponent},
      { path: 'inventory', component: InventoryComponent},
      { path: 'invoices', component: InvoicesComponent},
      { path: 'invoices/invoice', component: InvoiceComponent },
      { path: 'customers/customer', component: CustomerComponent},
      { path: 'inventory/search', component: InventorySearchComponent},
      { path: 'inventory/newitem', component: NewItemComponent}
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
