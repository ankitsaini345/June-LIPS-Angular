import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1>This is</h1>'
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'ecommerceapp';
  role = 'Users';

  ngDoCheck(): void {
   console.log('check event is called');
  }
}
