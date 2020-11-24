import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cardcplus4Page } from './cardcplus4.page';

describe('Cardcplus4Page', () => {
  let component: Cardcplus4Page;
  let fixture: ComponentFixture<Cardcplus4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cardcplus4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cardcplus4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
