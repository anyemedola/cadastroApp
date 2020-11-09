import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Html1Page } from './html1.page';

describe('Html1Page', () => {
  let component: Html1Page;
  let fixture: ComponentFixture<Html1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Html1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Html1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
