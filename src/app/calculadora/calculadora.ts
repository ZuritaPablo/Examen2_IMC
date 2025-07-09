import { Component, computed, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css'
})
export class Calculadora {
  peso = signal(40);
  altura = signal(1.77);

  imc = computed(() => {
    const peso = this.peso();
    const altura = this.altura();
    return peso > 0 && altura > 0 ? peso / (altura * altura) : 0;
  });

  categoria = computed(() => {
    const imc = this.imc();
    if (imc < 18.5) return "Bajo peso";
    if (imc < 25) return "Normal";
    if (imc < 30) return "Sobrepeso";
    return "Obesidad";
  });
  colorCategoria = computed(() => {
    const imc = this.imc();
    if (imc < 18.5) return 'green';     
    if (imc < 25) return 'white';       
    if (imc < 30) return 'yellow';      
    return 'red';                       
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
}
