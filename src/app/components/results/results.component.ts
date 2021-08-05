import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  firstParam: string = '';
  public constructor(
    private titleService: Title,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.titleService.setTitle('app: results');
    const _firstParam: any = this.route.snapshot.queryParamMap.get('qp');
    this.firstParam = _firstParam || '';
    // const secondParam: string = this.route.snapshot.queryParamMap.get('secondParamKey');
  }
}
