import { Component, OnInit } from '@angular/core';
import { ItemAlert } from '../_models/alert';
import { ItemAlertService } from '../_services/item-alert.service';
import { AlertifyService } from '../_services/alertify.service';
import { Item } from '../_models/item';
import { ItemService } from '../_services/inventory.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  triggeredAlerts?: ItemAlert[];
  disabledAlerts?: ItemAlert[];
  alert?: ItemAlert;
  item?: Item;
  items?: Item[];
  checkModel = '1';

  constructor(private alertify: AlertifyService, private itemAlert: ItemAlertService, private itemService: ItemService) {
   }

  ngOnInit() {
    this.getTrigedAlerts();
    this.getDisabledAlerts();
    this.getItems();
  }

  getTrigedAlerts() {
    return this.itemAlert.getTriggeredAlerts().subscribe((alerts: ItemAlert[]) => {
      this.triggeredAlerts = alerts;
    }, error => {
      this.alertify.error(error);
      console.error(error);
    });
  }

  getDisabledAlerts() {
    return this.itemAlert.getDisabledAlerts().subscribe((alerts: ItemAlert[]) => {
      this.disabledAlerts = alerts;
    }, error => {
      this.alertify.error(error);
      console.error(error);
    });
  }

  getItems() {
    return this.itemService.getItems().subscribe((items: Item[]) => {
       this.items = items;
    }, error => {
      this.alertify.error(error);
      console.error(error);
    });
  }

  toggleAlert() {
    console.log('toggleAlert function called');
  }

  deleteAlert() {
    console.log('deleteAlert function called');
  }
}