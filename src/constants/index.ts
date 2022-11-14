export const LANDING_PAGE_URL = process.env.REACT_APP_BASE_URL;

export const URLS = {
  HOME: "/",
  EVENT: "/event",
};

export type SocialItemTypes = {
  img: string;
  imgHover: string;
  label: string;
  username?: string;
  url: string;
};
export const socialsData: Array<SocialItemTypes> = [
  {
    img: "/images/socials/twitter.svg",
    imgHover: "/images/socials/twitter.svg",
    label: "Official Twitter",
    url: "https://twitter.com/Firebirdchain",
    username: "@Firebirdchain",
  },
  {
    img: "/images/socials/github.svg",
    imgHover: "/images/socials/github.svg",
    label: "Github",
    url: "https://github.com/firebird",
    // username: "@Firebird"
  },
  {
    img: "/images/socials/medium.svg",
    imgHover: "/images/socials/medium.svg",
    label: "Medium",
    url: "https://medium.com/firebirdchain",
    username: "@Firebirdchain",
  },
  {
    img: "/images/socials/reddit.svg",
    imgHover: "/images/socials/reddit.svg",
    label: "Reddit",
    url: "https://www.reddit.com/r/firebird/",
    // username: "r/firebird"
  },
  {
    img: "/images/socials/announcement.svg",
    imgHover: "/images/socials/announcement.svg",
    label: "Announcement Channel",
    url: "https://t.me/FirebirdANN",
    username: "@FirebirdANN",
  },
  {
    img: "/images/socials/telegram.svg",
    imgHover: "/images/socials/telegram.svg",
    label: "Telegram Group",
    url: "https://t.me/Firebird_en",
    username: "@Firebird_en",
  },
];
