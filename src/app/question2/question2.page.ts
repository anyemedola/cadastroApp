import { Component, OnInit } from '@angular/core';
import { Question3Page } from '../question3/question3.page';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.page.html',
  styleUrls: ['./question2.page.scss'],
})
export class Question2Page implements OnInit {
  navCtrl: any;

  constructor() { }

  ngOnInit() {
  }

  goNext(){

    this.navCtrl.push(Question3Page);
    
    }

}
