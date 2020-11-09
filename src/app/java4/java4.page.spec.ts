import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Java4Page } from './java4.page';

describe('Java4Page', () => {
  let component: Java4Page;
  let fixture: ComponentFixture<Java4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Java4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Java4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
