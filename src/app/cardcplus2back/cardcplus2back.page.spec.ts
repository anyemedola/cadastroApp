import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cardcplus2backPage } from './cardcplus2back.page';

describe('Cardcplus2backPage', () => {
  let component: Cardcplus2backPage;
  let fixture: ComponentFixture<Cardcplus2backPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cardcplus2backPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cardcplus2backPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
