import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumerosLetrasPage } from './numeros-letras.page';

describe('NumerosLetrasPage', () => {
  let component: NumerosLetrasPage;
  let fixture: ComponentFixture<NumerosLetrasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NumerosLetrasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
