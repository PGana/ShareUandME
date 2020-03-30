import { NgModule } from '@angular/core';
import { MatAutocompleteModule, MatToolbarModule,
   MatFormFieldModule, MatInputModule,
   MatIconModule, MatDividerModule, MatGridListModule } from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    MatAutocompleteModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatGridListModule
  ],
  exports: [
    MatAutocompleteModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatGridListModule
  ]

})
export class MaterialsModule { }
