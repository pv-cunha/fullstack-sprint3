class ProductsView extends View {
  constructor(element) {
    super(element);
  }

  template(model) {
    console.log(model.products);
    return `    
    <ol class="products__list">
    ${
      model.products && model.products.length > 6
        ? model.products
            .map(
              (product) => `    
  <li class="products__list__item" aria-labelledby=${product.value}>
   <div class="products__list__item__card">
      <figure>
        <img src=${product.image} alt=${product.description} />
        <figcaption class="products__list__item__card__description" id=${product.value}>
          ${product.description}
        </figcaption>
        <span>
          <p class="products__list__item__card__price">R$ ${product.value}</p>
        </span>
      </figure>
    </div>
  </li>
  `,
            )
            .join('')
        : `<h1>Adicione uma Lista</h1>`
    }
      </ol>
     
    `;
  }
}
