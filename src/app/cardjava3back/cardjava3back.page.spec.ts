import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cardjava3backPage } from './cardjava3back.page';

describe('Cardjava3backPage', () => {
  let component: Cardjava3backPage;
  let fixture: ComponentFixture<Cardjava3backPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cardjava3backPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cardjava3backPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
