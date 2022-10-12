import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Mini calc';

    // variables de clase
    num1: number = 0;
    num2: number = 0;
    resultado: number = 0;

    sumar(): void {
        this.resultado = this.num1 + this.num2;
    }

    restar(): void {
        this.resultado = this.num1 - this.num2;
    }

    multiplicar(): void {
        this.resultado = this.num1 * this.num2;
    }

    dividir(): void {
        this.resultado = this.num1 / this.num2;
    }

}
