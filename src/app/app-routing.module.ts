import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';

import { UserService} from '../_services/user.service';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
// this is literally nothing
  { path: '', component: HomeComponent },
  {
    // this is accept any of the routes
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'customers', component: CustomersComponent},
      { path: 'inventory', component: InventoryComponent},
      { path: 'invoices', component: InvoicesComponent}
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
}
