import React from "react";
import {
  Cart,
  CartHeadline,
  Container,
  Headline,
  Left,
  Right,
  Wrapper,
} from "./style";

import { projects } from "../../../data/personeldata";
import Image from "next/image";

function Projects() {
  return (
    <Container>
      <Wrapper>
        <Headline>
          <li>Projects</li>
          <p>
            Here are some projects that I&#39;ve worked on and am currently
            working on!
          </p>
        </Headline>
        {projects.map((project, index) => {
          const src = `${project.image}`;
          return (
            <Cart key={index}>
              <Left>
                <CartHeadline>
                  <h1>{project.title}</h1>
                </CartHeadline>
                <p>{project.description}</p>
                <a href="#">{project.link}</a>
              </Left>
              <Right>
                <Image
                  loader={() => src}
                  priority
                  className="avatar"
                  layout="responsive"
                  src={src}
                  alt="Lİnkedin"
                  width={144}
                  height={144}
                />
              </Right>
            </Cart>
          );
        })}
      </Wrapper>
    </Container>
  );
}

export default Projects;
