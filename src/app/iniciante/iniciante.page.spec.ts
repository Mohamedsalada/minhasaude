import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IniciantePage } from './iniciante.page';

describe('IniciantePage', () => {
  let component: IniciantePage;
  let fixture: ComponentFixture<IniciantePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
