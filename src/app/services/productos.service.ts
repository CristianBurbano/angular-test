import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private productos:any[];
  constructor() {
    this.productos=[
      { 
        title: "silla Trust",
        category: "silla",
        precio: 9000000,
        description: "lorem ipsum dolor sit amet ....",
        id: 1
      },
      { 
        title: "computador Acer",
        category: "computadores",
        precio: 19000000,
        description: "lorem ipsum dolor sit amet ....",
        id: 2
      },
      { 
        title: "Xioami Redmi Note 7",
        category: "Celulares",
        precio:"7000000",
        description: "lorem ipsum dolor sit amet ....",
        id: 3
      },
    ]
  }

  getProductos(){
    return this.productos;
  }
  
  getProducto(id:number):Observable<any>{
    return of(this.productos.filter(p=>p.id===id)[0]).pipe(delay(3000))
    
  }
}
