import { Component, OnInit } from '@angular/core';
import { Question4Page } from '../question4/question4.page';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.page.html',
  styleUrls: ['./question3.page.scss'],
})
export class Question3Page implements OnInit {
  [x: string]: any;

  constructor() { }

  ngOnInit() {
  }

  goNext(){

    this.navCtrl.push(Question4Page);
    
    }

}
