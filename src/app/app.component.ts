import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  texto : string;
  letrasAlternadas : string;
  numero : number;
  fechas = new Date(2020, 7, 1, 18, 36);
}
 