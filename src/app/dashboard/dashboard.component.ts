import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboard: DashboardService) { }

  revenue = 0;
  profit = 0;
  performance = '';

  ngOnInit(): void {
    this.dashboard.getDashboardData().subscribe((data) => {
      console.log("Data ",data);
      this.revenue = data.revenue;
      this.profit = data.profit;
      this.performance = data.performance;
    });
  }

}
