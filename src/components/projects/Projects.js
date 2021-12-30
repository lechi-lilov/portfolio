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
          return (
            <Cart key={index}>
              <Left>
                <CartHeadline>
                  <h1>{project.title}</h1>
                </CartHeadline>
                <p>{project.description}</p>
                <a href="#">{project.link}</a>
              </Left>
              <Right>{project.image}</Right>
            </Cart>
          );
        })}
      </Wrapper>
    </Container>
  );
}

export default Projects;
