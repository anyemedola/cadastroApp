import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Css3Page } from './css3.page';

describe('Css3Page', () => {
  let component: Css3Page;
  let fixture: ComponentFixture<Css3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Css3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Css3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
