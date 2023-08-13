import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Image,
  Badge,
} from "@chakra-ui/react";

function item({ product }) {
  const { id, brand, model, price, imgUrl } = product;
  return (
    <Card id={id} rounded={"3xl"} className="hover:scale-110 transition cursor-pointer">
      <CardBody>
        <Image src={imgUrl} alt={brand} marginX={"auto"} maxH={"130"} />
        <Stack mt="6" spacing="3">
          <div className="flex justify-between">
            <Badge rounded="3xl" p={2}>
              {brand}
            </Badge>
            <Text size={"xl"} className="text-amber-500" fontWeight={"bold"}>
              {price || 0}€
            </Text>
          </div>
          <Heading size={"md"}>{model}</Heading>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default item;
