import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cardjava4backPage } from './cardjava4back.page';

describe('Cardjava4backPage', () => {
  let component: Cardjava4backPage;
  let fixture: ComponentFixture<Cardjava4backPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cardjava4backPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cardjava4backPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
