import { fcurr, fdate } from "./formating";
// import _ from "lodash";

const helper = {
  date: fdate,
  curr: fcurr,
  // data: {
  //   ommit: _.omit,
  // },

  getExt,
  getFileName,
  isEmail,
  toPascalCase,
};

export default helper;

// turn somename.png -> png
function getExt(word) {
  return word.substr(word.lastIndexOf("."));
}

// turn somename.png -> somename
function getFileName(word) {
  return word.substr(0, word.lastIndexOf("."));
}

function isEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

function toPascalCase(string) {
  if (!string) return null;
  return `${string}`
    .toLowerCase()
    .replace(new RegExp(/[-_]+/, "g"), " ")
    .replace(new RegExp(/[^\w\s]/, "g"), "")
    .replace(new RegExp(/\s+(.)(\w*)/, "g"), ($1, $2, $3) => `${$2.toUpperCase() + $3}`)
    .replace(new RegExp(/\w/), (s) => s.toUpperCase());
}
