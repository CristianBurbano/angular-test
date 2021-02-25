import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductDetailComponent implements OnInit {
  producto:any;
  constructor(private productos$: ProductosService, private route: ActivatedRoute) { }

  ngOnInit() {
    const productId=this.route.snapshot.paramMap.get('id');
    console.log(productId);
    this.productos$.getProducto(Number(productId)).subscribe(p=>{
      this.producto=p;
    });
  }

}
