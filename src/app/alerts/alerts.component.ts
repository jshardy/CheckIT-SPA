import { Component, OnInit } from '@angular/core';
import { Item } from '../_models/item';
import { Alert } from '../_models/alert';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  alerts?: Alert[];
  alert?: Alert;

  constructor() { }

  ngOnInit() {
  }

}
