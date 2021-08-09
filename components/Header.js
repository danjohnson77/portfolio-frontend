import Head from "next/head";

const Header = () => {
  return (
    <Head>
      <link
        rel="dns-prefetch"
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
        crossOrigin="anonymous"
      />

      <meta
        name="keywords"
        content="Daniel Johnson, Web Development, Web Developer, HTML, CSS, Javascript, React, MERN"
      />
      <meta
        name="description"
        content="Daniel Johnson's portfolio of web development projects"
      ></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Daniel Johnson - Web Developer</title>
    </Head>
  );
};

export default Header;
