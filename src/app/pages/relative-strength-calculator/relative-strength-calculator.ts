import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-relative-strength-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './relative-strength-calculator.html',
  styleUrls: ['./relative-strength-calculator.css']
})

export class RelativeStrengthCalculatorComponent {
  peso: number = 0;
  total: number = 0;
  sexo: string = 'masculino';
  resultado: number | null = null;

  calcularFuerza() {
    const wilks = this.calcularWilks(this.peso, this.total, this.sexo);
    this.resultado = wilks;
  }

  calcularWilks(peso: number, total: number, sexo: string): number {
    // Fórmulas de coeficiente Wilks (hombres y mujeres)
    const coef = sexo === 'masculino'
      ? [ -216.0475144, 16.2606339, -0.002388645, -0.00113732, 7.01863e-6, -1.291e-8 ]
      : [ 594.31747775582, -27.23842536447, 0.82112226871, -0.00930733913, 4.731582e-5, -9.054e-8 ];

    const a = coef[0];
    const b = coef[1];
    const c = coef[2];
    const d = coef[3];
    const e = coef[4];
    const f = coef[5];

    const denom = a + b * peso + c * peso**2 + d * peso**3 + e * peso**4 + f * peso**5;
    return +(total * 500 / denom).toFixed(2);
  }
}
