import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cardcplus1backPage } from './cardcplus1back.page';

describe('Cardcplus1backPage', () => {
  let component: Cardcplus1backPage;
  let fixture: ComponentFixture<Cardcplus1backPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cardcplus1backPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cardcplus1backPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
