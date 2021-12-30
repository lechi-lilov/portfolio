import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { info } from "../../../data/personeldata";
import {
  Container,
  Left,
  Buttons,
  Option1,
  Option2,
  Right,
  Img,
  Wrapper,
  Statictxt,
} from "./style";

function Body() {
  return (
    <Container>
      <Left>
        <Img>
          <Image
            priority
            className="avatar"
            layout="responsive"
            src="/images/Lechi-Dzhalilov-1.jpg"
            alt="Lechi Dzhalilov"
            width={144}
            height={144}
          />
        </Img>
        <style jsx global>{`
          .avatar {
            border-radius: 50%;
            object-fit: cover;
          }
        `}</style>
        <h1>Lechi Dzhalilov</h1>
        <h1>Frontend Developer Intern</h1>
      </Left>
      <Right>
        {info.map((data) => {
          return (
            <div key={data.id}>
              <p>Hey, There!</p>
              <Wrapper>
                <Statictxt>I am</Statictxt>
                <ul>
                  <li>
                    <span>{data.title}</span>
                  </li>
                  <li>
                    <span>{data.job}</span>
                  </li>
                </ul>
              </Wrapper>
              <p>
                I Am a {data.job}
                {data.place}
              </p>
              <Buttons>
                <Link href="/headerlinks/myresume" passHref>
                  <Option1>
                    <button>Resume</button>
                  </Option1>
                </Link>

                <Option2>
                  <a
                    href="https://www.linkedin.com/in/lechi-dzhalilov/"
                    target="_blank"
                    rel="noreferrer "
                    style={{
                      fontSize: "2.5rem",
                      width: "2.5rem",
                      cursor: "pointer",
                    }}
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a
                    href="https://github.com/lechiDzhalilov"
                    target="_blank"
                    rel="noreferrer "
                    style={{
                      cursor: "pointer",
                      fontSize: "2.5rem",
                      width: "2.5rem",
                    }}
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </Option2>
              </Buttons>
            </div>
          );
        })}
      </Right>
    </Container>
  );
}

export default Body;
