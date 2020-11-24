import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cardjava2backPage } from './cardjava2back.page';

describe('Cardjava2backPage', () => {
  let component: Cardjava2backPage;
  let fixture: ComponentFixture<Cardjava2backPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cardjava2backPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cardjava2backPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
