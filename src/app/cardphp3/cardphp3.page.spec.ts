import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cardphp3Page } from './cardphp3.page';

describe('Cardphp3Page', () => {
  let component: Cardphp3Page;
  let fixture: ComponentFixture<Cardphp3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cardphp3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cardphp3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
