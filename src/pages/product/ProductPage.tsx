import { useEffect, useState } from "react";
import ProductCard from "../../components/ui/card";
import { Box, Grid, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import type { Product } from "../../types/type";

const ProductPage = () => {
  const [data, setData] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  //
  const handleRedirect = (e: number) => {
    navigate(`/product/${e}`);
  };

  return (
    <>
      {data.length !== 0 ? (
        <>
          <Title order={2} ta="center" mb="lg">
            Products
          </Title>
          <Grid>
            {data.map((product: Product) => (
              <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={product.id}>
                <Box
                  onClick={() => handleRedirect(product?.id)}
                  style={{ cursor: "pointer" }}
                >
                  <ProductCard
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    category={product.category}
                  />
                </Box>
              </Grid.Col>
            ))}
          </Grid>
        </>
      ) : (
        "no data found"
      )}
    </>
  );
};

export default ProductPage;
