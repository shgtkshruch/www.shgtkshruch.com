import React from 'react';
import styled from '@emotion/styled'

const color = '#545454';

const Scroll = styled.div`
  width: 1em;
	height: 3.125em;
	transform: translateX(-50%) scale(2);
	z-index: 99999;
`

const Arrow = styled.div`
  &::after,
  &::before {
    content: '';
  }

  & span,
  &::after,
  &::before {
    display: block;
    width: 0.315em;
    height: 0.315em;
    border-right: 1px solid ${color};
    border-bottom: 1px solid ${color};
    margin: 0 0 0.125em 0.315em;
    transform: rotate(45deg);
    animation: mouse-scroll 1s infinite;
    animation-direction: alternate;
  }

  &::before {
    margin-top: 0.315em;
    animation-delay: .1s;
  }

  &::after {
	  animation-delay: .3s;
  }

  & span {
	  animation-delay: .2s;
  }

  @keyframes mouse-scroll {
    0%   { opacity: 0; }
    50%  { opacity: .5; }
    100% { opacity: 1; }
  }
`

const Mouse = styled.div`
	height: 1.375em;
	width: .875em;
	border: 1px solid ${color};
	border-radius: 2em;
`

const Wheel = styled.div`
  height: 0.1875em;
  width: 0.1875em;
  margin: 0.1875em auto 0;
  background-color: ${color};
  animation: mouse-wheel 1.4s ease infinite;
  border-radius: 50%;

  @keyframes mouse-wheel {
    0% {
      opacity: 1;
      transform: translateY(0);
    }

    100% {
      opacity: 0;
      transform: translateY(.375em);
    }
  }
`

export default () => (
  <Scroll>
    <Mouse>
      <Wheel />
    </Mouse>
    <Arrow>
      <span></span>
    </Arrow>
  </Scroll>
)