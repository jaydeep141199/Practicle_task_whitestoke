import { Badge, Card, Group, Image, Text } from "@mantine/core";
interface IProductCardProps {
  image: string;
  title: string;
  price: number;
  description: string;
  category: string;
}

const ProductCard = ({
  image,
  title,
  price,
  description,
  category,
}: IProductCardProps) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Card.Section>
        <Image
          radius="md"
          h={{ base: 150, sm: 180, md: 200 }}
          w="auto"
          fit="contain"
          src={image}
          alt={title}
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500} >{title}</Text>
      </Group>
      <Group justify="space-between" mt="md" mb="xs">
        <Badge color="pink" variant="light" >
          {category}
        </Badge>
        <Badge color="blue" variant="light" >
          ${price}
        </Badge>{" "}
      </Group>

      <Text lineClamp={4}  style={{ flexGrow: 1 }}>
        {description}
      </Text>
    </Card>
  );
};

export default ProductCard;
