import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cardphp4backPage } from './cardphp4back.page';

describe('Cardphp4backPage', () => {
  let component: Cardphp4backPage;
  let fixture: ComponentFixture<Cardphp4backPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cardphp4backPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cardphp4backPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
