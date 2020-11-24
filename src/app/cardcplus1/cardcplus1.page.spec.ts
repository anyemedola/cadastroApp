import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cardcplus1Page } from './cardcplus1.page';

describe('Cardcplus1Page', () => {
  let component: Cardcplus1Page;
  let fixture: ComponentFixture<Cardcplus1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cardcplus1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cardcplus1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
