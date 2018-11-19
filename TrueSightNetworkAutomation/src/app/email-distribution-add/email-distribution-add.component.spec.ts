import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailDistributionAddComponent } from './email-distribution-add.component';

describe('EmailDistributionAddComponent', () => {
  let component: EmailDistributionAddComponent;
  let fixture: ComponentFixture<EmailDistributionAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailDistributionAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailDistributionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
