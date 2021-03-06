import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function LogoSvg(props: SvgProps) {
    return (
        <Svg
            width={70}
            height={70}
            viewBox="0 0 70 70"
            fill="none"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M35 70c19.33 0 35-15.67 35-35S54.33 0 35 0 0 15.67 0 35s15.67 35 35 35z"
                fill="#000618"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M30.232 24.113a3.395 3.395 0 115.694 3.698 3.395 3.395 0 01-5.694-3.698zm5.676-2.507a5.195 5.195 0 10-5.658 8.713 5.195 5.195 0 005.658-8.713zm-7.2 17.098l-6.856-.485 3.624-5.58 3.232 6.065zm-2.162-7.885a1.15 1.15 0 00-1.979-.085l-4.825 7.43a1.15 1.15 0 00.883 1.773l9.128.646a1.15 1.15 0 001.096-1.688l-4.303-8.076zm8.249 7.128a1.15 1.15 0 011.59-.338l6.626 4.303a1.15 1.15 0 01.338 1.59l-4.302 6.626a1.15 1.15 0 01-1.591.338l-6.626-4.302a1.15 1.15 0 01-.338-1.591l4.303-6.626zm1.156 1.526l-3.595 5.535 5.535 3.595 3.595-5.536-5.535-3.594zm13.76-6.68a.9.9 0 00-.373-1.76l-4.607.978-.98-4.606a.9.9 0 10-1.76.374l.98 4.607-4.608.979a.9.9 0 10.375 1.76l4.606-.979.98 4.607a.9.9 0 001.76-.374l-.979-4.607 4.607-.98z"
                fill="#fff"
            />
        </Svg>
    )
}

export default LogoSvg;
