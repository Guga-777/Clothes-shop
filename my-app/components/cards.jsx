import Link from "next/link";

const ProductCard = ({ name, description, price, image }) => {
  return (
    <Link href={`/routes/DetailsPage`} passHref>
  
    <div className="product-card">
      <Link href={`/categories/hoodies`} passHref></Link>
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>
      </div>
      <button className="add-to-cart-button">Add to Cart 🛒</button>
    </div>
    </Link>
  );
};

export default ProductCard;