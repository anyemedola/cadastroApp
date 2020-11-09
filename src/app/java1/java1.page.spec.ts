import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Java1Page } from './java1.page';

describe('Java1Page', () => {
  let component: Java1Page;
  let fixture: ComponentFixture<Java1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Java1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Java1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
