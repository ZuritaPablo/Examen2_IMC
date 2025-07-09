import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraImc } from './calculadora-imc';

describe('CalculadoraImc', () => {
  let component: CalculadoraImc;
  let fixture: ComponentFixture<CalculadoraImc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoraImc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraImc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
