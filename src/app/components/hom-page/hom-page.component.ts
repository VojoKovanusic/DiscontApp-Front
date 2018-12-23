import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hom-page',
  templateUrl: './hom-page.component.html',
  styleUrls: ['./hom-page.component.scss']
})
export class HomPageComponent implements OnInit {
  imgAngular="https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg";
  imgSpring="https://cdn.freebiesupply.com/logos/large/2x/spring-3-logo-png-transparent.png";
  imgBootstrap="https://www.ostraining.com/cdn/images/coding/bootstrap-hq.jpg"
  constructor() { }

  ngOnInit() {
  }

}
