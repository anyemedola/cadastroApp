import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cardphp4Page } from './cardphp4.page';

describe('Cardphp4Page', () => {
  let component: Cardphp4Page;
  let fixture: ComponentFixture<Cardphp4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cardphp4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cardphp4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
