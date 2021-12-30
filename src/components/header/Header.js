import Link from "next/link";
import React from "react";
import { Container } from "./style";
import { Menu } from "./style";

function Header() {
  return (
    <Container>
      <Link href="/" passHref>
        <h1>
          Lechi Dzhalilov <span>/ Frontend Developer</span>
        </h1>
      </Link>
      <Menu>
        <Link href="/">
          <a>About Me</a>
        </Link>
        <Link href="/headerlinks/myresume">
          <a>Resume</a>
        </Link>
        <Link href="/headerlinks/myprojects">
          <a>Projects</a>
        </Link>
        <Link href="/headerlinks/mycontact">
          <a>Contact</a>
        </Link>
      </Menu>
    </Container>
  );
}

export default Header;
