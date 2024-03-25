import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-one',
  templateUrl: './view-one.component.html',
  styles: ``
})
export class ViewOneComponent implements OnInit {
  ngOnInit(): void {
    console.log("hello Init")
  }

}
