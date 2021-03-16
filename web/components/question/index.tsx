import React, { useState } from "react";
import styled from "@emotion/styled";
import { Flex, Text } from "rebass";
import Icon from "components/icon";

interface QuestionProps {
  list: {
    title: string;
    desc?: string;
  };
}

const Question: React.FC<QuestionProps> = ({ list }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIconClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Flex flexDirection="column">
      <Flex
        width="100%"
        alignItems="center"
        justifyContent="space-between"
        mb={["40px", "36px", "36px", "28px"]}
      >
        <Title mr={["51px", 0, 0, 0]}>{list.title}</Title>
        <Icon
          onClick={handleIconClick}
          name={isOpen ? "faqClose" : "plus"}
          className="cursor"
          mr={!isOpen ? "9px" : "0px"}
        />
      </Flex>

      {isOpen && (
        <Desc width="95%" mb={["89px", "39px", "43px", "48px"]}>
          {list.desc}
        </Desc>
      )}
    </Flex>
  );
};

export default Question;

const Title = styled(Text)`
  font-size: 20px;
  letter-spacing: 0em;
  text-align: left;
`;


const Desc = styled(Flex)`
  font-size: 20px;
  line-height: 133%;

  color: #3d3d3d;

  letter-spacing: 0em;
  text-align: left;
`;
