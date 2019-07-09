import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  router: any;
  
  
  next(): void {
    this.router.navigateByUrl('comp1');

}
}
