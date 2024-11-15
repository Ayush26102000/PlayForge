import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';

@Component({
  selector: 'app-dashboard-overview',
  templateUrl: './dashboard-overview.component.html',
  styleUrls: ['./dashboard-overview.component.css']
})
export class DashboardOverviewComponent implements OnInit {
  totalUsers: number = 0;
  activePCs: number = 0;
  currentGames: number = 0;
  earnings: number = 0;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getDashboardStats().subscribe((data: any) => {
      // Sample API response processing
      this.totalUsers = data.length;  // Example: data could be a list of users
      this.activePCs = 10;  // Example static value
      this.currentGames = 5;  // Example static value
      this.earnings = 1500;  // Example static value
    });
  }
}
