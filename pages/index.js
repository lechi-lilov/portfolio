import Head from "next/head";
import Body from "../src/components/body/Body";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Header from "../src/components/header/Header";
library.add(faLinkedinIn, faGithub);

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lechi Dzhalilov</title>
        <meta name="description" content="Lechi's Personel Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Body />
    </div>
  );
}
