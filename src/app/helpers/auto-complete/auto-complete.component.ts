import { Component, OnInit, Input } from '@angular/core';
import { IFFilterList } from 'src/app/core/interfaces/interface.fitlers';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {

  list: IFFilterList[];
  inputControl = new FormControl();
  @Input() set InputList(res: any) {
    if (res) {
      console.log('...........Data ........\n');
      console.log('gana' + JSON.stringify(res));
      this.list = res;
    }
  }
  get InputList() {
    return this.list;
  }

  @Input() InputPlaceHolder: string;

  listArray: Observable<IFFilterList[]>;
  constructor() { }
  ngOnInit() {
    this.listArray = this.inputControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: any): IFFilterList[] {
    const filterValue = value.toLowerCase();
    console.log(value);
    return this.list.filter(option => option.name.toLowerCase().search(filterValue) >= 0);
  }

}


