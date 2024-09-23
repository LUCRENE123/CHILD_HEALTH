import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivitydetailPage } from './activitydetail.page';

describe('ActivitydetailPage', () => {
  let component: ActivitydetailPage;
  let fixture: ComponentFixture<ActivitydetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitydetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
