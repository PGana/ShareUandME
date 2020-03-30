import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private req: HttpClient) { }
  onGetdashboadList() {
    return this.req.get('../../../assets/mocks/mock.dashboardlist.json');
  }
}
