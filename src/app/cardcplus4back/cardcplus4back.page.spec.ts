import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cardcplus4backPage } from './cardcplus4back.page';

describe('Cardcplus4backPage', () => {
  let component: Cardcplus4backPage;
  let fixture: ComponentFixture<Cardcplus4backPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cardcplus4backPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cardcplus4backPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
