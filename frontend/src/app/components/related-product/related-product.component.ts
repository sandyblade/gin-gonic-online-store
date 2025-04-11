import { Component } from '@angular/core';

@Component({
  selector: 'app-related-product',
  standalone: false,
  templateUrl: './related-product.component.html',
  styles: ``
})
export class RelatedProductComponent {

  slides: Array<any> = [
    { img: "https://5an9y4lf0n50.github.io/demo-images/demo-commerce/product01.png" },
    { img: "https://5an9y4lf0n50.github.io/demo-images/demo-commerce/product02.png" },
    { img: "https://5an9y4lf0n50.github.io/demo-images/demo-commerce/product03.png" },
    { img: "https://5an9y4lf0n50.github.io/demo-images/demo-commerce/product04.png" }
  ];
  slideConfig: any = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 2000
  };

}
