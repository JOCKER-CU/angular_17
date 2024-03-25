import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewOneComponent } from './view-one/view-one.component';
import { ViewTwoComponent } from './view-two/view-two.component';



@NgModule({
  declarations: [
    ViewOneComponent
  ],
  imports: [
    CommonModule,
    ViewTwoComponent
  ],
 exports: [
  ViewOneComponent
 ]
})
export class ViewsModule { }
