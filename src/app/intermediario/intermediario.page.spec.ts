import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntermediarioPage } from './intermediario.page';

describe('IntermediarioPage', () => {
  let component: IntermediarioPage;
  let fixture: ComponentFixture<IntermediarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IntermediarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
