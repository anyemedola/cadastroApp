import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cardphp2backPage } from './cardphp2back.page';

describe('Cardphp2backPage', () => {
  let component: Cardphp2backPage;
  let fixture: ComponentFixture<Cardphp2backPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cardphp2backPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cardphp2backPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
