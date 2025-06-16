import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { RelativeStrengthCalculatorComponent } from './pages/relative-strength-calculator/relative-strength-calculator';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, RelativeStrengthCalculatorComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Powerlifting';
}
