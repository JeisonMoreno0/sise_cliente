import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarnetVirtualPage } from './carnet-virtual.page';

describe('CarnetVirtualPage', () => {
  let component: CarnetVirtualPage;
  let fixture: ComponentFixture<CarnetVirtualPage>;

  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      declarations: [ CarnetVirtualPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarnetVirtualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
