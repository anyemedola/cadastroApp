import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cardjava1Page } from './cardjava1.page';

describe('Cardjava1Page', () => {
  let component: Cardjava1Page;
  let fixture: ComponentFixture<Cardjava1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cardjava1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cardjava1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
