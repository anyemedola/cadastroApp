import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Css2Page } from './css2.page';

describe('Css2Page', () => {
  let component: Css2Page;
  let fixture: ComponentFixture<Css2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Css2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Css2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
