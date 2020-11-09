import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Html2Page } from './html2.page';

describe('Html2Page', () => {
  let component: Html2Page;
  let fixture: ComponentFixture<Html2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Html2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Html2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
