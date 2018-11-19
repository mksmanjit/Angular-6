import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VsNavBarComponent } from './vs-nav-bar.component';

describe('VsNavBarComponent', () => {
  let component: VsNavBarComponent;
  let fixture: ComponentFixture<VsNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VsNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VsNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
