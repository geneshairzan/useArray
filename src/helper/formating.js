const fdate = {
  today: (format = "DD MMM YYYY") => moment(new Date()).format(format),
  todayMonth: new Date().getFullMonth(),
  todayYear: new Date().getFullYear(),
  preformat: (data, format = "DD MMM YYYY") => moment(data, format),
  format: (data) => moment(data).format("DD MMM YYYY"),
  format_time: (data) => moment(data).format("DD MMM YYYY h.mma"),
  format_excel: (data) => new Date(Math.round((data - 25569) * 86400 * 1000)),

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

  yrdiff: (d1, d2 = new Date()) => {
    let a = moment(d1);
    let b = moment(d2);

    return Math.abs(a.diff(b, "year"));
  },

  isToday: (data) => {
    return new Date(data).toDateString() === new Date().toDateString() ? true : false;
  },

  isThisMonth: (data) => {
    return new Date(data).getMonth() === new Date().getMonth() ? true : false;
  },

  isThisYear: (data) => {
    return new Date(data).getYear() === new Date().getYear() ? true : false;
  },
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

export { fdate, fcurr, ftime };
