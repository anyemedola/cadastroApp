import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cardcplus2Page } from './cardcplus2.page';

describe('Cardcplus2Page', () => {
  let component: Cardcplus2Page;
  let fixture: ComponentFixture<Cardcplus2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cardcplus2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cardcplus2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
