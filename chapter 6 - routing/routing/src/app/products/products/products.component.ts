import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  goToProduct(id: string): void {
    this.router.navigate(['./', id], {relativeTo: this.route});
  }
}
