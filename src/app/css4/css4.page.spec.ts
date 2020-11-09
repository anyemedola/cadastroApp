import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Css4Page } from './css4.page';

describe('Css4Page', () => {
  let component: Css4Page;
  let fixture: ComponentFixture<Css4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Css4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Css4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
