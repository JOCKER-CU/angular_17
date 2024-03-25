import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MyFirstComponent } from './my-first/my-first.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MyFirstComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  // title = 'hello-component';
}
