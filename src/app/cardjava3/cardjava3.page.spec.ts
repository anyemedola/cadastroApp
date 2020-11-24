import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cardjava3Page } from './cardjava3.page';

describe('Cardjava3Page', () => {
  let component: Cardjava3Page;
  let fixture: ComponentFixture<Cardjava3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cardjava3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cardjava3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
