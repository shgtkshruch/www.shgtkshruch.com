import React from 'react';
import styled from '@emotion/styled'

import { mq } from '../variables'

const Section = styled.section`
  padding: 3rem 0;

  &:not(:first-of-type) {
    display: none;
  }

  ${mq.pc} {
    padding: 9rem 0;
  }

  &:first-of-type {
    padding-top: 0;
  }
`

export default ({ id, className, children }) => {
  return (
    <Section id={id} className={className}>
      {children}
    </Section>
  )
}
