import { useState } from "react";
import { Products } from "../../data/products";
import ProductCard from "./ProductCard";
import type { Product } from "../../types/productType";
import { Link } from "react-router-dom";

function ProductCatalog() {
const [products, setProducts] = useState(Products);
function handleWishlist(id: string) {
        const updatedProducts = products.map((p: Product) => {
            if (p.id === id) {
                return { ...p, isWishlisted: !p.isWishlisted };
            }
            return p;
        });
        setProducts(updatedProducts);
    }
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "32px 24px",
        padding: "32px 16px",
        maxWidth: 1200,
        margin: "0 auto"
      }}
    >
      {products.map((product) => (
        <Link to={product.id}>
          <ProductCard key={product.id} product={product} handleWishlist={handleWishlist} />
        </Link>
      ))}
    </section>
  );
}

export default ProductCatalog;
