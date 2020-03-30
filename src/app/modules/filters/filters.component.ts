import { Component, OnInit } from '@angular/core';
import { FiltersService } from 'src/app/core/services/filters.service';
import { ClassCategory } from 'src/app/core/classes/class.category';
import { IFFilterList } from 'src/app/core/interfaces/interface.fitlers';
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  list: any[];
  constructor(private Filter$: FiltersService) { }

  ngOnInit() {
    this.Filter$.onGetCategory().subscribe(
      (res: IFFilterList[]) => {
        const temp = res.map(ele => new ClassCategory(ele));
        this.list = temp;
        console.log('------------------ \n');
        console.log(this.list);
      }, error => {
        console.log(error);
      });
  }




}
