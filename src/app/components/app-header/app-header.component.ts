import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css'],
})
export class AppHeaderComponent implements OnInit {
  @HostBinding('class')
  classAttribute: string = 'app-header sticky top-0';

  constructor() {}

  ngOnInit(): void {}
}
