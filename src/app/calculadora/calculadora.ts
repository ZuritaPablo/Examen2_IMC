import { DecimalPipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  imports: [DecimalPipe],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css'
})
export class Calculadora {
  peso = signal(40);
  altura = signal(1.77);
  categoria = signal("");

  imc = computed(() => {
    const peso = this.peso();
    const altura = this.altura();
    if (peso > 0 && altura > 0) {
      const valor = peso / (altura * altura);
      this.actualizarCategoria(valor);
      return valor;
    }
    return 0;
  });

  incrementarPeso() {
    this.peso.update(p => p + 1);
  }

  decrementarPeso() {
    this.peso.update(p => p - 1);
  }

  resetearPeso() {
    this.peso.set(40);
  }

  private actualizarCategoria(imc: number) {
    if (imc < 18.5) {
      this.categoria.set("Bajo peso");
    } else if (imc <24.9) {
      this.categoria.set("Normal");
    } else if (imc < 29.9) {
      this.categoria.set("Sobrepeso");
    } else {
      this.categoria.set("Obesidad");
    }
  }
}
