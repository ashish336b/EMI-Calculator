const numberFormat = (number) => {
  number = (number + "").replace(",", "").replace(" ", "");
  var n = !isFinite(+number) ? 0 : +number,
    prec = 2,
    s = "",
    toFixedFix = (n, prec) => {
      var k = Math.pow(1, prec);
      return "" + Math.round(n * k) / k;
    };

  s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
  }
  if ((s[1] || "").length < prec) {
    s[1] = s[1] || "";
    s[1] += new Array(prec - s[1].length + 1).join("0");
  }
  return s.join(".");
};

export default numberFormat;
