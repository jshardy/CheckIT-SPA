import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuickService } from '../_services/quick.service';
import { StatePair } from '../_models/statepair';

@Component({
  selector: 'app-quickbooks',
  templateUrl: './quickbooks.component.html',
  styleUrls: ['./quickbooks.component.css']
})
export class QuickbooksComponent implements OnInit {
  public state: string;
  public code: string;

  constructor(private activatedRoute: ActivatedRoute, private quickserve: QuickService) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.state = params['state'];
      this.code = params['code'];
    });
   }

  ngOnInit() {
    this.quickserve.return(new StatePair(this.state, this.code)).subscribe();
    location.href = '';
  }

}
