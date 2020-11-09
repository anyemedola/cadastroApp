import { Component, OnInit } from '@angular/core';
import { Question5Page } from '../question5/question5.page';

@Component({
  selector: 'app-question4',
  templateUrl: './question4.page.html',
  styleUrls: ['./question4.page.scss'],
})
export class Question4Page implements OnInit {
  [x: string]: any;

  constructor() { }

  ngOnInit() {
  }

  goNext(){

    this.navCtrl.push(Question5Page);
    
    }

}
