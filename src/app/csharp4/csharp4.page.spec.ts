import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Csharp4Page } from './csharp4.page';

describe('Csharp4Page', () => {
  let component: Csharp4Page;
  let fixture: ComponentFixture<Csharp4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Csharp4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Csharp4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
