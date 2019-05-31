import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Location } from '../_models/location';
import { Item } from '../_models/item';
import { AlertifyService } from '../_services/alertify.service';
import { LocationService } from '../_services/location.service';
import { ItemService } from '../_services/inventory.service';
import { LocationDTO } from '../_models/locationDTO';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  sub?: any;
  currentLocation?: Location = new Location();
  @Input() id: number;
  modify: boolean;
  upc?: '';

  constructor(private route: ActivatedRoute, private locationService: LocationService, private itemService: ItemService,
    private router: Router, private alertify: AlertifyService) { }

  ngOnInit() {
    if (this.id === undefined) {
      this.sub = this.route.params.subscribe(params => {
        this.locationService.getLocation(+params['id']).subscribe((loc: Location) => {
          this.currentLocation = loc;
        });
      });
    } else {
      this.locationService.getLocation(this.id).subscribe((loc: Location) => {
        this.currentLocation = loc;
      });
    }
    this.modify = false;
  }

  deleteLocation() {
    if (this.modify) {
      this.locationService.getLocation(this.currentLocation.id).subscribe((loc: Location) => {
        this.currentLocation = loc;
      });
      this.toggleModify();
    } else {
      this.locationService.deleteLocation(this.currentLocation).subscribe(() => {
        this.router.navigate(['/locations/locations']);
      }, error => {
        this.alertify.error('Could not delete location');
      });
    }
  }

  toggleModify() {
    (<HTMLInputElement>document.getElementById('nameElement')).disabled = this.modify;
    (<HTMLInputElement>document.getElementById('descriptionElement')).disabled = this.modify;
    if (this.modify) {
      (<HTMLInputElement>document.getElementById('modifyButton')).innerHTML = 'Modify';
      (<HTMLInputElement>document.getElementById('deleteButton')).innerHTML = 'Delete';
    } else {
      (<HTMLInputElement>document.getElementById('modifyButton')).innerHTML = 'Confirm';
      (<HTMLInputElement>document.getElementById('deleteButton')).innerHTML = 'Cancel';
    }
    this.modify = !this.modify;
  }

  modifyLocation() {
    if (this.modify) {
      this.locationService.updateLocation(this.currentLocation).subscribe(() => {
          this.alertify.success('Success');
      }, error => {
        this.alertify.error('Failed to modify location');
      });
    }
    this.toggleModify();
  }

  addItem() {
    this.itemService.GetItemByUPC(this.upc).subscribe((item: Item) => {
      this.locationService.addItemToLocation(this.currentLocation, item.id).subscribe(() => {
        this.alertify.success('Success');
        this.ngOnInit();
      }, error => {
        this.alertify.error('Could not add item to location');
      });
    }, error => {
      this.alertify.error('Invalid UPC');
    });
    this.upc = '';
  }

  deleteItem(item: Item) {
    this.locationService.removeItemFromLocation(this.currentLocation, item.id).subscribe(() => {
      this.alertify.success('Success');
      this.ngOnInit();
    }, error => {
      this.alertify.error('Could not remove item from location');
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
