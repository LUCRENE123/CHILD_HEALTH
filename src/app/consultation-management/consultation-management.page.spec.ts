import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultationManagementPage } from './consultation-management.page';

describe('ConsultationManagementPage', () => {
  let component: ConsultationManagementPage;
  let fixture: ComponentFixture<ConsultationManagementPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
