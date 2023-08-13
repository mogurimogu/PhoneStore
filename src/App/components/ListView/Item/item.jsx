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
  //TODO Pasar función onClick que reciba la ID del item APP
  return (
    <Card id={id} rounded={"3xl"}>
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
