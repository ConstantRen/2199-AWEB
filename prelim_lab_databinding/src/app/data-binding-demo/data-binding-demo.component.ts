import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding-demo',
  standalone: true,
  imports: [],
  templateUrl: './data-binding-demo.component.html',
  styleUrl: './data-binding-demo.component.css'
})
export class DataBindingDemoComponent {
  message = "myfirstapp";
  description = "This is my first app";
  imageUrl = "./assets/i.png";
  w = 600;
  h = 500;
}
