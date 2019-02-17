import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { AuthGuard } from './_guard/auth.guard';
import { InvoiceComponent } from './invoice/invoice.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerResultsComponent } from './customerresults/customerresults.component';

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
      { path: 'customers/results', component: CustomerResultsComponent}
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
