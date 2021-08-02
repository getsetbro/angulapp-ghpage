import { HostBinding, ViewEncapsulation, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @HostBinding('class')
  classAttribute: string = 'content-between grid min-h-screen';

  title = 'myapp-angular';
}
