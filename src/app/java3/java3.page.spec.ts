import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Java3Page } from './java3.page';

describe('Java3Page', () => {
  let component: Java3Page;
  let fixture: ComponentFixture<Java3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Java3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Java3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
