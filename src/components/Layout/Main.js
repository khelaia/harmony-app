import React from 'react'
import styled from '@emotion/styled/macro'

import mq from 'mediaQuery'
import { hasNonAscii } from '../../utils/utils'

const MainContainer = styled('main')`
  margin-top: 0;
  padding: 5px;
  width: 100%;
  overflow-y: scroll;
  ${p =>
    p.hasNonAscii
      ? mq.medium`
    margin-left: 250px;
    margin-top: 200px;
  `
      : mq.medium`
    margin-left: 250px;
    margin-top: 100px;
  `}
`

const Main = ({ children }) => (
  <MainContainer hasNonAscii={hasNonAscii()}>{children}</MainContainer>
)

export default Main
