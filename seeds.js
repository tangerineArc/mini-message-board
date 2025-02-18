import formatDate from "./utils/format-date.js";
import getColor from "./utils/get-color.js";

export const messages = [
  {
    text: "Gentlemen, welcome to Fight Club. The first rule of Fight Club is: you do not talk about Fight Club. The second rule of Fight Club is: you DO NOT talk about Fight Club!",
    user: "Tyler Durden",
    color: getColor("Tyler Durden"),
    added: formatDate(new Date()),
  },
  {
    text: "I am your father.",
    user: "Darth Vader",
    color: getColor("Darth Vader"),
    added: formatDate(new Date()),
  },
  {
    text: "I used to think that my life was a tragedy, but now I realize it's a fucking comedy.",
    user: "Arthur Fleck",
    color: getColor("Arthur Fleck"),
    added: formatDate(new Date()),
  },
  {
    text: "Why so serious?",
    user: "The Joker",
    color: getColor("The Joker"),
    added: formatDate(new Date()),
  },
  {
    text: "Yeah, well, that's just, like, your opinion, man.",
    user: "The Dude",
    color: getColor("The Dude"),
    added: formatDate(new Date()),
  },
  {
    text: "So you're telling me there's a chance?",
    user: "Lloyd Christmas",
    color: getColor("Lloyd Christmas"),
    added: formatDate(new Date()),
  },
  {
    text: "You can't handle the truth!",
    user: "Colonel Nathan R. Jessup",
    color: getColor("Colonel Nathan R. Jessup"),
    added: formatDate(new Date()),
  },
];
