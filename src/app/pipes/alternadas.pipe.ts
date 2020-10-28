import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alternadas'
})
export class AlternadasPipe implements PipeTransform {

  transform(texto: string): string {
    let resultado = '';
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
      if (texto[i] == ' ') {
        resultado += ' ';
      } else {
        if (contador % 2 == 0) {
          resultado += texto[i].toUpperCase();
          contador++;
        } else {
          resultado += texto[i].toLowerCase();
          contador++;
        }
      }
    }
    return resultado;
  }
}
