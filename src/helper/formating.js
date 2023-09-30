import moment from "moment";

const df_format = "DD MMM YYYY";
const fdate = {
  today: moment().format(df_format),
  todayMonth: moment().month(),
  todayYear: moment().year(),
  format: (data, format = "DD MMM YYYY") => moment(data).format(format),
  formatTime: (data) => moment(data).utcOffset("+0800").format("DD MMM YYYY hh:mm a"),
  formatExcel: (data) => new Date(Math.round((data - 25569) * 86400 * 1000)),

  datediff: (d1, d2 = new Date()) => {
    let a = moment(d1);
    let b = moment(d2);

    let years = a.diff(b, "year");
    b.add(years, "years");

    let months = a.diff(b, "months");
    b.add(months, "months");

    let days = a.diff(b, "days");
    return `${Math.abs(years)} yr ${Math.abs(months)} months ${Math.abs(days)} days`;
  },

  yrdiff: (d1, d2 = new Date()) => Math.abs(moment(d1).diff(moment(d2), "year")),
  isToday: (data) => (moment(data).format(df_format) === moment().format(df_format) ? true : false),
  isThisMonth: (data) => (moment(data).month() === moment().month() ? true : false),
  isThisYear: (data) => (moment(data).year() === moment().year() ? true : false),
};

// ==================================================================================================================
const fcurr = {
  format: (data, prefix = "IDR") => prefix + formatter.format(data),
  formatcolon: (data, prefix = "IDR") => prefix + formatter2.format(data),
};

//with dot .
var formatter = new Intl.NumberFormat("de-DE", {
  undefined,
});

//with comma ,
var formatter2 = new Intl.NumberFormat("en-US", {
  undefined,
});

// ==================================================================================================================

export { fdate, fcurr };
