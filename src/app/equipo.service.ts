import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EquipoService {
  equipo: any[] = [
    {
      nombre: 'Ignacio',
      especialidad: 'HTML',
      descripcion: 'lorem ipsumajskashdkashdkasjhdkasjdhkj',
    },
    {
      nombre: 'Maria',
      especialidad: 'CSS',
      descripcion: 'lorem ipsumajskashdkashdkasjhdkasjdhkj',
    },
  ];
  constructor() {
    console.log('funcionando servicio');
  }
  obtenerEquipo() {
    return this.equipo;
  }

  obtenerUno(i) {
    return this.equipo[i];
  }
}
