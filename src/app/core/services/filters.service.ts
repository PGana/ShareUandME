import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  constructor(private req: HttpClient) { }
  onGetCategory() {
    return this.req.get('../../../assets/mocks/mock.category.json');
  }
}
