import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

interface Props {
  productImage: string;
  productName: string;
  productDescription: string;
  productPrice: number;
  productRating: number;
  productRatingCount: number;
}

export const ProductCard = ({
  productDescription,
  productImage,
  productName,
  productPrice,
  productRating,
  productRatingCount,
}: Props) => {
  return (
    <Card
      style={{ width: "100%", height: "500px", borderColor: "transparent" }}
    >
      <CardHeader>
        <div style={{ width: "100%", position: "relative", height: "250px" }}>
          <img
            src={productImage}
            alt={productName}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
          <Badge className="absolute top-2 right-2" variant="secondary">
            New
          </Badge>
        </div>
        <CardTitle style={{ width: "100%", height: "50px" }}>
          {productName.length > 40
            ? `${productName.slice(0, 40)}...`
            : productName}
        </CardTitle>
      </CardHeader>
      <CardContent
        style={{
          width: "100%",
          height: "200px",

          display: "flex",
          flexDirection: "column",

          //   justifyContent: "space-between",
        }}
      >
        <CardDescription>
          {productDescription.length > 50
            ? `${productDescription.slice(0, 50)}...`
            : productDescription}
        </CardDescription>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p>{`$${productPrice}`}</p>
          <div style={{ color: "yellow" }}>
            <span>{productRating}</span>
            <span>({productRatingCount})</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full mt-auto">
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};
