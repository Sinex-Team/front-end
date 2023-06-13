import { Component } from '@angular/core';
import {HygrometerService} from "../../../shared/services/hygrometer.service";
import {Hygrometer} from "../../../shared/interfaces/Hygrometer";
import {Observable} from "rxjs";

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent {
  hygrometers: Hygrometer[] = [];

  constructor(private hygrometerService: HygrometerService) {}

  getAllHygrometers(): void {
    // this.hygrometers = this.hygrometerService.getAllHygrometers();
  }
}
