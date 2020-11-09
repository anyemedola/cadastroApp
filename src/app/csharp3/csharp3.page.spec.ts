import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Csharp3Page } from './csharp3.page';

describe('Csharp3Page', () => {
  let component: Csharp3Page;
  let fixture: ComponentFixture<Csharp3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Csharp3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Csharp3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
