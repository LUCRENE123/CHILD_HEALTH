import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ACCEUIL2Page } from './acceuil2.page';

describe('ACCEUIL2Page', () => {
  let component: ACCEUIL2Page;
  let fixture: ComponentFixture<ACCEUIL2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ACCEUIL2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
