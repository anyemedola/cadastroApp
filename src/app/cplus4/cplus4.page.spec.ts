import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cplus4Page } from './cplus4.page';

describe('Cplus4Page', () => {
  let component: Cplus4Page;
  let fixture: ComponentFixture<Cplus4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cplus4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cplus4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
