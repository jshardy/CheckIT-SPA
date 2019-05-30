import { Component, OnInit } from '@angular/core';
import { Location } from '../_models/location';
import { Router } from '@angular/router';
import { LocationService } from '../_services/location.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  locations: Location[];

  constructor(private locationService: LocationService, private router: Router) { }

  ngOnInit() {
    this.locationService.getAllLocations().subscribe((locs: Location[]) => {
      this.locations = locs;
    });
  }

  transfer(passId: number) {
    this.router.navigate(['/locations/location', { id: passId }]);
  }

}