import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Java2Page } from './java2.page';

describe('Java2Page', () => {
  let component: Java2Page;
  let fixture: ComponentFixture<Java2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Java2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Java2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
