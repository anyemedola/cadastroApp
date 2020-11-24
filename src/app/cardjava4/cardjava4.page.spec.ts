import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cardjava4Page } from './cardjava4.page';

describe('Cardjava4Page', () => {
  let component: Cardjava4Page;
  let fixture: ComponentFixture<Cardjava4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cardjava4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cardjava4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
