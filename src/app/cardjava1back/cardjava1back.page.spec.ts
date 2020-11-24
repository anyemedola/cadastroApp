import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cardjava1backPage } from './cardjava1back.page';

describe('Cardjava1backPage', () => {
  let component: Cardjava1backPage;
  let fixture: ComponentFixture<Cardjava1backPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cardjava1backPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cardjava1backPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
