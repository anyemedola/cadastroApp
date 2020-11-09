import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Html4Page } from './html4.page';

describe('Html4Page', () => {
  let component: Html4Page;
  let fixture: ComponentFixture<Html4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Html4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Html4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
