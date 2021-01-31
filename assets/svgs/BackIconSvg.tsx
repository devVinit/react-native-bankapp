import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function BackIconSvg(props: SvgProps) {
    return (
        <Svg
            width={28}
            height={28}
            viewBox="0 0 28 28"
            fill="none"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.167 12.833H8.324l4.239-5.086a1.166 1.166 0 10-1.792-1.494l-5.834 7c-.045.055-.069.12-.102.18-.028.049-.062.091-.083.145a1.15 1.15 0 00-.084.417L4.667 14v.005c0 .142.032.283.085.417.02.054.055.096.083.145.034.06.057.125.102.18l5.834 7a1.165 1.165 0 101.792-1.494l-4.239-5.086h13.843a1.167 1.167 0 000-2.334z"
                fill="#000618"
            />
        </Svg>
    )
}

export default BackIconSvg;
