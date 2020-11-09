import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cplus3Page } from './cplus3.page';

describe('Cplus3Page', () => {
  let component: Cplus3Page;
  let fixture: ComponentFixture<Cplus3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cplus3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cplus3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
