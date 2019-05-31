import { Component, OnInit } from '@angular/core';
import { ItemAlert } from '../_models/alert';
import { ItemAlertService } from '../_services/item-alert.service';
import { AlertifyService } from '../_services/alertify.service';
import { Item } from '../_models/item';
import { ItemService } from '../_services/inventory.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertData } from '../_models/alertData';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  triggeredAlertData: AlertData[] = [];
  nonTriggeredAlertData: AlertData[] = [];

  constructor(private alertify: AlertifyService, private itemAlert: ItemAlertService, private itemService: ItemService) {
   }

  ngOnInit() {
    this.getTriggeredAlerts();
    this.getNonTriggeredAlerts();
  }

  orderMore(id: Number): void {
    this.itemAlert.orderedMore(id).subscribe(() => {
      this.getTriggeredAlerts();
    });
  }

  getTriggeredAlerts() {
    return this.itemAlert.getTriggeredAlerts().subscribe((alerts: AlertData[]) => {
      this.triggeredAlertData = alerts;
    }, error => {
      this.alertify.error(error);
      console.error(error);
    });
  }

  getNonTriggeredAlerts() {
    return this.itemAlert.getNonTriggeredAlerts().subscribe((alerts: AlertData[]) => {
      this.nonTriggeredAlertData = alerts;
    }, error => {
      this.alertify.error(error);
      console.error(error);
    });
  }
}
