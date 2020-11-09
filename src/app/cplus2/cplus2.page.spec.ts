import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cplus2Page } from './cplus2.page';

describe('Cplus2Page', () => {
  let component: Cplus2Page;
  let fixture: ComponentFixture<Cplus2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cplus2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cplus2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
