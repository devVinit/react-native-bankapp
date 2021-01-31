import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function ChevronDownIconSvg(props: SvgProps) {
    return (
        <Svg
            width={14}
            height={14}
            viewBox="0 0 14 14"
            fill="none"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.255 5.25a.581.581 0 00-.823 0L7.17 7.513 4.906 5.25a.58.58 0 10-.823.822L6.761 8.75a.58.58 0 00.822 0l2.678-2.678a.586.586 0 00-.006-.822z"
                fill="#000618"
            />
        </Svg>
    )
}

export default ChevronDownIconSvg;
