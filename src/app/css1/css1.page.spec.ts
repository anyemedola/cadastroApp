import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Css1Page } from './css1.page';

describe('Css1Page', () => {
  let component: Css1Page;
  let fixture: ComponentFixture<Css1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Css1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Css1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
