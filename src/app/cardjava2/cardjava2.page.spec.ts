import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cardjava2Page } from './cardjava2.page';

describe('Cardjava2Page', () => {
  let component: Cardjava2Page;
  let fixture: ComponentFixture<Cardjava2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cardjava2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cardjava2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
