import * as React from 'react';
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg';

function SvgLink(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path
        fill="#000"
        fillRule="evenodd"
        d="M17.605 14.772c.302-.2.504-.401.705-.602l3.024-3.01c2.318-2.308 2.217-6.222-.302-8.43a5.919 5.919 0 00-8.366 0l-1.713 1.707a.967.967 0 000 1.405.977.977 0 001.411 0l1.713-1.706a4.092 4.092 0 015.644 0c1.613 1.505 1.613 4.013.101 5.619l-3.023 3.01c-.101.2-.202.301-.404.401-1.814 1.305-4.333 1.004-5.643-.802-.303-.402-1.008-.502-1.411-.2-.403.3-.504 1.002-.202 1.404a6.02 6.02 0 004.838 2.408c1.31 0 2.52-.401 3.628-1.204zm-7.861 5.017l1.713-1.706c.403-.401 1.109-.3 1.512.1a.967.967 0 010 1.405l-1.713 1.706C10.046 22.398 8.534 23 7.023 23c-1.512 0-3.024-.602-4.233-1.706-2.318-2.308-2.42-6.12-.101-8.529l3.023-3.01.605-.602c1.31-1.004 2.923-1.405 4.435-1.104 1.511.2 2.922 1.003 3.93 2.308.303.401.202 1.104-.201 1.405-.403.3-1.109.2-1.411-.201-.605-.903-1.512-1.405-2.62-1.605-1.11-.1-2.117.2-3.024.802l-.403.402-3.024 3.01c-1.512 1.505-1.512 4.114.1 5.62a4.092 4.092 0 005.645 0z"
        clipRule="evenodd"
      />
      <Mask id="link_svg__a" width={22} height={22} x={1} y={1} maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M17.605 14.772c.302-.2.504-.401.705-.602l3.024-3.01c2.318-2.308 2.217-6.222-.302-8.43a5.919 5.919 0 00-8.366 0l-1.713 1.707a.967.967 0 000 1.405.977.977 0 001.411 0l1.713-1.706a4.092 4.092 0 015.644 0c1.613 1.505 1.613 4.013.101 5.619l-3.023 3.01c-.101.2-.202.301-.404.401-1.814 1.305-4.333 1.004-5.643-.802-.303-.402-1.008-.502-1.411-.2-.403.3-.504 1.002-.202 1.404a6.02 6.02 0 004.838 2.408c1.31 0 2.52-.401 3.628-1.204zm-7.861 5.017l1.713-1.706c.403-.401 1.109-.3 1.512.1a.967.967 0 010 1.405l-1.713 1.706C10.046 22.398 8.534 23 7.023 23c-1.512 0-3.024-.602-4.233-1.706-2.318-2.308-2.42-6.12-.101-8.529l3.023-3.01.605-.602c1.31-1.004 2.923-1.405 4.435-1.104 1.511.2 2.922 1.003 3.93 2.308.303.401.202 1.104-.201 1.405-.403.3-1.109.2-1.411-.201-.605-.903-1.512-1.405-2.62-1.605-1.11-.1-2.117.2-3.024.802l-.403.402-3.024 3.01c-1.512 1.505-1.512 4.114.1 5.62a4.092 4.092 0 005.645 0z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#link_svg__a)">
        <Path fill="#347AF0" d="M0 0h24v24H0z" />
      </G>
    </Svg>
  );
}

export default SvgLink;