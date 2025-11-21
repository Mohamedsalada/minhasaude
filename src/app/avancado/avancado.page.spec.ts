import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvancadoPage } from './avancado.page';

describe('AvancadoPage', () => {
  let component: AvancadoPage;
  let fixture: ComponentFixture<AvancadoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AvancadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
