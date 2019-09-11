import React from 'react'
import Svg, { Path } from 'react-native-svg'

const NextIcon = props => (
  <Svg width={30} height={21} {...props}>
    <Path
      d="M4.782 12.968c-1.7 1.628-2.527 3.84-2.527 6.763a.873.873 0 0 1-1.746.005c0-3.377 1.031-6.073 3.065-8.02 4.705-4.502 13.577-4.103 20.704-3.79.995.044 1.947.092 2.837.122l-6.517-6.517A.873.873 0 1 1 21.833.296l7.911 7.912a.873.873 0 0 1 0 1.235l-7.912 7.91a.87.87 0 0 1-1.235 0 .873.873 0 0 1 0-1.234l6.238-6.237c-.836-.048-1.716-.114-2.634-.154-6.436-.283-15.253-.746-19.419 3.24z"
      fillRule="nonzero"
      fill="#FFEFDF"
    />
  </Svg>
)

export default NextIcon