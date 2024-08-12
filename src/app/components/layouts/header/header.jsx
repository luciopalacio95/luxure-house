'use client';

import NavBar from './navbar';

export default function Header (props) {
    return (
      <NavBar isHome={props.isHome} />
    );
}