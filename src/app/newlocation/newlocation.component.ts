import { Component, OnInit } from '@angular/core';
import { LocationDTO } from './../_models/locationDTO';
import { LocationService } from '../_services/location.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-newlocation',
  templateUrl: './newlocation.component.html',
  styleUrls: ['./newlocation.component.css']
})
export class NewlocationComponent implements OnInit {
  loc: LocationDTO;
  public name: '';
  public description: '';

  constructor(private locationService: LocationService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  add() {
    if (this.validLoc()) {
      this.loc = new LocationDTO(this.name, this.description);
      this.locationService.addLocation(this.loc).subscribe((temp: any) => {
        this.alertify.success('Success');
        location.reload();
      }, error => {
        this.alertify.error('Error while creating location');
      }, () => {});
    }
  }

  validLoc() {
    if (this.name && this.description) {
      return true;
    }
    this.alertify.error('Please include a name and description');
    return false;
  }

}
