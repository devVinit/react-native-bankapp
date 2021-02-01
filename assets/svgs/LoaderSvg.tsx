import * as React from 'react';
import Svg, {
  SvgProps,
  Rect,
  Circle,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

function LoaderSvg(props: SvgProps) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      {...props}
    >
      <Circle
        cx={15}
        cy={15}
        r={14.25}
        stroke="url(#prefix__paint0_linear)"
        strokeWidth={1.5}
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={2.344}
          y1={5.625}
          x2={36.094}
          y2={30}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default LoaderSvg;
