import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export function Positive(props: SvgProps) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
    </Svg>
  )
}

export function Negative(props: SvgProps) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z" />
    </Svg>
  )
}

export function Trash(props: SvgProps) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
    </Svg>
  )
}