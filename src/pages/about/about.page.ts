import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'ib-page-about',
  templateUrl: 'about.page.html',
})
export class AboutPage {
    wassup: string;
  constructor(public navCtrl: NavController) {
      // hello world
      this.wassup = 'hello world';
  }
  displayHelloWorld(): string {
      return this.wassup;
  }

}
