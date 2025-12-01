import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }

  getProductos(): Producto[] {
    return [
      {
        id: 1,
        nombre: 'Laptop HP Pavilion',
        precio: 899.99,
        imagenUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500'
      },
      {
        id: 2,
        nombre: 'Mouse Inalámbrico Logitech',
        precio: 29.99,
        imagenUrl: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500'
      },
      {
        id: 3,
        nombre: 'Teclado Mecánico RGB',
        precio: 79.99,
        imagenUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500'
      },
      {
        id: 4,
        nombre: 'Monitor Samsung 27"',
        precio: 249.99,
        imagenUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500'
      },
      {
        id: 5,
        nombre: 'Auriculares Sony WH-1000XM4',
        precio: 349.99,
        imagenUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500'
      },
      {
        id: 6,
        nombre: 'Webcam Logitech C920',
        precio: 69.99,
        imagenUrl: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?w=500'
      }
    ];
  }
}

