import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { Tag, Text } from "@chakra-ui/react";

const InfoCard = ({ imgUrl, text, tagText, inverted }) => {
  return (
    <CustomCard
      bgColor={inverted ? "p.purple" : "white"}
      bgImage={imgUrl}
      bgSize="cover"
      bgRepeat={"no-repeat"}
    >
      <Tag
        bg={inverted ? "white" : "p.purple"}
        color={inverted ? "p.purple" : "white"}
        borderRadius={"full"}
        fontWeight={inverted ? "medium" : "medium"}
        fontSize={"sm"}
      >
        {tagText}
      </Tag>
      <Text
        textStyle={"h5"}
        color={inverted ? "white" : "p.purple"}
        fontWeight={"medium"}
        mt={4}
      >
        {text}
      </Text>
    </CustomCard>
  );
};

export default InfoCard;
