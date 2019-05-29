import { Component, OnInit } from '@angular/core';
import { ItemAlert } from '../_models/alert';
import { ItemAlertService } from '../_services/item-alert.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  alerts?: ItemAlert[];
  alert?: ItemAlert;

  constructor(private alertify: AlertifyService, private itemAlert: ItemAlertService) {
   }

  ngOnInit() {
    this.getAlerts();
  }

  getAlerts() {
    return this.itemAlert.getAlerts().subscribe((alerts: ItemAlert[]) => {
      this.alerts = alerts;
    }, error => {
      this.alertify.error(error);
      console.error(error);
    });
  }
}
