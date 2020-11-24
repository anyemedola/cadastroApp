import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cardphp1backPage } from './cardphp1back.page';

describe('Cardphp1backPage', () => {
  let component: Cardphp1backPage;
  let fixture: ComponentFixture<Cardphp1backPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cardphp1backPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cardphp1backPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
