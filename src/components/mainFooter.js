import React from "react";

// rc-footer
import Footer from "rc-footer";
import "rc-footer/assets/index.css";

const columns = [
  {
    title: "Account",
    items: [
      {
        title: "Login",
        url: "/login",
        openExternal: false,
      },
      {
        title: "Registrati",
        url: "/registrati",
        openExternal: false,
      },
    ],
  },
  {
    title: "Piattaforma",
    items: [
      {
        title: "Home",
        url: "/",
        openExternal: false,
      },
      {
        title: "Beta",
        url: "/beta",
        openExternal: false,
      },
      {
        title: "Prezzi",
        url: "/prezzi",
        openExternal: false,
      },
    ],
  },
  {
    title: "Risorse",
    items: [
      {
        title: "Manifesto",
        url: "/manifesto",
        openExternal: false,
      },
      {
        title: "Blog",
        url: "/blog",
        openExternal: true,
      },
      {
        title: "Faq",
        url: "/faq",
        openExternal: false,
      },
    ],
  },
  {
    title: "Per gli istruttori",
    items: [
      {
        title: "Vantaggi di Yoomy",
        url: "/istruttori/vantaggi",
        openExternal: false,
      },
      {
        title: "Lavora con noi",
        url: "/istruttori",
        openExternal: false,
      },
      {
        title: "Contattaci",
        url: "/istruttori/contatti",
        openExternal: false,
      },
    ],
  },
  {
    title: "Social",
    items: [
      {
        title: "Instagram",
        url: "https://www.instagram.com/",
        openExternal: true,
      },
      {
        title: "Facebook",
        url: "https://www.facebook.com/",
        openExternal: true,
      },
      {
        title: "Twitter",
        url: "https://www.twitter.com/",
        openExternal: true,
      },
    ],
  },
];

function MainFooter() {
  return (
    <Footer
      columns={columns}
      style={{ fontFamily: "DM Sans" }}
      theme="light"
      backgroundColor="#e9ecef"
      bottom={<b>Yoomy ©2020. Tutti i diritti riservati.</b>}
    />
  );
}

export default MainFooter;