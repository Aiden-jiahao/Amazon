import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div>
      <p>Products here...</p>
      {products.map(({ id, title, price, description, category, image }) => (
        <Product
          key={id}
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
        />
      ))}
    </div>
  );
}

export default ProductFeed;
