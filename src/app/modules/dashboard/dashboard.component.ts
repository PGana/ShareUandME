import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { IFDashboardList } from 'src/app/core/interfaces/interface.dashboardList';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  itemList: IFDashboardList[];
  constructor(private service$: DashboardService) { }

  ngOnInit() {
    this.service$.onGetdashboadList().subscribe((data: IFDashboardList[]) => {
      this.itemList = data;
    }, error => console.log(error)
    );
  }

  onReturnFirstleter(name: string) {
    if (name) {
      return name.trim().substr(0, 1);
    }
    return '';
  }


  onReturnColorLogo(service: string) {
    const i = service.toLowerCase().trim();
    let color = 'lightslategray';
    console.log(i);

    switch (i) {
      // Prime
      case 'amazon prime':
        color = 'linear-gradient(120DEG,#06a5e6,#06a5e6,#ff9900)';
        // color ='#ff9900'
        break;
      // NetFlix
      case 'netflix':
        color = 'linear-gradient(120DEG, #e50914,#e50914, #6b6b6b)';
        // color="#e50914"
        break;
      case 'visual studio':
        // color = '#783bd2';
        color = 'linear-gradient(120DEG, #1887c7,#9bd05e,#f8c945, #f76a49)';
        break;
      case 'hotstar':
        color = 'linear-gradient(120deg, #07576f, #07576f, #ece619)';
        break;
      case 'spotify':
        color = 'linear-gradient(120deg, #07c34d,#07c34d,#000)';
        break;

    }
    return color;
  }

}
