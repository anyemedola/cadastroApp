import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cplus1Page } from './cplus1.page';

describe('Cplus1Page', () => {
  let component: Cplus1Page;
  let fixture: ComponentFixture<Cplus1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cplus1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cplus1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
