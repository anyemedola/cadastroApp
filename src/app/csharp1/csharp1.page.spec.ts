import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Csharp1Page } from './csharp1.page';

describe('Csharp1Page', () => {
  let component: Csharp1Page;
  let fixture: ComponentFixture<Csharp1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Csharp1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Csharp1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
