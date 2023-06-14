import { Component } from '@angular/core';
import {HygrometerService} from "../../../shared/services/hygrometer.service";
import {Hygrometer} from "../../../shared/interfaces/Hygrometer";

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent {
  hygrometers: Hygrometer[] = [];
  countOfHygrometers = 0;
  averageSoilHumidity = 0;

  constructor(private hygrometerService: HygrometerService) {
    this.getAllHygrometers();
  }

  getAllHygrometers(): void {
    this.hygrometerService.getAllHygrometers().subscribe(response => {
      this.hygrometers = response;
      this.countOfHygrometers = this.hygrometers.length;
      let sumOfAllHumidities = 0;
      for (let i = 0; i < this.hygrometers.length; i++) {
        sumOfAllHumidities += this.hygrometers[i].humidity;
      }
      if (this.hygrometers.length !== 0) {
        this.averageSoilHumidity = sumOfAllHumidities / this.hygrometers.length;
      }
    });
  }
}
