function extractZip(str) {
  //the regular expression below is for 5 digit US ZIP code, 5 digit US ZIP code + 4,
  //and 6 digit alphanumeric Canadian Postal Code
  var re = /\d{5}-\d{4}|\d{5}|[A-Z]\d[A-Z] \d[A-Z]\d/
  var input = str;
  var match = re.exec(input)
  if (match) {
return match[0];
  } else {
return "###"
  }
}

const zip = extractZip("101 3rd street, albama, New York City, New York, United States-12030")
console.log(zip);
