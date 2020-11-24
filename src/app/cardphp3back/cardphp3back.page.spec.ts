import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cardphp3backPage } from './cardphp3back.page';

describe('Cardphp3backPage', () => {
  let component: Cardphp3backPage;
  let fixture: ComponentFixture<Cardphp3backPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cardphp3backPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cardphp3backPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
