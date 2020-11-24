import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cardphp2Page } from './cardphp2.page';

describe('Cardphp2Page', () => {
  let component: Cardphp2Page;
  let fixture: ComponentFixture<Cardphp2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cardphp2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cardphp2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
