import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Csharp2Page } from './csharp2.page';

describe('Csharp2Page', () => {
  let component: Csharp2Page;
  let fixture: ComponentFixture<Csharp2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Csharp2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Csharp2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
