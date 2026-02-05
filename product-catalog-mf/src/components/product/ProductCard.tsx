import Card from "antd/es/card";
import WishlistIcon from "../../icons/WishlistIcon";
import CartIcon from "../../icons/CartIcon";
import StarIcon from "../../icons/StarIcon";
import type { Product } from "../../types/productType";

const { Meta } = Card;

interface ProductCardProps {
  product: Product;
  handleWishlist: (id: string) => void;
}

function ProductCard({ product, handleWishlist }: ProductCardProps) {
  function handleAddToCart() {
    window.dispatchEvent(
      new CustomEvent("cart:add-item", {
        detail: { product: product },
      }),
    );
  }

  return (
    <Card
      style={{
        width: 320,
        borderRadius: 16,
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        overflow: "hidden",
        margin: "16px auto",
        background: "#fff",
      }}
      cover={
        <img
          draggable={false}
          alt={product.title}
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          style={{ height: 200, objectFit: "cover" }}
        />
      }
      actions={[
        <button
          key="wishlist"
          onClick={() => handleWishlist(product.id)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            marginLeft: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
          }}
          aria-label="Add to wishlist"
        >
          {product.isWishlisted ? (
            <WishlistIcon width={22} height={22} fill="#d32f2f" />
          ) : (
            <WishlistIcon width={22} height={22} fill="none" />
          )}
        </button>,
        <button
          key="add-to-cart"
          onClick={handleAddToCart}
          style={{
            background: "#1677ff",
            border: "none",
            borderRadius: 6,
            color: "#fff",
            padding: "6px 16px",
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
          aria-label="Add to cart"
        >
          <CartIcon width={20} height={20} fill="#fff" />
          <span style={{ marginLeft: 6 }}>Add to Cart</span>
        </button>,
      ]}
    >
      <Meta
        title={product.title}
        description={
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ color: "#444", fontSize: 15 }}>
              {product.description}
            </span>
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span style={{ color: "#1677ff", fontWeight: 600, fontSize: 18 }}>
                ${product.cost.toFixed(2)}
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <StarIcon width={18} height={18} fill="#faad14" />
                <span
                  style={{ color: "#faad14", fontWeight: 500, fontSize: 15 }}
                >
                  {product.rating}
                </span>
              </span>
            </span>
          </div>
        }
      />
    </Card>
  );
}

export default ProductCard;
