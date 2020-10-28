import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fecha'
})
export class FechaPipe implements PipeTransform {

  transform(fecha: Date): any {
    const horaInput = fecha.getHours();
    const diaInput = fecha.getDay()
    const mesInput = fecha.getMonth();
    const anoInput = fecha.getFullYear();

    const fechaActual = new Date();
    const horaActual = fechaActual.getHours();
    const mesActual = fechaActual.getMonth();
    const anoActual = fechaActual.getFullYear();
    const diaActual = fechaActual.getDay();

    if ((diaActual == diaInput) && (anoActual == anoInput) && (mesActual == mesInput) && (horaActual == horaInput)) {
      return "Conectado hace pocos minutos";
    } else if ((diaActual == diaInput) && (anoActual == anoInput) && (mesActual == mesInput) && (horaActual - horaInput <= 6)) {
      return "Conectado hace pocas horas";
    } else if ((diaActual == diaInput) && (anoActual == anoInput) && (mesActual == mesInput) && (horaActual - horaInput <= 12)) {
      return "Conectado hace menos de 12 horas";
    } else if ((diaActual == diaInput) && (anoActual == anoInput) && (mesActual == mesInput) && (horaActual - horaInput <= 24)) {
      return "Conectado hace menos de 24 horas";
    } else if ((Math.abs(diaActual - diaInput)  >= 1) && (anoActual == anoInput) && (mesActual == mesInput)) {
      return "Conectado este mes";
    } else if ((Math.abs(diaActual - diaInput) >= 1) && (anoActual == anoInput) && (mesActual - mesInput == 1)) {
      return "Conectado el mes pasado";
    } else if ((Math.abs(diaActual - diaInput) >= 1) && (anoActual == anoInput) && (mesActual - mesInput >= 2)) {
      return "Conectado este año";
    }
  }
}
