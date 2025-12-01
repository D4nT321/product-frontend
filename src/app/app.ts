import { Component, signal } from '@angular/core';
import { ProductoListComponent } from './component/producto-list/producto-list.component';

@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [ProductoListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nombre: string = 'Dante - King';

  cambiarNombre(): void {
    this.nombre = 'Hell in Cell';
  }
}
