/** @jsx jsx */
import { useState } from 'react';
import styled from '@emotion/styled'
import { jsx, css } from '@emotion/core';

import { breakpoints, mq } from './variables';
import Section from './components/Section';
import Heading from './components/Hgroup';
import History from './components/history/';
import items from './components/history/data';

const List = styled.ul`
  display: inline-block;
  text-align: left;
  position: relative;
  padding: 4rem 0;
  margin-top: 2rem;

  ${mq.pc} {
    display: block;
    margin-top: 5rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: ${props => props.typingDone ? '100%' : 0};
    background-color: currentColor;
    transition: height 0.8s ease-in-out;
  }
`
const sectionStyle = css`
  max-width: 55rem;
  margin: 0 auto;
  text-align: center;
`

export default ({ next }) => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [typingDone, setTypingDone] = useState(false);

  function updateCurrentIndex(index) {
    if (isPc()) setCurrentIndex(index)
  }

  function isSelected(i) {
    return isMobile() ? true : currentIndex === i
  }

  function isPc() {
    return window.innerWidth >= breakpoints.pc
  }

  function isMobile() {
    return window.innerWidth < breakpoints.pc
  }

  function onTypingDone() {
    setTypingDone(true)
    next();
  }

  return (
    <Section id="history" css={sectionStyle}>
      <Heading
        title="history"
        subTitle="Learn WEB technology with Internet."
        onTypingDone={onTypingDone}
      />
      <List typingDone={typingDone}>
        {items.map((item, i) => (
          <History
            key={i}
            item={item}
            isSelected={isSelected(i)}
            typingDone={typingDone}
            onAnimationEnd={() => i === items.length - 1 && currentIndex === -1 ? setCurrentIndex(0) : false}
            updateCurrentIndex={() => updateCurrentIndex(i)}
          />
        ))}
      </List>
    </Section>
  )
}
