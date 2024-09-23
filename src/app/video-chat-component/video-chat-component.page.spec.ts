import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoChatComponentPage } from './video-chat-component.page';

describe('VideoChatComponentPage', () => {
  let component: VideoChatComponentPage;
  let fixture: ComponentFixture<VideoChatComponentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoChatComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
