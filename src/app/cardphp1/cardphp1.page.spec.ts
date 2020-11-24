import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cardphp1Page } from './cardphp1.page';

describe('Cardphp1Page', () => {
  let component: Cardphp1Page;
  let fixture: ComponentFixture<Cardphp1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cardphp1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cardphp1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
