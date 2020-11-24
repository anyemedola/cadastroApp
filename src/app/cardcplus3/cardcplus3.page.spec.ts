import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cardcplus3Page } from './cardcplus3.page';

describe('Cardcplus3Page', () => {
  let component: Cardcplus3Page;
  let fixture: ComponentFixture<Cardcplus3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cardcplus3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cardcplus3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
