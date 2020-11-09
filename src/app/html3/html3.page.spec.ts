import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Html3Page } from './html3.page';

describe('Html3Page', () => {
  let component: Html3Page;
  let fixture: ComponentFixture<Html3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Html3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Html3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
