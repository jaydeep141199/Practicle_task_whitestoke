import {
  Title,
  Card,
  Image,
  Text,
  Badge,
  Group,
  Divider,
} from "@mantine/core";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../../types/type";

const ProductDetailsPage = () => {
  const params = useParams();
  const [data, setData] = React.useState<Product | null>(null);
  console.log(params.id);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + params.id)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  console.log(data);
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "20px" }}>
      <Title order={1} ta="center" mb="xl">
        Product Details
      </Title>

      {data && (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Image
              src={data?.image}
              height={400}
              alt={data?.title}
              fit="contain"
              style={{ backgroundColor: "#f8f9fa" }}
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500} size="lg">
              {data?.title}
            </Text>
            <Badge color="blue" variant="light">
              {data.category}
            </Badge>
          </Group>

          <Text size="xl" fw={700} style={{ color: "green" }}>
            ${data?.price}
          </Text>

          <Divider my="sm" />

          <Text size="sm" c="dimmed" mb="md">
            Description
          </Text>
          <Text size="md" mb="lg">
            {data?.description}
          </Text>
        </Card>
      )}
    </div>
  );
};

export default ProductDetailsPage;
