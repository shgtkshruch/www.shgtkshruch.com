import { useState } from "react";
import styled from "@emotion/styled";

import type { Work } from "../../types/api";

import { mq } from "../variables";
import Section from "../common/Section";
import Heading from "../common/Hgroup";
import Item from "./Item";

const List = styled.div`
  padding-top: 4rem;
  ${mq.pc} {
    padding-top: 14rem;
  }
`;

const Works: React.FC<{ next: () => void; items: Work[] }> = ({
  next,
  items,
}) => {
  const [isTypingDone, setIsTypingDone] = useState(false);

  function onTypingDone() {
    setIsTypingDone(true);
    next();
  }

  return (
    <Section id="work" className="work">
      <Heading
        title="work"
        subTitle="Write code anywhere in the company or OSS."
        onTypingDone={onTypingDone}
      />
      <List>
        {items.map((item, i) => (
          <Item key={i} item={item} isTypingDone={isTypingDone} />
        ))}
      </List>
    </Section>
  );
};

export default Works;
