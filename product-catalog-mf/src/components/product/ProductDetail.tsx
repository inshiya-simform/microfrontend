import {
  Card,
  Typography,
  Tag,
  Avatar,
  Divider,
  Row,
  Col,
  Tooltip,
} from "antd";
import WishlistIcon from "../../icons/WishlistIcon";
import CartIcon from "../../icons/CartIcon";
import StarIcon from "../../icons/StarIcon";
import CategoryIcon from "../../icons/CategoryIcon";
import { useParams } from "react-router-dom";
import type { Product } from "../../types/productType";
import { Products } from "../../data/products";

const { Title, Text } = Typography;

function ProductDetail() {
  const urlParam = useParams<{ productId: string }>();
  const { productId } = urlParam;

  const product = Products.find((p: Product) => p.id === productId);

  if (!product) {
    return (
      <div style={{ textAlign: "center", padding: "100px 20px" }}>
        <Title level={2}>Product Not Found</Title>
        <Text type="secondary">
          The product you are looking for does not exist.
        </Text>
      </div>
    );
  }
  return (
    <Card
      style={{
        maxWidth: 700,
        margin: "32px auto",
        borderRadius: 18,
        boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
        padding: 0,
      }}
      bodyStyle={{ padding: 0 }}
      cover={
        <img
          alt={product.title}
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          style={{
            width: "100%",
            height: 320,
            objectFit: "cover",
            borderTopLeftRadius: 18,
            borderTopRightRadius: 18,
          }}
        />
      }
    >
      <div style={{ padding: 28 }}>
        <Row align="middle" justify="space-between">
          <Col>
            <Title level={2} style={{ marginBottom: 0 }}>
              {product.title}
            </Title>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginTop: 8,
              }}
            >
              <Tag color="blue" style={{ fontSize: 15, padding: "2px 12px" }}>
                <span style={{ marginRight: 4 }}>
                  <CategoryIcon width={18} height={18} />
                </span>
                {product.category}
              </Tag>
              <Tag
                color={product.isWishlisted ? "red" : "default"}
                style={{ fontSize: 15, padding: "2px 12px" }}
              >
                <span style={{ marginRight: 4 }}>
                  <WishlistIcon
                    width={18}
                    height={18}
                    fill={product.isWishlisted ? "#d32f2f" : "none"}
                  />
                </span>
                {product.isWishlisted ? "Wishlisted" : "Not Wishlisted"}
              </Tag>
            </div>
          </Col>
          <Col>
            <Text strong style={{ fontSize: 28, color: "#1677ff" }}>
              ${product.cost.toFixed(2)}
            </Text>
          </Col>
        </Row>
        <Divider style={{ margin: "18px 0 12px 0" }} />
        <Text style={{ fontSize: 17, color: "#444" }}>
          {product.description}
        </Text>
        <Row style={{ marginTop: 18, marginBottom: 8 }} gutter={24}>
          <Col>
            <Tooltip title="Stock">
              <Tag color="green" style={{ fontSize: 15 }}>
                In Stock: {product.stock}
              </Tag>
            </Tooltip>
          </Col>
          <Col>
            <Tooltip title="Average Rating">
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <StarIcon width={18} height={18} fill="#faad14" />
                <Text
                  style={{ color: "#faad14", fontWeight: 600, fontSize: 16 }}
                >
                  {product.rating}
                </Text>
              </span>
            </Tooltip>
          </Col>
        </Row>
        <Divider style={{ margin: "18px 0 12px 0" }}>Reviews</Divider>
        <div>
          {product.reviews.length === 0 ? (
            <Text type="secondary">No reviews yet.</Text>
          ) : (
            product.reviews.map((review, idx) => (
              <Card
                key={idx}
                size="small"
                style={{
                  marginBottom: 14,
                  borderRadius: 10,
                  background: "#fafcff",
                }}
                bodyStyle={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: 14,
                }}
              >
                <Avatar src={review.user.profileImage} size={38} />
                <div style={{ flex: 1 }}>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <Text strong>
                      {review.user.firstname} {review.user.lastname}
                    </Text>
                    <span
                      style={{ display: "flex", alignItems: "center", gap: 3 }}
                    >
                      <StarIcon width={15} height={15} fill="#faad14" />
                      <Text
                        style={{
                          color: "#faad14",
                          fontWeight: 500,
                          fontSize: 14,
                        }}
                      >
                        {review.rated}
                      </Text>
                    </span>
                  </div>
                  <Text style={{ color: "#444", fontSize: 15 }}>
                    {review.comment}
                  </Text>
                </div>
              </Card>
            ))
          )}
        </div>
        <Divider />
        <Row justify="end" style={{ marginTop: 10 }}>
          <button
            style={{
              background: "#1677ff",
              border: "none",
              borderRadius: 8,
              color: "#fff",
              padding: "10px 28px",
              fontWeight: 600,
              fontSize: 17,
              display: "flex",
              alignItems: "center",
              gap: 10,
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(22,119,255,0.08)",
            }}
          >
            <CartIcon width={22} height={22} fill="#fff" />
            Add to Cart
          </button>
        </Row>
      </div>
    </Card>
  );
}

export default ProductDetail;
