import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  productos:Array<any>;

  constructor(private productos$:ProductosService, private route:Router) { 
  }

  ngOnInit() {
    this.productos= this.productos$.getProductos();
  }

  navigateToItem(id:number){
    this.productos$.getProducto(id);
    this.route.navigate(['/product-detail',id])
  }


}
