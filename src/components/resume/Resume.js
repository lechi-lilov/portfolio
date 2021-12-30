import React from "react";
import { info } from "../../../data/personeldata";
import {
  Container,
  Mid,
  Headline,
  Button,
  Info,
  Headline2,
  Footer,
  Mail,
  Option1,
  Logo,
  Option2,
} from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Resume() {
  return (
    <Container>
      {info.map((data) => {
        return (
          <Mid key={data.id}>
            <h1>Resume</h1>
            <Headline>
              <p>Work Experience</p>
              <Button>
                <a href="/data/download.txt" download>
                  Download
                </a>
              </Button>
            </Headline>
            <Info>
              <h3>{data.experience1.date}</h3>
              <h4>{data.experience1.title}</h4>
              <h4>{data.experience1.job}</h4>
              <p>{data.experience1.place}</p>
              <ul>
                <li>{data.experience1.description}</li>
              </ul>
            </Info>
            <Headline2>
              <p>Education</p>
            </Headline2>
            <Info>
              <h3>{data.education.date}</h3>
              <h4>{data.education.title}</h4>
              <h4>{data.education.place}</h4>
              <h4>{data.education.gpa}</h4>
            </Info>
            <Headline2>
              <p>Professional Skilleset</p>
            </Headline2>
            <Info>
              <ul>
                <li>{data.skills.programming.join(", ")}</li>
              </ul>
            </Info>
          </Mid>
        );
      })}
      <Footer>
        <p>© 2021 by Lechi Dzhalilov</p>
        <Mail>
          <Option1>
            <p>Write</p>
            <a href="mailto:lechidzhalilov98@gmail.com">
              lechidzhalilov98@gmail.com
            </a>
          </Option1>
          <Option2>
            <p>Follow</p>

            <Logo>
              <a
                href="https://www.linkedin.com/in/lechi-dzhalilov/"
                target="_blank"
                rel="noreferrer "
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{
                    fontSize: "1rem",
                    width: "1rem",
                    cursor: "pointer",
                  }}
                />
              </a>
              <a
                href="https://github.com/lechiDzhalilov"
                target="_blank"
                rel="noreferrer "
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{
                    fontSize: "1rem",
                    width: "1rem",
                    cursor: "pointer",
                  }}
                />
              </a>
            </Logo>
          </Option2>
        </Mail>
      </Footer>
    </Container>
  );
}

export default Resume;
