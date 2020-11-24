import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cardcplus3backPage } from './cardcplus3back.page';

describe('Cardcplus3backPage', () => {
  let component: Cardcplus3backPage;
  let fixture: ComponentFixture<Cardcplus3backPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cardcplus3backPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cardcplus3backPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
