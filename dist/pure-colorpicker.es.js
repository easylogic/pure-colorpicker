var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var index$1 = "";
function format(obj, type, defaultColor = "rgba(0, 0, 0, 0)") {
  if (Array.isArray(obj)) {
    obj = { r: obj[0], g: obj[1], b: obj[2], a: obj[3] };
  }
  if (type == "hex") {
    return hex(obj);
  } else if (type == "rgb") {
    return rgb(obj, defaultColor);
  } else if (type == "hsl") {
    return hsl(obj);
  }
  return obj;
}
function hex(obj) {
  if (Array.isArray(obj)) {
    obj = { r: obj[0], g: obj[1], b: obj[2], a: obj[3] };
  }
  var r = obj.r.toString(16);
  if (obj.r < 16)
    r = "0" + r;
  var g = obj.g.toString(16);
  if (obj.g < 16)
    g = "0" + g;
  var b = obj.b.toString(16);
  if (obj.b < 16)
    b = "0" + b;
  var alphaValue = "";
  if (obj.a < 1) {
    var alpha = Math.floor(obj.a * 255);
    var alphaValue = alpha.toString(16);
    if (alpha < 16)
      alphaValue = "0" + alphaValue;
  }
  return `#${r}${g}${b}${alphaValue}`;
}
function rgb(obj, defaultColor = "rgba(0, 0, 0, 0)") {
  if (Array.isArray(obj)) {
    obj = { r: obj[0], g: obj[1], b: obj[2], a: obj[3] };
  }
  if (typeof obj == "undefined") {
    return void 0;
  }
  if (obj.a == 1 || typeof obj.a == "undefined") {
    if (isNaN(obj.r)) {
      return defaultColor;
    }
    return `rgb(${obj.r},${obj.g},${obj.b})`;
  } else {
    return `rgba(${obj.r},${obj.g},${obj.b},${obj.a})`;
  }
}
function hsl(obj) {
  if (Array.isArray(obj)) {
    obj = { r: obj[0], g: obj[1], b: obj[2], a: obj[3] };
  }
  if (obj.a == 1 || typeof obj.a == "undefined") {
    return `hsl(${obj.h},${obj.s}%,${obj.l}%)`;
  } else {
    return `hsla(${obj.h},${obj.s}%,${obj.l}%,${obj.a})`;
  }
}
var formatter = {
  format,
  rgb,
  hsl,
  hex
};
function round(n, k) {
  k = typeof k == "undefined" ? 1 : k;
  return Math.round(n * k) / k;
}
function degreeToRadian(angle) {
  return angle * Math.PI / 180;
}
function radianToDegree(radian2) {
  var angle = radian2 * 180 / Math.PI;
  if (angle < 0) {
    angle = 360 + angle;
  }
  return angle;
}
function getXInCircle(angle, radius, centerX = 0) {
  return centerX + radius * Math.cos(degreeToRadian(angle));
}
function getYInCircle(angle, radius, centerY = 0) {
  return centerY + radius * Math.sin(degreeToRadian(angle));
}
function getXYInCircle(angle, radius, centerX = 0, centerY = 0) {
  return {
    x: getXInCircle(angle, radius, centerX),
    y: getYInCircle(angle, radius, centerY)
  };
}
function caculateAngle(rx, ry) {
  return radianToDegree(Math.atan2(ry, rx));
}
var math = {
  round,
  radianToDegree,
  degreeToRadian,
  getXInCircle,
  getYInCircle,
  caculateAngle
};
const color_names = { aliceblue: "rgb(240, 248, 255)", antiquewhite: "rgb(250, 235, 215)", aqua: "rgb(0, 255, 255)", aquamarine: "rgb(127, 255, 212)", azure: "rgb(240, 255, 255)", beige: "rgb(245, 245, 220)", bisque: "rgb(255, 228, 196)", black: "rgb(0, 0, 0)", blanchedalmond: "rgb(255, 235, 205)", blue: "rgb(0, 0, 255)", blueviolet: "rgb(138, 43, 226)", brown: "rgb(165, 42, 42)", burlywood: "rgb(222, 184, 135)", cadetblue: "rgb(95, 158, 160)", chartreuse: "rgb(127, 255, 0)", chocolate: "rgb(210, 105, 30)", coral: "rgb(255, 127, 80)", cornflowerblue: "rgb(100, 149, 237)", cornsilk: "rgb(255, 248, 220)", crimson: "rgb(237, 20, 61)", cyan: "rgb(0, 255, 255)", darkblue: "rgb(0, 0, 139)", darkcyan: "rgb(0, 139, 139)", darkgoldenrod: "rgb(184, 134, 11)", darkgray: "rgb(169, 169, 169)", darkgrey: "rgb(169, 169, 169)", darkgreen: "rgb(0, 100, 0)", darkkhaki: "rgb(189, 183, 107)", darkmagenta: "rgb(139, 0, 139)", darkolivegreen: "rgb(85, 107, 47)", darkorange: "rgb(255, 140, 0)", darkorchid: "rgb(153, 50, 204)", darkred: "rgb(139, 0, 0)", darksalmon: "rgb(233, 150, 122)", darkseagreen: "rgb(143, 188, 143)", darkslateblue: "rgb(72, 61, 139)", darkslategray: "rgb(47, 79, 79)", darkslategrey: "rgb(47, 79, 79)", darkturquoise: "rgb(0, 206, 209)", darkviolet: "rgb(148, 0, 211)", deeppink: "rgb(255, 20, 147)", deepskyblue: "rgb(0, 191, 255)", dimgray: "rgb(105, 105, 105)", dimgrey: "rgb(105, 105, 105)", dodgerblue: "rgb(30, 144, 255)", firebrick: "rgb(178, 34, 34)", floralwhite: "rgb(255, 250, 240)", forestgreen: "rgb(34, 139, 34)", fuchsia: "rgb(255, 0, 255)", gainsboro: "rgb(220, 220, 220)", ghostwhite: "rgb(248, 248, 255)", gold: "rgb(255, 215, 0)", goldenrod: "rgb(218, 165, 32)", gray: "rgb(128, 128, 128)", grey: "rgb(128, 128, 128)", green: "rgb(0, 128, 0)", greenyellow: "rgb(173, 255, 47)", honeydew: "rgb(240, 255, 240)", hotpink: "rgb(255, 105, 180)", indianred: "rgb(205, 92, 92)", indigo: "rgb(75, 0, 130)", ivory: "rgb(255, 255, 240)", khaki: "rgb(240, 230, 140)", lavender: "rgb(230, 230, 250)", lavenderblush: "rgb(255, 240, 245)", lawngreen: "rgb(124, 252, 0)", lemonchiffon: "rgb(255, 250, 205)", lightblue: "rgb(173, 216, 230)", lightcoral: "rgb(240, 128, 128)", lightcyan: "rgb(224, 255, 255)", lightgoldenrodyellow: "rgb(250, 250, 210)", lightgreen: "rgb(144, 238, 144)", lightgray: "rgb(211, 211, 211)", lightgrey: "rgb(211, 211, 211)", lightpink: "rgb(255, 182, 193)", lightsalmon: "rgb(255, 160, 122)", lightseagreen: "rgb(32, 178, 170)", lightskyblue: "rgb(135, 206, 250)", lightslategray: "rgb(119, 136, 153)", lightslategrey: "rgb(119, 136, 153)", lightsteelblue: "rgb(176, 196, 222)", lightyellow: "rgb(255, 255, 224)", lime: "rgb(0, 255, 0)", limegreen: "rgb(50, 205, 50)", linen: "rgb(250, 240, 230)", magenta: "rgb(255, 0, 255)", maroon: "rgb(128, 0, 0)", mediumaquamarine: "rgb(102, 205, 170)", mediumblue: "rgb(0, 0, 205)", mediumorchid: "rgb(186, 85, 211)", mediumpurple: "rgb(147, 112, 219)", mediumseagreen: "rgb(60, 179, 113)", mediumslateblue: "rgb(123, 104, 238)", mediumspringgreen: "rgb(0, 250, 154)", mediumturquoise: "rgb(72, 209, 204)", mediumvioletred: "rgb(199, 21, 133)", midnightblue: "rgb(25, 25, 112)", mintcream: "rgb(245, 255, 250)", mistyrose: "rgb(255, 228, 225)", moccasin: "rgb(255, 228, 181)", navajowhite: "rgb(255, 222, 173)", navy: "rgb(0, 0, 128)", oldlace: "rgb(253, 245, 230)", olive: "rgb(128, 128, 0)", olivedrab: "rgb(107, 142, 35)", orange: "rgb(255, 165, 0)", orangered: "rgb(255, 69, 0)", orchid: "rgb(218, 112, 214)", palegoldenrod: "rgb(238, 232, 170)", palegreen: "rgb(152, 251, 152)", paleturquoise: "rgb(175, 238, 238)", palevioletred: "rgb(219, 112, 147)", papayawhip: "rgb(255, 239, 213)", peachpuff: "rgb(255, 218, 185)", peru: "rgb(205, 133, 63)", pink: "rgb(255, 192, 203)", plum: "rgb(221, 160, 221)", powderblue: "rgb(176, 224, 230)", purple: "rgb(128, 0, 128)", rebeccapurple: "rgb(102, 51, 153)", red: "rgb(255, 0, 0)", rosybrown: "rgb(188, 143, 143)", royalblue: "rgb(65, 105, 225)", saddlebrown: "rgb(139, 69, 19)", salmon: "rgb(250, 128, 114)", sandybrown: "rgb(244, 164, 96)", seagreen: "rgb(46, 139, 87)", seashell: "rgb(255, 245, 238)", sienna: "rgb(160, 82, 45)", silver: "rgb(192, 192, 192)", skyblue: "rgb(135, 206, 235)", slateblue: "rgb(106, 90, 205)", slategray: "rgb(112, 128, 144)", slategrey: "rgb(112, 128, 144)", snow: "rgb(255, 250, 250)", springgreen: "rgb(0, 255, 127)", steelblue: "rgb(70, 130, 180)", tan: "rgb(210, 180, 140)", teal: "rgb(0, 128, 128)", thistle: "rgb(216, 191, 216)", tomato: "rgb(255, 99, 71)", turquoise: "rgb(64, 224, 208)", violet: "rgb(238, 130, 238)", wheat: "rgb(245, 222, 179)", white: "rgb(255, 255, 255)", whitesmoke: "rgb(245, 245, 245)", yellow: "rgb(255, 255, 0)", yellowgreen: "rgb(154, 205, 50)", transparent: "rgba(0, 0, 0, 0)" };
function isColorName(name) {
  return !!color_names[name];
}
function getColorByName(name) {
  return color_names[name];
}
var ColorNames = {
  isColorName,
  getColorByName
};
function HUEtoRGB(p, q, t) {
  if (t < 0)
    t += 1;
  if (t > 1)
    t -= 1;
  if (t < 1 / 6)
    return p + (q - p) * 6 * t;
  if (t < 1 / 2)
    return q;
  if (t < 2 / 3)
    return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}
function HSLtoHSV(h, s, l) {
  if (arguments.length == 1) {
    var { h, s, l } = arguments[0];
  }
  const rgb2 = HSLtoRGB(h, s, l);
  return RGBtoHSV(rgb2.r, rgb2.g, rgb2.b);
}
function HSLtoRGB(h, s, l) {
  if (arguments.length == 1) {
    var { h, s, l } = arguments[0];
  }
  var r, g, b;
  h /= 360;
  s /= 100;
  l /= 100;
  if (s == 0) {
    r = g = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = HUEtoRGB(p, q, h + 1 / 3);
    g = HUEtoRGB(p, q, h);
    b = HUEtoRGB(p, q, h - 1 / 3);
  }
  return { r: round(r * 255), g: round(g * 255), b: round(b * 255) };
}
var fromHSL = {
  HUEtoRGB,
  HSLtoHSV,
  HSLtoRGB
};
const color_regexp = /(#(?:[\da-f]{3}){1,2}|#(?:[\da-f]{8})|rgb\((?:\s*\d{1,3},\s*){2}\d{1,3}\s*\)|rgba\((?:\s*\d{1,3},\s*){3}\d*\.?\d+\s*\)|hsl\(\s*\d{1,3}(?:,\s*\d{1,3}%){2}\s*\)|hsla\(\s*\d{1,3}(?:,\s*\d{1,3}%){2},\s*\d*\.?\d+\s*\)|([\w_\-]+))/gi;
const color_split = ",";
function matches$1(str) {
  const matches2 = str.match(color_regexp);
  let result = [];
  if (!matches2) {
    return result;
  }
  for (var i = 0, len = matches2.length; i < len; i++) {
    if (matches2[i].indexOf("#") > -1 || matches2[i].indexOf("rgb") > -1 || matches2[i].indexOf("hsl") > -1) {
      result.push({ color: matches2[i] });
    } else {
      var nameColor = ColorNames.getColorByName(matches2[i]);
      if (nameColor) {
        result.push({ color: matches2[i], nameColor });
      }
    }
  }
  var pos = { next: 0 };
  result.forEach((item) => {
    const startIndex = str.indexOf(item.color, pos.next);
    item.startIndex = startIndex;
    item.endIndex = startIndex + item.color.length;
    pos.next = item.endIndex;
  });
  return result;
}
function convertMatches(str) {
  const m = matches$1(str);
  m.forEach((it, index2) => {
    str = str.replace(it.color, "@" + index2);
  });
  return { str, matches: m };
}
function convertMatchesArray(str, splitStr = ",") {
  const ret = convertMatches(str);
  return ret.str.split(splitStr).map((it, index2) => {
    it = trim(it);
    if (ret.matches[index2]) {
      it = it.replace("@" + index2, ret.matches[index2].color);
    }
    return it;
  });
}
function reverseMatches(str, matches2) {
  matches2.forEach((it, index2) => {
    str = str.replace("@" + index2, it.color);
  });
  return str;
}
function trim(str) {
  return str.replace(/^\s+|\s+$/g, "");
}
function parse(str) {
  if (typeof str == "string") {
    if (ColorNames.isColorName(str)) {
      str = ColorNames.getColorByName(str);
    }
    if (str.indexOf("rgb(") > -1) {
      var arr = str.replace("rgb(", "").replace(")", "").split(",");
      for (var i = 0, len = arr.length; i < len; i++) {
        arr[i] = parseInt(trim(arr[i]), 10);
      }
      var obj = { type: "rgb", r: arr[0], g: arr[1], b: arr[2], a: 1 };
      obj = Object.assign(obj, RGBtoHSL(obj));
      return obj;
    } else if (str.indexOf("rgba(") > -1) {
      var arr = str.replace("rgba(", "").replace(")", "").split(",");
      for (var i = 0, len = arr.length; i < len; i++) {
        if (len - 1 == i) {
          arr[i] = parseFloat(trim(arr[i]));
        } else {
          arr[i] = parseInt(trim(arr[i]), 10);
        }
      }
      var obj = { type: "rgb", r: arr[0], g: arr[1], b: arr[2], a: arr[3] };
      obj = Object.assign(obj, RGBtoHSL(obj));
      return obj;
    } else if (str.indexOf("hsl(") > -1) {
      var arr = str.replace("hsl(", "").replace(")", "").split(",");
      for (var i = 0, len = arr.length; i < len; i++) {
        arr[i] = parseFloat(trim(arr[i]));
      }
      var obj = { type: "hsl", h: arr[0], s: arr[1], l: arr[2], a: 1 };
      obj = Object.assign(obj, HSLtoRGB(obj));
      return obj;
    } else if (str.indexOf("hsla(") > -1) {
      var arr = str.replace("hsla(", "").replace(")", "").split(",");
      for (var i = 0, len = arr.length; i < len; i++) {
        if (len - 1 == i) {
          arr[i] = parseFloat(trim(arr[i]));
        } else {
          arr[i] = parseInt(trim(arr[i]), 10);
        }
      }
      var obj = { type: "hsl", h: arr[0], s: arr[1], l: arr[2], a: arr[3] };
      obj = Object.assign(obj, HSLtoRGB(obj));
      return obj;
    } else if (str.indexOf("#") == 0) {
      str = str.replace("#", "");
      var arr = [];
      var a = 1;
      if (str.length == 3) {
        for (var i = 0, len = str.length; i < len; i++) {
          var char = str.substr(i, 1);
          arr.push(parseInt(char + char, 16));
        }
      } else if (str.length === 8) {
        for (var i = 0, len = str.length; i < len; i += 2) {
          arr.push(parseInt(str.substr(i, 2), 16));
        }
        a = arr.pop() / 255;
      } else {
        for (var i = 0, len = str.length; i < len; i += 2) {
          arr.push(parseInt(str.substr(i, 2), 16));
        }
      }
      var obj = { type: "hex", r: arr[0], g: arr[1], b: arr[2], a };
      obj = Object.assign(obj, RGBtoHSL(obj));
      return obj;
    }
  } else if (typeof str == "number") {
    if (0 <= str && str <= 16777215) {
      const r = (str & 16711680) >> 16;
      const g = (str & 65280) >> 8;
      const b = (str & 255) >> 0;
      var obj = { type: "hex", r, g, b, a: 1 };
      obj = Object.assign(obj, RGBtoHSL(obj));
      return obj;
    } else if (0 <= str && str <= 4294967295) {
      const r = (str & 4278190080) >> 24;
      const g = (str & 16711680) >> 16;
      const b = (str & 65280) >> 8;
      const a2 = (str & 255) / 255;
      var obj = { type: "hex", r, g, b, a: a2 };
      obj = Object.assign(obj, RGBtoHSL(obj));
      return obj;
    }
  }
  return str;
}
function parseGradient(colors) {
  if (typeof colors == "string") {
    colors = convertMatchesArray(colors);
  }
  colors = colors.map((it) => {
    if (typeof it == "string") {
      const ret = convertMatches(it);
      let arr = trim(ret.str).split(" ");
      if (arr[1]) {
        if (arr[1].includes("%")) {
          arr[1] = parseFloat(arr[1].replace(/%/, "")) / 100;
        } else {
          arr[1] = parseFloat(arr[1]);
        }
      } else {
        arr[1] = "*";
      }
      arr[0] = reverseMatches(arr[0], ret.matches);
      return arr;
    } else if (Array.isArray(it)) {
      if (!it[1]) {
        it[1] = "*";
      } else if (typeof it[1] == "string") {
        if (it[1].includes("%")) {
          it[1] = parseFloat(it[1].replace(/%/, "")) / 100;
        } else {
          it[1] = +it[1];
        }
      }
      return [...it];
    }
  });
  const count = colors.filter((it) => {
    return it[1] === "*";
  }).length;
  if (count > 0) {
    const sum = colors.filter((it) => {
      return it[1] != "*" && it[1] != 1;
    }).map((it) => it[1]).reduce((total, cur) => {
      return total + cur;
    }, 0);
    const dist = (1 - sum) / count;
    colors.forEach((it, index2) => {
      if (it[1] == "*" && index2 > 0) {
        if (colors.length - 1 == index2)
          ;
        else {
          it[1] = dist;
        }
      }
    });
  }
  return colors;
}
var parser = {
  matches: matches$1,
  convertMatches,
  convertMatchesArray,
  reverseMatches,
  parse,
  parseGradient,
  trim,
  color_regexp,
  color_split
};
function RGBtoHSV(r, g, b) {
  if (arguments.length == 1) {
    var { r, g, b } = arguments[0];
  }
  const R1 = r / 255;
  const G1 = g / 255;
  const B1 = b / 255;
  const MaxC = Math.max(R1, G1, B1);
  const MinC = Math.min(R1, G1, B1);
  const DeltaC = MaxC - MinC;
  var H = 0;
  if (DeltaC == 0) {
    H = 0;
  } else if (MaxC == R1) {
    H = 60 * ((G1 - B1) / DeltaC % 6);
  } else if (MaxC == G1) {
    H = 60 * ((B1 - R1) / DeltaC + 2);
  } else if (MaxC == B1) {
    H = 60 * ((R1 - G1) / DeltaC + 4);
  }
  if (H < 0) {
    H = 360 + H;
  }
  var S = 0;
  if (MaxC == 0)
    S = 0;
  else
    S = DeltaC / MaxC;
  var V = MaxC;
  return { h: H, s: S, v: V };
}
function RGBtoCMYK(r, g, b) {
  if (arguments.length == 1) {
    var { r, g, b } = arguments[0];
  }
  const R1 = r / 255;
  const G1 = g / 255;
  const B1 = b / 255;
  const K = 1 - Math.max(R1, G1, B1);
  const C = (1 - R1 - K) / (1 - K);
  const M = (1 - G1 - K) / (1 - K);
  const Y = (1 - B1 - K) / (1 - K);
  return { c: C, m: M, y: Y, k: K };
}
function RGBtoHSL(r, g, b) {
  if (arguments.length == 1) {
    var { r, g, b } = arguments[0];
  }
  r /= 255, g /= 255, b /= 255;
  var max2 = Math.max(r, g, b), min2 = Math.min(r, g, b);
  var h, s, l = (max2 + min2) / 2;
  if (max2 == min2) {
    h = s = 0;
  } else {
    var d = max2 - min2;
    s = l > 0.5 ? d / (2 - max2 - min2) : d / (max2 + min2);
    switch (max2) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return { h: round(h * 360), s: round(s * 100), l: round(l * 100) };
}
function c(r, g, b) {
  if (arguments.length == 1) {
    var { r, g, b } = arguments[0];
  }
  return gray((r + g + b) / 3 > 90 ? 0 : 255);
}
function gray(gray2) {
  return { r: gray2, g: gray2, b: gray2 };
}
function RGBtoSimpleGray(r, g, b) {
  if (arguments.length == 1) {
    var { r, g, b } = arguments[0];
  }
  return gray(Math.ceil((r + g + b) / 3));
}
function RGBtoGray(r, g, b) {
  if (arguments.length == 1) {
    var { r, g, b } = arguments[0];
  }
  return gray(RGBtoYCrCb(r, g, b).y);
}
function brightness$1(r, g, b) {
  return Math.ceil(r * 0.2126 + g * 0.7152 + b * 0.0722);
}
function RGBtoYCrCb(r, g, b) {
  if (arguments.length == 1) {
    var { r, g, b } = arguments[0];
  }
  const Y = brightness$1(r, g, b);
  const Cb = 0.564 * (b - Y);
  const Cr = 0.713 * (r - Y);
  return { y: Y, cr: Cr, cb: Cb };
}
function PivotRGB(n, point = 0.04045) {
  return (n > point ? Math.pow((n + 0.055) / 1.055, 2.4) : n / 12.92) * 100;
}
function RGBtoXYZ(r, g, b) {
  if (arguments.length == 1) {
    var { r, g, b } = arguments[0];
  }
  let R = r / 255;
  let G = g / 255;
  let B = b / 255;
  R = PivotRGB(R);
  G = PivotRGB(G);
  B = PivotRGB(B);
  const x = R * 0.4124 + G * 0.3576 + B * 0.1805;
  const y = R * 0.2126 + G * 0.7152 + B * 0.0722;
  const z = R * 0.0193 + G * 0.1192 + B * 0.9505;
  return { x, y, z };
}
function RGBtoLAB(r, g, b) {
  if (arguments.length == 1) {
    var { r, g, b } = arguments[0];
  }
  return XYZtoLAB(RGBtoXYZ(r, g, b));
}
var fromRGB = {
  RGBtoCMYK,
  RGBtoGray,
  RGBtoHSL,
  RGBtoHSV,
  RGBtoLAB,
  RGBtoSimpleGray,
  RGBtoXYZ,
  RGBtoYCrCb,
  c,
  brightness: brightness$1,
  gray
};
function CMYKtoRGB(c2, m, y, k) {
  if (arguments.length == 1) {
    var { c: c2, m, y, k } = arguments[0];
  }
  const R = 255 * (1 - c2) * (1 - k);
  const G = 255 * (1 - m) * (1 - k);
  const B = 255 * (1 - y) * (1 - k);
  return { r: R, g: G, b: B };
}
var fromCMYK = {
  CMYKtoRGB
};
function ReverseXyz(n) {
  return Math.pow(n, 3) > 8856e-6 ? Math.pow(n, 3) : (n - 16 / 116) / 7.787;
}
function ReverseRGB(n) {
  return n > 31308e-7 ? 1.055 * Math.pow(n, 1 / 2.4) - 0.055 : 12.92 * n;
}
function XYZtoRGB(x, y, z) {
  if (arguments.length == 1) {
    var { x, y, z } = arguments[0];
  }
  let X = x / 100;
  let Y = y / 100;
  let Z = z / 100;
  let R = X * 3.2406 + Y * -1.5372 + Z * -0.4986;
  let G = X * -0.9689 + Y * 1.8758 + Z * 0.0415;
  let B = X * 0.0557 + Y * -0.204 + Z * 1.057;
  R = ReverseRGB(R);
  G = ReverseRGB(G);
  B = ReverseRGB(B);
  const r = round(R * 255);
  const g = round(G * 255);
  const b = round(B * 255);
  return { r, g, b };
}
function LABtoXYZ(l, a, b) {
  if (arguments.length == 1) {
    var { l, a, b } = arguments[0];
  }
  let Y = (l + 16) / 116;
  let X = a / 500 + Y;
  let Z = Y - b / 200;
  Y = ReverseXyz(Y);
  X = ReverseXyz(X);
  Z = ReverseXyz(Z);
  const x = X * 95.047;
  const y = Y * 100;
  const z = Z * 108.883;
  return { x, y, z };
}
function LABtoRGB(l, a, b) {
  if (arguments.length == 1) {
    var { l, a, b } = arguments[0];
  }
  return XYZtoRGB(LABtoXYZ(l, a, b));
}
var fromLAB = {
  XYZtoRGB,
  LABtoRGB,
  LABtoXYZ
};
function HSVtoRGB(h, s, v) {
  if (arguments.length == 1) {
    var { h, s, v } = arguments[0];
  }
  var H = h;
  var S = s;
  var V = v;
  if (H >= 360) {
    H = 0;
  }
  const C = S * V;
  const X = C * (1 - Math.abs(H / 60 % 2 - 1));
  const m = V - C;
  let temp = [];
  if (0 <= H && H < 60) {
    temp = [C, X, 0];
  } else if (60 <= H && H < 120) {
    temp = [X, C, 0];
  } else if (120 <= H && H < 180) {
    temp = [0, C, X];
  } else if (180 <= H && H < 240) {
    temp = [0, X, C];
  } else if (240 <= H && H < 300) {
    temp = [X, 0, C];
  } else if (300 <= H && H < 360) {
    temp = [C, 0, X];
  }
  return {
    r: round((temp[0] + m) * 255),
    g: round((temp[1] + m) * 255),
    b: round((temp[2] + m) * 255)
  };
}
function HSVtoHSL(h, s, v) {
  if (arguments.length == 1) {
    var { h, s, v } = arguments[0];
  }
  const rgb2 = HSVtoRGB(h, s, v);
  return RGBtoHSL(rgb2.r, rgb2.g, rgb2.b);
}
var fromHSV = {
  HSVtoHSL,
  HSVtoRGB
};
function YCrCbtoRGB(y, cr, cb, bit) {
  if (arguments.length == 1) {
    var { y, cr, cb, bit } = arguments[0];
    bit = bit || 0;
  }
  const R = y + 1.402 * (cr - bit);
  const G = y - 0.344 * (cb - bit) - 0.714 * (cr - bit);
  const B = y + 1.772 * (cb - bit);
  return { r: Math.ceil(R), g: Math.ceil(G), b: Math.ceil(B) };
}
var fromYCrCb = {
  YCrCbtoRGB
};
function interpolateRGB(startColor, endColor, t = 0.5, exportFormat = "hex") {
  var obj = {
    r: round(startColor.r + (endColor.r - startColor.r) * t),
    g: round(startColor.g + (endColor.g - startColor.g) * t),
    b: round(startColor.b + (endColor.b - startColor.b) * t),
    a: round(startColor.a + (endColor.a - startColor.a) * t, 100)
  };
  return format(obj, obj.a < 1 ? "rgb" : exportFormat);
}
function scale$1(scale2, count = 5) {
  if (!scale2)
    return [];
  if (typeof scale2 === "string") {
    scale2 = convertMatchesArray(scale2);
  }
  scale2 = scale2 || [];
  var len = scale2.length;
  var colors = [];
  for (var i = 0; i < len - 1; i++) {
    for (var index2 = 0; index2 < count; index2++) {
      colors.push(blend(scale2[i], scale2[i + 1], index2 / count));
    }
  }
  return colors;
}
function blend(startColor, endColor, ratio = 0.5, format2 = "hex") {
  var s = parse(startColor);
  var e = parse(endColor);
  return interpolateRGB(s, e, ratio, format2);
}
function mix(startcolor, endColor, ratio = 0.5, format2 = "hex") {
  return blend(startcolor, endColor, ratio, format2);
}
function contrast$1(c2) {
  c2 = parse(c2);
  return (Math.round(c2.r * 299) + Math.round(c2.g * 587) + Math.round(c2.b * 114)) / 1e3;
}
function contrastColor(c2) {
  return contrast$1(c2) >= 128 ? "black" : "white";
}
function gradient$1(colors, count = 10) {
  colors = parseGradient(colors);
  let newColors = [];
  let maxCount = count - (colors.length - 1);
  let allCount = maxCount;
  for (var i = 1, len = colors.length; i < len; i++) {
    var startColor = colors[i - 1][0];
    var endColor = colors[i][0];
    var rate = i == 1 ? colors[i][1] : colors[i][1] - colors[i - 1][1];
    var colorCount = i == colors.length - 1 ? allCount : Math.floor(rate * maxCount);
    newColors = newColors.concat(scale$1([startColor, endColor], colorCount), [endColor]);
    allCount -= colorCount;
  }
  return newColors;
}
function scaleHSV(color, target = "h", count = 9, exportFormat = "rgb", min2 = 0, max2 = 1, dist = 100) {
  var colorObj = parse(color);
  var hsv = RGBtoHSV(colorObj);
  var unit = (max2 - min2) * dist / count;
  var results = [];
  for (var i = 1; i <= count; i++) {
    hsv[target] = Math.abs((dist - unit * i) / dist);
    results.push(format(HSVtoRGB(hsv), exportFormat));
  }
  return results;
}
function scaleH(color, count = 9, exportFormat = "rgb", min2 = 0, max2 = 360) {
  return scaleHSV(color, "h", count, exportFormat, min2, max2, 1);
}
function scaleS(color, count = 9, exportFormat = "rgb", min2 = 0, max2 = 1) {
  return scaleHSV(color, "s", count, exportFormat, min2, max2, 100);
}
function scaleV(color, count = 9, exportFormat = "rgb", min2 = 0, max2 = 1) {
  return scaleHSV(color, "v", count, exportFormat, min2, max2, 100);
}
scale$1.parula = function(count) {
  return scale$1(["#352a87", "#0f5cdd", "#00b5a6", "#ffc337", "#fdff00"], count);
};
scale$1.jet = function(count) {
  return scale$1(["#00008f", "#0020ff", "#00ffff", "#51ff77", "#fdff00", "#ff0000", "#800000"], count);
};
scale$1.hsv = function(count) {
  return scale$1(["#ff0000", "#ffff00", "#00ff00", "#00ffff", "#0000ff", "#ff00ff", "#ff0000"], count);
};
scale$1.hot = function(count) {
  return scale$1(["#0b0000", "#ff0000", "#ffff00", "#ffffff"], count);
};
scale$1.pink = function(count) {
  return scale$1(["#1e0000", "#bd7b7b", "#e7e5b2", "#ffffff"], count);
};
scale$1.bone = function(count) {
  return scale$1(["#000000", "#4a4a68", "#a6c6c6", "#ffffff"], count);
};
scale$1.copper = function(count) {
  return scale$1(["#000000", "#3d2618", "#9d623e", "#ffa167", "#ffc77f"], count);
};
var mixin = {
  interpolateRGB,
  blend,
  mix,
  scale: scale$1,
  contrast: contrast$1,
  contrastColor,
  gradient: gradient$1,
  scaleHSV,
  scaleH,
  scaleS,
  scaleV
};
function array_equals(v1, v2) {
  if (v1.length !== v2.length)
    return false;
  for (var i = 0, len = v1.length; i < len; ++i) {
    if (v1[i] !== v2[i])
      return false;
  }
  return true;
}
function euclidean(v1, v2) {
  var total = 0;
  for (var i = 0, len = v1.length; i < len; i++) {
    total += Math.pow(v2[i] - v1[i], 2);
  }
  return Math.sqrt(total);
}
function manhattan(v1, v2) {
  var total = 0;
  for (var i = 0, len = v1.length; i < len; i++) {
    total += Math.abs(v2[i] - v1[i]);
  }
  return total;
}
function max(v1, v2) {
  var max2 = 0;
  for (var i = 0, len = v1.length; i < len; i++) {
    max2 = Math.max(max2, Math.abs(v2[i] - v1[i]));
  }
  return max2;
}
const distances = {
  euclidean,
  manhattan,
  max
};
const create_random_number = {
  linear: function(num, count) {
    var centeroids = [];
    var start = Math.round(Math.random() * num);
    var dist = Math.floor(num / count);
    do {
      centeroids.push(start);
      start = (start + dist) % num;
    } while (centeroids.length < count);
    return centeroids;
  },
  shuffle: function(num, count) {
    var centeroids = [];
    while (centeroids.length < count) {
      var index2 = Math.round(Math.random() * num);
      if (centeroids.indexOf(index2) == -1) {
        centeroids.push(index2);
      }
    }
    return centeroids;
  }
};
function randomCentroids(points, k, method = "linear") {
  var centeroids = create_random_number[method](points.length, k);
  return centeroids.map((i) => {
    return points[i];
  });
}
function closestCenteroid(point, centeroids, distance) {
  var min2 = Infinity, kIndex = 0;
  centeroids.forEach((center, i) => {
    var dist = distance(point, center);
    if (dist < min2) {
      min2 = dist;
      kIndex = i;
    }
  });
  return kIndex;
}
function getCenteroid(assigned) {
  if (!assigned.length)
    return [];
  let centeroid = new Array(assigned[0].length);
  for (var i = 0, len = centeroid.length; i < len; i++) {
    centeroid[i] = 0;
  }
  for (var index2 = 0, len = assigned.length; index2 < len; index2++) {
    var it = assigned[index2];
    var last = index2 + 1;
    for (var j = 0, jLen = it.length; j < jLen; j++) {
      centeroid[j] += (it[j] - centeroid[j]) / last;
    }
  }
  centeroid = centeroid.map((it2) => {
    return Math.floor(it2);
  });
  return centeroid;
}
function unique_array(arrays) {
  return arrays;
}
function splitK(k, points, centeroids, distance) {
  let assignment = new Array(k);
  for (var i = 0; i < k; i++) {
    assignment[i] = [];
  }
  for (var idx = 0, pointLength = points.length; idx < pointLength; idx++) {
    var point = points[idx];
    var index2 = closestCenteroid(point, centeroids, distance);
    assignment[index2].push(point);
  }
  return assignment;
}
function setNewCenteroid(k, points, assignment, centeroids, movement, randomFunction) {
  for (var i = 0; i < k; i++) {
    let assigned = assignment[i];
    const centeroid = centeroids[i];
    let newCenteroid = new Array(centeroid.length);
    if (assigned.length > 0) {
      newCenteroid = getCenteroid(assigned);
    } else {
      var idx = Math.floor(randomFunction() * points.length);
      newCenteroid = points[idx];
    }
    if (array_equals(newCenteroid, centeroid)) {
      movement = false;
    } else {
      movement = true;
    }
    centeroids[i] = newCenteroid;
  }
  return movement;
}
function kmeans(points, k, distanceFunction, period = 10, initialRandom = "linear") {
  points = unique_array(points);
  k = k || Math.max(2, Math.ceil(Math.sqrt(points.length / 2)));
  let distance = distanceFunction || "euclidean";
  if (typeof distance == "string") {
    distance = distances[distance];
  }
  var rng_seed = 0;
  var random = function() {
    rng_seed = (rng_seed * 9301 + 49297) % 233280;
    return rng_seed / 233280;
  };
  let centeroids = randomCentroids(points, k, initialRandom);
  let movement = true;
  let iterations = 0;
  while (movement) {
    const assignment = splitK(k, points, centeroids, distance);
    movement = setNewCenteroid(k, points, assignment, centeroids, false, random);
    iterations++;
    if (iterations % period == 0) {
      break;
    }
  }
  return centeroids;
}
function each$1(len, callback) {
  for (var i = 0; i < len; i += 4) {
    callback(i);
  }
}
function pack$1(bitmap, callback) {
  each$1(bitmap.pixels.length, (i) => {
    callback(bitmap.pixels, i);
  });
}
const Canvas = {
  create(width, height) {
    var canvas = document.createElement("canvas");
    canvas.width = width || 0;
    canvas.height = height || 0;
    return canvas;
  },
  drawPixels(bitmap) {
    var canvas = this.create(bitmap.width, bitmap.height);
    var context = canvas.getContext("2d");
    var imagedata = context.getImageData(0, 0, canvas.width, canvas.height);
    imagedata.data.set(bitmap.pixels);
    context.putImageData(imagedata, 0, 0);
    return canvas;
  },
  createHistogram(width, height, histogram2, callback, opt = { black: true, red: false, green: false, blue: false }) {
    var canvas = this.create(width, height);
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, width, height);
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    context.globalAlpha = 0.7;
    var omit = { black: false };
    if (opt.black) {
      omit.black = false;
    } else {
      omit.black = true;
    }
    if (opt.red) {
      omit.red = false;
    } else {
      omit.red = true;
    }
    if (opt.green) {
      omit.green = false;
    } else {
      omit.green = true;
    }
    if (opt.blue) {
      omit.blue = false;
    } else {
      omit.blue = true;
    }
    Object.keys(histogram2).forEach((color) => {
      if (!omit[color]) {
        var array = histogram2[color];
        const ymax = Math.max.apply(Math, array);
        const unitWith = width / array.length;
        context.fillStyle = color;
        array.forEach((it, index2) => {
          const currentHeight = height * (it / ymax);
          const x = index2 * unitWith;
          context.fillRect(x, height - currentHeight, unitWith, currentHeight);
        });
      }
    });
    if (typeof callback == "function")
      callback(canvas);
  },
  getHistogram(bitmap) {
    let black = new Array(256);
    let red = new Array(256);
    let green = new Array(256);
    let blue = new Array(256);
    for (var i = 0; i < 256; i++) {
      black[i] = 0;
      red[i] = 0;
      green[i] = 0;
      blue[i] = 0;
    }
    pack$1(bitmap, (pixels, i2) => {
      const grayIndex = Math.round(Color$1.brightness(pixels[i2], pixels[i2 + 1], pixels[i2 + 2]));
      black[grayIndex]++;
      red[pixels[i2]]++;
      green[pixels[i2 + 1]]++;
      blue[pixels[i2 + 2]]++;
    });
    return { black, red, green, blue };
  },
  getBitmap(bitmap, area) {
    var canvas = this.drawPixels(bitmap);
    var context = canvas.getContext("2d");
    var pixels = context.getImageData(area.x || 0, area.y || 0, area.width || canvas.width, area.height || canvas.height).data;
    return { pixels, width: area.width, height: area.height };
  },
  putBitmap(bitmap, subBitmap, area) {
    var canvas = this.drawPixels(bitmap);
    var subCanvas = this.drawPixels(subBitmap);
    var context = canvas.getContext("2d");
    context.drawImage(subCanvas, area.x, area.y);
    bitmap.pixels = context.getImageData(0, 0, bitmap.width, bitmap.height).data;
    return bitmap;
  }
};
class ImageLoader {
  constructor(url, opt = {}) {
    this.isLoaded = false;
    this.imageUrl = url;
    this.opt = opt;
    this.initialize();
  }
  initialize() {
    this.canvas = this.createCanvas();
    this.context = this.canvas.getContext("2d");
  }
  createCanvas() {
    return document.createElement("canvas");
  }
  load(callback) {
    this.loadImage(callback);
  }
  loadImage(callback) {
    var ctx = this.context;
    this.newImage = new Image();
    const img = this.newImage;
    img.onload = () => {
      var ratio = img.height / img.width;
      if (this.opt.canvasWidth && this.opt.canvasHeight) {
        this.canvas.width = this.opt.canvasWidth;
        this.canvas.height = this.opt.canvasHeight;
      } else {
        this.canvas.width = this.opt.maxWidth ? this.opt.maxWidth : img.width;
        this.canvas.height = this.canvas.width * ratio;
      }
      ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, this.canvas.width, this.canvas.height);
      this.isLoaded = true;
      callback && callback();
    };
    this.getImageUrl(function(url) {
      img.src = url;
    });
  }
  load(callback) {
    this.newImage = new Image();
    const img = this.newImage;
    img.onload = () => {
      this.isLoaded = true;
      callback && callback();
    };
    this.getImageUrl(function(url) {
      img.src = url;
    });
  }
  getImageUrl(callback) {
    if (typeof this.imageUrl == "string") {
      return callback(this.imageUrl);
    } else if (this.imageUrl instanceof Blob) {
      var reader = new FileReader();
      reader.onload = function(ev) {
        callback(ev.target.result);
      };
      reader.readAsDataURL(this.imageUrl);
    }
  }
  getRGBA(r, g, b, a) {
    return [r, g, b, a];
  }
  toArray(filter2, callback, opt = {}) {
    var imagedata = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
    var width = imagedata.width;
    var height = imagedata.height;
    var pixels = new Uint8ClampedArray(imagedata.data);
    let bitmap = { pixels, width, height };
    if (!filter2) {
      filter2 = function() {
        return (bitmap2, done) => {
          done(bitmap2);
        };
      }();
    }
    filter2(bitmap, function(newBitmap) {
      var tmpCanvas = Canvas.drawPixels(newBitmap);
      if (opt.returnTo == "canvas") {
        callback(tmpCanvas);
      } else {
        callback(tmpCanvas.toDataURL(opt.outputFormat || "image/png"));
      }
    }, opt);
  }
  toHistogram(opt) {
    var imagedata = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
    var width = imagedata.width;
    var height = imagedata.height;
    var pixels = new Uint8ClampedArray(imagedata.data);
    let bitmap = { pixels, width, height };
    return Canvas.getHistogram(bitmap);
  }
  toRGB() {
    var imagedata = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
    var rgba = imagedata.data;
    var results = [];
    for (var i = 0, len = rgba.length; i < len; i += 4) {
      results[results.length] = [rgba[i + 0], rgba[i + 1], rgba[i + 2], rgba[i + 3]];
    }
    return results;
  }
}
function palette(colors, k = 6, exportFormat = "hex") {
  if (colors.length > k) {
    colors = kmeans(colors, k);
  }
  return colors.map((c2) => {
    return format(c2, exportFormat);
  });
}
function ImageToRGB(url, callbackOrOption = {}, callback) {
  if (!callback) {
    var img = new ImageLoader(url);
    img.loadImage(() => {
      if (typeof callbackOrOption == "function") {
        callbackOrOption(img.toRGB());
      }
    });
  } else if (callback) {
    var img = new ImageLoader(url, callbackOrOption);
    img.loadImage(() => {
      if (typeof callback == "function") {
        callback(img.toRGB());
      }
    });
  }
}
function ImageToCanvas(url, filter2, callback, opt = { frameTimer: "full" }) {
  ImageToURL(url, filter2, callback, Object.assign({
    returnTo: "canvas"
  }, opt));
}
function ImageToURL(url, filter2, callback, opt = { frameTimer: "full" }) {
  var img = new ImageLoader(url);
  img.loadImage(() => {
    img.toArray(filter2, function(datauri) {
      if (typeof callback == "function") {
        callback(datauri);
      }
    }, opt);
  });
}
function histogram$1(url, callback, opt = {}) {
  var img = new ImageLoader(url);
  img.loadImage(() => {
    if (typeof callback == "function") {
      callback(img.toHistogram(opt));
    }
  });
}
function histogramToPoints(points, tension = 0.2) {
  var controlPoints = [];
  for (let i = 0; i < points.length; i++) {
    var p = points[i];
    if (i == 0) {
      controlPoints[i] = [];
      continue;
    }
    if (i == points.length - 1) {
      controlPoints[i] = [];
      continue;
    }
    var prevPoint = points[i - 1];
    var nextPoint = points[i + 1];
    (nextPoint[1] - prevPoint[1]) / (nextPoint[0] - prevPoint[0]);
    var newControlPoint = [
      prevPoint[0] + (nextPoint[0] - prevPoint[0]) * tension,
      prevPoint[1] + (nextPoint[1] - prevPoint[1]) * tension
    ];
    var controlPoint = [
      [...prevPoint],
      [...newControlPoint]
    ];
    var P = Math.sqrt(Math.pow(p[0] - prevPoint[0], 2) + Math.pow(p[1] - prevPoint[1], 2));
    var N = Math.sqrt(Math.pow(nextPoint[0] - p[0], 2) + Math.pow(nextPoint[1] - p[1], 2));
    var rate = P / N;
    var dx = controlPoint[0][0] + (controlPoint[1][0] - controlPoint[0][0]) * rate;
    var dy = controlPoint[0][1] + (controlPoint[1][1] - controlPoint[0][1]) * rate;
    controlPoint[0][0] += p[0] - dx;
    controlPoint[0][1] += p[1] - dy;
    controlPoint[1][0] += p[0] - dx;
    controlPoint[1][1] += p[1] - dy;
    controlPoints[i] = controlPoint;
  }
  return controlPoints;
}
function ImageToHistogram(url, callback, opt = { width: 200, height: 100 }) {
  var img = new ImageLoader(url);
  img.loadImage(() => {
    Canvas.createHistogram(opt.width || 200, opt.height || 100, img.toHistogram(opt), function(canvas) {
      if (typeof callback == "function")
        callback(canvas.toDataURL("image/png"));
    }, opt);
  });
}
var image$1 = {
  palette,
  ImageToCanvas,
  ImageToHistogram,
  ImageToRGB,
  ImageToURL,
  histogram: histogram$1,
  histogramToPoints
};
var Color$1 = __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, formatter), math), mixin), parser), fromYCrCb), fromRGB), fromCMYK), fromHSV), fromHSL), fromLAB), image$1);
function isUndefined$1(value) {
  return typeof value == "undefined" || value === null;
}
function isNotUndefined(value) {
  return isUndefined$1(value) === false;
}
function isString(value) {
  return typeof value == "string";
}
function isFunction(value) {
  return typeof value == "function";
}
function isNumber(value) {
  return typeof value == "number";
}
const hue_color = [
  { rgb: "#ff0000", start: 0 },
  { rgb: "#ffff00", start: 0.17 },
  { rgb: "#00ff00", start: 0.33 },
  { rgb: "#00ffff", start: 0.5 },
  { rgb: "#0000ff", start: 0.67 },
  { rgb: "#ff00ff", start: 0.83 },
  { rgb: "#ff0000", start: 1 }
];
function checkHueColor(p) {
  var startColor, endColor;
  for (var i = 0; i < hue_color.length; i++) {
    if (hue_color[i].start >= p) {
      startColor = hue_color[i - 1];
      endColor = hue_color[i];
      break;
    }
  }
  if (startColor && endColor) {
    return Color$1.mix(startColor.rgb, endColor.rgb, (p - startColor.start) / (endColor.start - startColor.start));
  }
  return hue_color[0].rgb;
}
function getHueScale(p, minScale = 0.1, maxScale) {
  const start = isUndefined$1(maxScale) ? p - minScale : minScale;
  const end = isUndefined$1(maxScale) ? p + scale : maxScale;
  const list = [];
  for (var i = 0; i < hue_color.length; i++) {
    const currentHue = hue_color[i];
    if (start <= currentHue.start && currentHue.start < end) {
      list.push({ rgb: currentHue.rgb, start: currentHue.start });
    } else if (hue_color[i + 1] && currentHue.start < start && start < hue_color[i + 1].start) {
      list.push({ rgb: checkHueColor(start), start });
    } else if (hue_color[i - 1] && hue_color[i - 1].start < end && end < currentHue.start) {
      list.push({ rgb: checkHueColor(end), start: end });
    } else if (currentHue.start < start || currentHue.start > end)
      ;
    else {
      list.push({ rgb: currentHue.rgb, start: currentHue.start });
    }
  }
  return list;
}
function initHueColors() {
  for (var i = 0, len = hue_color.length; i < len; i++) {
    var hue2 = hue_color[i];
    var obj = Color$1.parse(hue2.rgb);
    hue2.r = obj.r;
    hue2.g = obj.g;
    hue2.b = obj.b;
  }
}
initHueColors();
var HueColor = {
  colors: hue_color,
  checkHueColor,
  getHueScale
};
const CONSTANT = {
  identity() {
    return [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ];
  },
  stretching(k) {
    return [
      k,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ];
  },
  squeezing(k) {
    return [
      k,
      0,
      0,
      0,
      1 / k,
      0,
      0,
      0,
      1
    ];
  },
  scale(sx = 1, sy = 1) {
    sx = sx || sx === 0 ? sx : 1;
    sy = sy || sy === 0 ? sy : 1;
    return [
      sx,
      0,
      0,
      0,
      sy,
      0,
      0,
      0,
      1
    ];
  },
  scaleX(sx) {
    return this.scale(sx);
  },
  scaleY(sy) {
    return this.scale(1, sy);
  },
  translate(tx, ty) {
    return [
      1,
      0,
      tx,
      0,
      1,
      ty,
      0,
      0,
      1
    ];
  },
  rotate(angle) {
    const r = this.radian(angle);
    return [
      Math.cos(r),
      -Math.sin(r),
      0,
      Math.sin(r),
      Math.cos(r),
      0,
      0,
      0,
      1
    ];
  },
  rotate90() {
    return [
      0,
      -1,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ];
  },
  rotate180() {
    return [
      -1,
      0,
      0,
      0,
      -1,
      0,
      0,
      0,
      1
    ];
  },
  rotate270() {
    return [
      0,
      1,
      0,
      -1,
      0,
      0,
      0,
      0,
      1
    ];
  },
  radian(degree) {
    return degree * Math.PI / 180;
  },
  skew(degreeX, degreeY) {
    const radianX = this.radian(degreeX);
    const radianY = this.radian(degreeY);
    return [
      1,
      Math.tan(radianX),
      0,
      Math.tan(radianY),
      1,
      0,
      0,
      0,
      1
    ];
  },
  skewX(degreeX) {
    const radianX = this.radian(degreeX);
    return [
      1,
      Math.tan(radianX),
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ];
  },
  skewY(degreeY) {
    const radianY = this.radian(degreeY);
    return [
      1,
      0,
      0,
      Math.tan(radianY),
      1,
      0,
      0,
      0,
      1
    ];
  },
  shear1(angle) {
    return [
      1,
      -Math.tan(this.radian(angle) / 2),
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ];
  },
  shear2(angle) {
    return [
      1,
      0,
      0,
      Math.sin(this.radian(angle)),
      1,
      0,
      0,
      0,
      1
    ];
  }
};
const Matrix = {
  CONSTANT,
  radian(angle) {
    return CONSTANT.radian(angle);
  },
  multiply(A, C) {
    return [
      A[0] * C[0] + A[1] * C[1] + A[2] * C[2],
      A[3] * C[0] + A[4] * C[1] + A[5] * C[2],
      A[6] * C[0] + A[7] * C[1] + A[8] * C[2]
    ];
  },
  identity(B) {
    return this.multiply(CONSTANT.identity(), B);
  },
  translate(x, y, B) {
    return this.multiply(CONSTANT.translate(x, y), B);
  },
  rotate(angle, B) {
    return this.multiply(CONSTANT.rotate(angle), B);
  },
  shear1(angle, B) {
    return this.multiply(CONSTANT.shear1(angle), B);
  },
  shear2(angle, B) {
    return this.multiply(CONSTANT.shear2(angle), B);
  },
  rotateShear(angle, B) {
    let arr = B;
    arr = this.shear1(angle, arr);
    arr = this.shear2(angle, arr);
    arr = this.shear1(angle, arr);
    return arr;
  }
};
function crop(startX = 0, startY = 0, width, height) {
  const newBitmap = createBitmap(width * height * 4, width, height);
  return function(bitmap, done, opt = {}) {
    for (var y = startY, realY = 0; y < height; y++, realY++) {
      for (var x = startX, realX = 0; x < width; x++, realX++) {
        newBitmap.pixels[realY * width * realX] = bitmap.pixels[y * width * x];
      }
    }
    done(newBitmap);
  };
}
function resize(dstWidth, dstHeight) {
  return function(bitmap, done, opt = {}) {
    var c2 = Canvas.drawPixels(bitmap);
    var context = c2.getContext("2d");
    c2.width = dstWidth;
    c2.height = dstHeight;
    done({
      pixels: new Uint8ClampedArray(context.getImageData(0, 0, dstWidth, dstHeight).data),
      width: dstWidth,
      height: dstHeight
    });
  };
}
function flipV() {
  return function(bitmap, done, opt = {}) {
    const width = bitmap.width;
    const height = bitmap.height;
    const isCenter = height % 2 == 1 ? 1 : 0;
    const halfHeight = isCenter ? Math.floor(height / 2) : height / 2;
    for (var y = 0; y < halfHeight; y++) {
      for (var x = 0; x < width; x++) {
        var startIndex = y * width + x << 2;
        var endIndex = (height - 1 - y) * width + x << 2;
        swapColor(bitmap.pixels, startIndex, endIndex);
      }
    }
    done(bitmap);
  };
}
function flipH() {
  return function(bitmap, done, opt = {}) {
    const width = bitmap.width;
    const height = bitmap.height;
    const isCenter = width % 2 == 1 ? 1 : 0;
    const halfWidth = isCenter ? Math.floor(width / 2) : width / 2;
    for (var y = 0; y < height; y++) {
      for (var x = 0; x < halfWidth; x++) {
        var startIndex = y * width + x << 2;
        var endIndex = y * width + (width - 1 - x) << 2;
        swapColor(bitmap.pixels, startIndex, endIndex);
      }
    }
    done(bitmap);
  };
}
function rotateDegree(angle, cx = "center", cy = "center") {
  return function(bitmap, done, opt = {}) {
    var newBitmap = createBitmap(bitmap.pixels.length, bitmap.width, bitmap.height);
    const width = bitmap.width;
    const height = bitmap.height;
    if (cx == "center") {
      cx = Math.floor(width / 2);
    }
    if (cy == "center") {
      cy = Math.floor(height / 2);
    }
    const translateMatrix = Matrix.CONSTANT.translate(-cx, -cy);
    const translateMatrix2 = Matrix.CONSTANT.translate(cx, cy);
    const shear1Matrix = Matrix.CONSTANT.shear1(angle);
    const shear2Matrix = Matrix.CONSTANT.shear2(angle);
    packXY((pixels, i, x, y) => {
      let arr = Matrix.multiply(translateMatrix, [x, y, 1]);
      arr = Matrix.multiply(shear1Matrix, arr).map(Math.round);
      arr = Matrix.multiply(shear2Matrix, arr).map(Math.round);
      arr = Matrix.multiply(shear1Matrix, arr).map(Math.round);
      arr = Matrix.multiply(translateMatrix2, arr);
      const [x1, y1] = arr;
      if (x1 < 0)
        return;
      if (y1 < 0)
        return;
      if (x1 > width - 1)
        return;
      if (y1 > height - 1)
        return;
      var endIndex = y1 * width + x1 << 2;
      fillPixelColor(pixels, endIndex, bitmap.pixels, i);
    })(newBitmap, function() {
      done(newBitmap);
    }, opt);
  };
}
function rotate(degree = 0) {
  degree = parseParamNumber(degree);
  degree = degree % 360;
  return function(bitmap, done, opt = {}) {
    if (degree == 0)
      return bitmap;
    if (degree == 90 || degree == 270) {
      var newBitmap = createBitmap(bitmap.pixels.length, bitmap.height, bitmap.width);
    } else if (degree == 180) {
      var newBitmap = createBitmap(bitmap.pixels.length, bitmap.width, bitmap.height);
    } else {
      return rotateDegree(degree)(bitmap, done, opt);
    }
    packXY((pixels, i, x, y) => {
      if (degree == 90) {
        var endIndex = x * newBitmap.width + (newBitmap.width - 1 - y) << 2;
      } else if (degree == 270) {
        var endIndex = (newBitmap.height - 1 - x) * newBitmap.width + y << 2;
      } else if (degree == 180) {
        var endIndex = (newBitmap.height - 1 - y) * newBitmap.width + (newBitmap.width - 1 - x) << 2;
      }
      fillPixelColor(newBitmap.pixels, endIndex, bitmap.pixels, i);
    })(bitmap, function() {
      done(newBitmap);
    }, opt);
  };
}
function histogram(type = "gray", points = []) {
  var $realPoints = [];
  for (var i = 0; i < points.length - 1; i++) {
    var sp = points[i];
    var ep = points[i + 1];
    var distX = ep[0] - sp[0];
    var distY = ep[1] - sp[1];
    var rate = distY / distX;
    for (var realIndex = 0, start = sp[0]; realIndex < distX; realIndex++, start++) {
      $realPoints[start] = sp[1] + realIndex * rate;
    }
  }
  $realPoints[255] = 255;
  if (type === "red") {
    return pixel(() => {
      $r = $realPoints[$r];
    }, {}, { $realPoints });
  } else if (type === "green") {
    return pixel(() => {
      $g = $realPoints[$g];
    }, {}, { $realPoints });
  } else if (type === "blue") {
    return pixel(() => {
      $b = $realPoints[$b];
    }, {}, { $realPoints });
  } else {
    return pixel(() => {
      const l = Color.RGBtoYCrCb($r, $g, $b);
      const c2 = Color.YCrCbtoRGB(clamp($realPoints[clamp(l.y)]), l.cr, l.cb, 0);
      $r = c2.r;
      $g = c2.g;
      $b = c2.b;
    }, {}, { $realPoints });
  }
}
var image = {
  crop,
  resize,
  flipH,
  flipV,
  rotate,
  rotateDegree,
  histogram,
  "rotate-degree": rotateDegree
};
function bitonal(darkColor, lightColor, threshold2 = 100) {
  let $darkColor = Color$1.parse(darkColor);
  let $lightColor = Color$1.parse(lightColor);
  let $threshold = threshold2;
  return pixel(`        
        const thresholdColor = ( $r + $g + $b ) <= $threshold ? $darkColor : $lightColor

        $r = thresholdColor.r;
        $g = thresholdColor.g;
        $b = thresholdColor.b; 
    `, {
    $threshold
  }, {
    $darkColor,
    $lightColor
  });
}
function brightness(amount = 1) {
  amount = parseParamNumber(amount);
  const $C = Math.floor(255 * (amount / 100));
  return pixel(`
        $r += $C;
        $g += $C;
        $b += $C;
    `, { $C });
}
function brownie() {
  const $matrix = [
    0.5997023498159715,
    0.34553243048391263,
    -0.2708298674538042,
    0,
    -0.037703249837783157,
    0.8609577587992641,
    0.15059552388459913,
    0,
    0.24113635128153335,
    -0.07441037908422492,
    0.44972182064877153,
    0,
    0,
    0,
    0,
    1
  ];
  return pixel(`
        $r = $matrix[0] * $r + $matrix[1] * $g + $matrix[2] * $b + $matrix[3] * $a;
        $g = $matrix[4] * $r + $matrix[5] * $g + $matrix[6] * $b + $matrix[7] * $a;
        $b = $matrix[8] * $r + $matrix[9] * $g + $matrix[10] * $b + $matrix[11] * $a;
        $a = $matrix[12] * $r + $matrix[13] * $g + $matrix[14] * $b + $matrix[15] * $a;        
    `, {
    $matrix
  });
}
function clip(amount = 0) {
  amount = parseParamNumber(amount);
  const $C = Math.abs(amount) * 2.55;
  return pixel(`

        $r = ($r > 255 - $C) ? 255 : 0;
        $g = ($g > 255 - $C) ? 255 : 0;
        $b = ($b > 255 - $C) ? 255 : 0;

    `, { $C });
}
function contrast(amount = 0) {
  amount = parseParamNumber(amount);
  const $C = Math.max((128 + amount) / 128, 0);
  return pixel(`
        $r *= $C;
        $g *= $C;
        $b *= $C;
    `, { $C });
}
function gamma(amount = 1) {
  const $C = parseParamNumber(amount);
  return pixel(`
        $r = Math.pow($r / 255, $C) * 255;
        $g = Math.pow($g / 255, $C) * 255;
        $b = Math.pow($b / 255, $C) * 255;
    `, { $C });
}
function gradient() {
  let params = [...arguments];
  if (params.length === 1 && typeof params[0] === "string") {
    params = Color$1.convertMatchesArray(params[0]);
  }
  params = params.map((arg) => {
    const res = Color$1.matches(arg);
    if (!res.length) {
      return { type: "scale", value: arg };
    }
    return { type: "param", value: arg };
  });
  let $scale = params.filter((it) => {
    return it.type == "scale";
  })[0];
  $scale = $scale ? +$scale.value : 256;
  params = params.filter((it) => {
    return it.type == "param";
  }).map((it) => {
    return it.value;
  }).join(",");
  let $colors = Color$1.gradient(params, $scale).map((c2) => {
    const { r, g, b, a } = Color$1.parse(c2);
    return { r, g, b, a };
  });
  return pixel(`
        const colorIndex = clamp(Math.ceil($r * 0.2126 + $g * 0.7152 + $b * 0.0722));
        const newColorIndex = clamp(Math.floor(colorIndex * ($scale / 256)));
        const color = $colors[newColorIndex];

        $r = color.r; 
        $g = color.g; 
        $b = color.b; 
        $a = clamp(Math.floor(color.a * 256));
    `, {}, { $colors, $scale });
}
function grayscale(amount) {
  amount = parseParamNumber(amount);
  let C = amount / 100;
  if (C > 1)
    C = 1;
  const $matrix = [
    0.2126 + 0.7874 * (1 - C),
    0.7152 - 0.7152 * (1 - C),
    0.0722 - 0.0722 * (1 - C),
    0,
    0.2126 - 0.2126 * (1 - C),
    0.7152 + 0.2848 * (1 - C),
    0.0722 - 0.0722 * (1 - C),
    0,
    0.2126 - 0.2126 * (1 - C),
    0.7152 - 0.7152 * (1 - C),
    0.0722 + 0.9278 * (1 - C),
    0,
    0,
    0,
    0,
    1
  ];
  return pixel(`
        $r = $matrix[0] * $r + $matrix[1] * $g + $matrix[2] * $b + $matrix[3] * $a;
        $g = $matrix[4] * $r + $matrix[5] * $g + $matrix[6] * $b + $matrix[7] * $a;
        $b = $matrix[8] * $r + $matrix[9] * $g + $matrix[10] * $b + $matrix[11] * $a;
        $a = $matrix[12] * $r + $matrix[13] * $g + $matrix[14] * $b + $matrix[15] * $a;
    `, {
    $matrix
  });
}
function hue(amount = 360) {
  const $C = parseParamNumber(amount);
  return pixel(`
        var hsv = Color.RGBtoHSV($r, $g, $b);

        // 0 ~ 360 
        var h = hsv.h;
        h += Math.abs($C);
        h = h % 360;
        hsv.h = h;

        var rgb = Color.HSVtoRGB(hsv);

        $r = rgb.r;
        $g = rgb.g;
        $b = rgb.b;
    `, {
    $C
  });
}
function invert(amount = 100) {
  amount = parseParamNumber(amount);
  const $C = amount / 100;
  return pixel(`
        $r = (255 - $r) * $C;
        $g = (255 - $g) * $C;
        $b = (255 - $b) * $C;
    `, {
    $C
  });
}
function kodachrome() {
  const $matrix = [
    1.1285582396593525,
    -0.3967382283601348,
    -0.03992559172921793,
    0,
    -0.16404339962244616,
    1.0835251566291304,
    -0.05498805115633132,
    0,
    -0.16786010706155763,
    -0.5603416277695248,
    1.6014850761964943,
    0,
    0,
    0,
    0,
    1
  ];
  return pixel(`
        $r = $matrix[0] * $r + $matrix[1] * $g + $matrix[2] * $b + $matrix[3] * $a;
        $g = $matrix[4] * $r + $matrix[5] * $g + $matrix[6] * $b + $matrix[7] * $a;
        $b = $matrix[8] * $r + $matrix[9] * $g + $matrix[10] * $b + $matrix[11] * $a;
        $a = $matrix[12] * $r + $matrix[13] * $g + $matrix[14] * $b + $matrix[15] * $a;
    `, {
    $matrix
  });
}
function matrix$1($a = 0, $b2 = 0, $c = 0, $d = 0, $e = 0, $f = 0, $g2 = 0, $h = 0, $i = 0, $j = 0, $k = 0, $l = 0, $m = 0, $n = 0, $o = 0, $p = 0) {
  const $matrix = [
    $a,
    $b2,
    $c,
    $d,
    $e,
    $f,
    $g2,
    $h,
    $i,
    $j,
    $k,
    $l,
    $m,
    $n,
    $o,
    $p
  ];
  return pixel(`
        $r = $matrix[0] * $r + $matrix[1] * $g + $matrix[2] * $b + $matrix[3] * $a;
        $g = $matrix[4] * $r + $matrix[5] * $g + $matrix[6] * $b + $matrix[7] * $a;
        $b = $matrix[8] * $r + $matrix[9] * $g + $matrix[10] * $b + $matrix[11] * $a;
        $a = $matrix[12] * $r + $matrix[13] * $g + $matrix[14] * $b + $matrix[15] * $a;
    `, {
    $matrix
  });
}
function noise(amount = 1) {
  const $C = parseParamNumber(amount);
  return pixel(`
        const C = Math.abs($C) * 5;
        const min = -C;
        const max = C;
        const noiseValue = Math.round(min + (Math.random() * (max - min)));

        $r += noiseValue;
        $g += noiseValue;
        $b += noiseValue;
    `, {
    $C
  });
}
function opacity(amount = 100) {
  amount = parseParamNumber(amount);
  const $C = amount / 100;
  return pixel(`
        $a *= $C; 
    `, { $C });
}
function polaroid() {
  const $matrix = [
    1.438,
    -0.062,
    -0.062,
    0,
    -0.122,
    1.378,
    -0.122,
    0,
    -0.016,
    -0.016,
    1.483,
    0,
    0,
    0,
    0,
    1
  ];
  return pixel(`
        $r = $matrix[0] * $r + $matrix[1] * $g + $matrix[2] * $b + $matrix[3] * $a;
        $g = $matrix[4] * $r + $matrix[5] * $g + $matrix[6] * $b + $matrix[7] * $a;
        $b = $matrix[8] * $r + $matrix[9] * $g + $matrix[10] * $b + $matrix[11] * $a;
        $a = $matrix[12] * $r + $matrix[13] * $g + $matrix[14] * $b + $matrix[15] * $a;
    `, {
    $matrix
  });
}
function saturation(amount = 100) {
  amount = parseParamNumber(amount);
  const C = amount / 100;
  const L = 1 - Math.abs(C);
  const $matrix = [
    L,
    0,
    0,
    0,
    0,
    L,
    0,
    0,
    0,
    0,
    L,
    0,
    0,
    0,
    0,
    L
  ];
  return pixel(`
        $r = $matrix[0] * $r + $matrix[1] * $g + $matrix[2] * $b + $matrix[3] * $a;
        $g = $matrix[4] * $r + $matrix[5] * $g + $matrix[6] * $b + $matrix[7] * $a;
        $b = $matrix[8] * $r + $matrix[9] * $g + $matrix[10] * $b + $matrix[11] * $a;
        $a = $matrix[12] * $r + $matrix[13] * $g + $matrix[14] * $b + $matrix[15] * $a;        
    `, {
    $matrix
  });
}
function sepia(amount = 1) {
  let C = parseParamNumber(amount);
  if (C > 1)
    C = 1;
  const $matrix = [
    0.393 + 0.607 * (1 - C),
    0.769 - 0.769 * (1 - C),
    0.189 - 0.189 * (1 - C),
    0,
    0.349 - 0.349 * (1 - C),
    0.686 + 0.314 * (1 - C),
    0.168 - 0.168 * (1 - C),
    0,
    0.272 - 0.272 * (1 - C),
    0.534 - 0.534 * (1 - C),
    0.131 + 0.869 * (1 - C),
    0,
    0,
    0,
    0,
    1
  ];
  return pixel(`
        $r = $matrix[0] * $r + $matrix[1] * $g + $matrix[2] * $b + $matrix[3] * $a;
        $g = $matrix[4] * $r + $matrix[5] * $g + $matrix[6] * $b + $matrix[7] * $a;
        $b = $matrix[8] * $r + $matrix[9] * $g + $matrix[10] * $b + $matrix[11] * $a;
        $a = $matrix[12] * $r + $matrix[13] * $g + $matrix[14] * $b + $matrix[15] * $a;        
    `, {
    $matrix
  });
}
function shade(redValue = 1, greenValue = 1, blueValue = 1) {
  const $redValue = parseParamNumber(redValue);
  const $greenValue = parseParamNumber(greenValue);
  const $blueValue = parseParamNumber(blueValue);
  return pixel(`
        $r *= $redValue;
        $g *= $greenValue;
        $b *= $blueValue;
    `, {
    $redValue,
    $greenValue,
    $blueValue
  });
}
function shift() {
  const $matrix = [
    1.438,
    -0.062,
    -0.062,
    0,
    -0.122,
    1.378,
    -0.122,
    0,
    -0.016,
    -0.016,
    1.483,
    0,
    0,
    0,
    0,
    1
  ];
  return pixel(`
        $r = $matrix[0] * $r + $matrix[1] * $g + $matrix[2] * $b + $matrix[3] * $a;
        $g = $matrix[4] * $r + $matrix[5] * $g + $matrix[6] * $b + $matrix[7] * $a;
        $b = $matrix[8] * $r + $matrix[9] * $g + $matrix[10] * $b + $matrix[11] * $a;
        $a = $matrix[12] * $r + $matrix[13] * $g + $matrix[14] * $b + $matrix[15] * $a;        
    `, {
    $matrix
  });
}
function solarize(redValue, greenValue, blueValue) {
  const $redValue = parseParamNumber(redValue);
  const $greenValue = parseParamNumber(greenValue);
  const $blueValue = parseParamNumber(blueValue);
  return pixel(`
        $r = ($r < $redValue) ? 255 - $r: $r;
        $g = ($g < $greenValue) ? 255 - $g: $g;
        $b = ($b < $blueValue) ? 255 - $b: $b;
    `, {
    $redValue,
    $greenValue,
    $blueValue
  });
}
function technicolor() {
  const $matrix = [
    1.9125277891456083,
    -0.8545344976951645,
    -0.09155508482755585,
    0,
    -0.3087833385928097,
    1.7658908555458428,
    -0.10601743074722245,
    0,
    -0.231103377548616,
    -0.7501899197440212,
    1.847597816108189,
    0,
    0,
    0,
    0,
    1
  ];
  return pixel(`
        $r = $matrix[0] * $r + $matrix[1] * $g + $matrix[2] * $b + $matrix[3] * $a;
        $g = $matrix[4] * $r + $matrix[5] * $g + $matrix[6] * $b + $matrix[7] * $a;
        $b = $matrix[8] * $r + $matrix[9] * $g + $matrix[10] * $b + $matrix[11] * $a;
        $a = $matrix[12] * $r + $matrix[13] * $g + $matrix[14] * $b + $matrix[15] * $a;
    `, {
    $matrix
  });
}
function thresholdColor(scale2 = 200, amount = 100, hasColor = true) {
  const $scale = parseParamNumber(scale2);
  amount = parseParamNumber(amount);
  const $C = amount / 100;
  const $hasColor = hasColor;
  return pixel(`
        // refer to Color.brightness 
        const v = ($C * Math.ceil($r * 0.2126 + $g * 0.7152 + $b * 0.0722) ) >= $scale ? 255 : 0;

        if ($hasColor) {

            if (v == 0) {
                $r = 0; 
                $g = 0; 
                $b = 0;
            }
            
        } else {
            const value = Math.round(v);
            $r = value; 
            $g = value;
            $b = value; 
        }
        
    `, {
    $C,
    $scale,
    $hasColor
  });
}
function threshold(scale2 = 200, amount = 100) {
  return thresholdColor(scale2, amount, false);
}
function tint(redTint = 1, greenTint = 1, blueTint = 1) {
  const $redTint = parseParamNumber(redTint);
  const $greenTint = parseParamNumber(greenTint);
  const $blueTint = parseParamNumber(blueTint);
  return pixel(`

        $r += (255 - $r) * $redTint;
        $g += (255 - $g) * $greenTint;
        $b += (255 - $b) * $blueTint;

    `, {
    $redTint,
    $greenTint,
    $blueTint
  });
}
var pixel$1 = {
  bitonal,
  brightness,
  brownie,
  clip,
  contrast,
  gamma,
  gradient,
  grayscale,
  hue,
  invert,
  kodachrome,
  matrix: matrix$1,
  noise,
  opacity,
  polaroid,
  saturation,
  sepia,
  shade,
  shift,
  solarize,
  technicolor,
  threshold,
  "threshold-color": thresholdColor,
  tint
};
function blur(amount = 3, hasAlphaChannel = true) {
  amount = parseParamNumber(amount);
  return convolution(createBlurMatrix(amount));
}
function emboss(amount = 4) {
  amount = parseParamNumber(amount);
  return convolution([
    amount * -2,
    -amount,
    0,
    -amount,
    1,
    amount,
    0,
    amount,
    amount * 2
  ]);
}
function gaussianBlur(amount = 100) {
  amount = parseParamNumber(amount);
  const C = amount / 100;
  return convolution(weight([
    1,
    2,
    1,
    2,
    4,
    2,
    1,
    2,
    1
  ], 1 / 16 * C));
}
function gaussianBlur5x(amount = 100) {
  amount = parseParamNumber(amount);
  const C = amount / 100;
  return convolution(weight([
    1,
    4,
    6,
    4,
    1,
    4,
    16,
    24,
    16,
    4,
    6,
    24,
    36,
    24,
    6,
    4,
    16,
    24,
    16,
    4,
    1,
    4,
    6,
    4,
    1
  ], 1 / 256 * C));
}
function grayscale2(amount = 100) {
  amount = parseParamNumber(amount);
  return convolution(weight([
    0.3,
    0.3,
    0.3,
    0,
    0,
    0.59,
    0.59,
    0.59,
    0,
    0,
    0.11,
    0.11,
    0.11,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ], amount / 100));
}
function identity() {
  return convolution([
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0
  ]);
}
function kirschHorizontal(count = 1) {
  count = parseParamNumber(count);
  return convolution([
    5,
    5,
    5,
    -3,
    0,
    -3,
    -3,
    -3,
    -3
  ]);
}
function kirschVertical(count = 1) {
  count = parseParamNumber(count);
  return convolution([
    5,
    -3,
    -3,
    5,
    0,
    -3,
    5,
    -3,
    -3
  ]);
}
function laplacian(amount = 100) {
  amount = parseParamNumber(amount);
  return convolution(weight([
    -1,
    -1,
    -1,
    -1,
    8,
    -1,
    -1,
    -1,
    -1
  ], amount / 100));
}
function laplacian5x(amount = 100) {
  amount = parseParamNumber(amount);
  return convolution(weight([
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    24,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1
  ], amount / 100));
}
function motionBlur() {
  return convolution(weight([
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1
  ], 1 / 9));
}
function motionBlur2() {
  return convolution(weight([
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1
  ], 1 / 9));
}
function motionBlur3() {
  return convolution(weight([
    1,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    1,
    0,
    1,
    0,
    0,
    1,
    0,
    0,
    1,
    0,
    0,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    1,
    0,
    0,
    1,
    0,
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    1
  ], 1 / 9));
}
function negative(amount = 100) {
  amount = parseParamNumber(amount);
  return convolution(weight([
    -1,
    0,
    0,
    0,
    0,
    0,
    -1,
    0,
    0,
    0,
    0,
    0,
    -1,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1
  ], amount / 100));
}
function sepia2(amount = 100) {
  amount = parseParamNumber(amount);
  return convolution(weight([
    0.393,
    0.349,
    0.272,
    0,
    0,
    0.769,
    0.686,
    0.534,
    0,
    0,
    0.189,
    0.168,
    0.131,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ], amount / 100));
}
function sharpen(amount = 100) {
  amount = parseParamNumber(amount);
  return convolution(weight([
    0,
    -1,
    0,
    -1,
    5,
    -1,
    0,
    -1,
    0
  ], amount / 100));
}
function sobelHorizontal() {
  return convolution([
    -1,
    -2,
    -1,
    0,
    0,
    0,
    1,
    2,
    1
  ]);
}
function sobelVertical() {
  return convolution([
    -1,
    0,
    1,
    -2,
    0,
    2,
    -1,
    0,
    1
  ]);
}
var mul_table = [
  512,
  512,
  456,
  512,
  328,
  456,
  335,
  512,
  405,
  328,
  271,
  456,
  388,
  335,
  292,
  512,
  454,
  405,
  364,
  328,
  298,
  271,
  496,
  456,
  420,
  388,
  360,
  335,
  312,
  292,
  273,
  512,
  482,
  454,
  428,
  405,
  383,
  364,
  345,
  328,
  312,
  298,
  284,
  271,
  259,
  496,
  475,
  456,
  437,
  420,
  404,
  388,
  374,
  360,
  347,
  335,
  323,
  312,
  302,
  292,
  282,
  273,
  265,
  512,
  497,
  482,
  468,
  454,
  441,
  428,
  417,
  405,
  394,
  383,
  373,
  364,
  354,
  345,
  337,
  328,
  320,
  312,
  305,
  298,
  291,
  284,
  278,
  271,
  265,
  259,
  507,
  496,
  485,
  475,
  465,
  456,
  446,
  437,
  428,
  420,
  412,
  404,
  396,
  388,
  381,
  374,
  367,
  360,
  354,
  347,
  341,
  335,
  329,
  323,
  318,
  312,
  307,
  302,
  297,
  292,
  287,
  282,
  278,
  273,
  269,
  265,
  261,
  512,
  505,
  497,
  489,
  482,
  475,
  468,
  461,
  454,
  447,
  441,
  435,
  428,
  422,
  417,
  411,
  405,
  399,
  394,
  389,
  383,
  378,
  373,
  368,
  364,
  359,
  354,
  350,
  345,
  341,
  337,
  332,
  328,
  324,
  320,
  316,
  312,
  309,
  305,
  301,
  298,
  294,
  291,
  287,
  284,
  281,
  278,
  274,
  271,
  268,
  265,
  262,
  259,
  257,
  507,
  501,
  496,
  491,
  485,
  480,
  475,
  470,
  465,
  460,
  456,
  451,
  446,
  442,
  437,
  433,
  428,
  424,
  420,
  416,
  412,
  408,
  404,
  400,
  396,
  392,
  388,
  385,
  381,
  377,
  374,
  370,
  367,
  363,
  360,
  357,
  354,
  350,
  347,
  344,
  341,
  338,
  335,
  332,
  329,
  326,
  323,
  320,
  318,
  315,
  312,
  310,
  307,
  304,
  302,
  299,
  297,
  294,
  292,
  289,
  287,
  285,
  282,
  280,
  278,
  275,
  273,
  271,
  269,
  267,
  265,
  263,
  261,
  259
];
var shg_table = [
  9,
  11,
  12,
  13,
  13,
  14,
  14,
  15,
  15,
  15,
  15,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24
];
function BlurStack() {
  this.r = 0;
  this.g = 0;
  this.b = 0;
  this.a = 0;
  this.next = null;
}
function stackBlurImage(bitmap, radius, blurAlphaChannel) {
  if (blurAlphaChannel)
    return stackBlurCanvasRGBA(bitmap, 0, 0, radius);
  else
    return stackBlurCanvasRGB(bitmap, 0, 0, radius);
}
function stackBlurCanvasRGBA(bitmap, top_x, top_y, radius) {
  if (isNaN(radius) || radius < 1)
    return bitmap;
  radius |= 0;
  const { pixels, width, height } = bitmap;
  var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum, r_out_sum, g_out_sum, b_out_sum, r_in_sum, g_in_sum, b_in_sum, pr, pg, pb, rbs;
  var div = radius + radius + 1;
  var widthMinus1 = width - 1;
  var heightMinus1 = height - 1;
  var radiusPlus1 = radius + 1;
  var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;
  var stackStart = new BlurStack();
  var stack = stackStart;
  for (i = 1; i < div; i++) {
    stack = stack.next = new BlurStack();
    if (i == radiusPlus1)
      var stackEnd = stack;
  }
  stack.next = stackStart;
  var stackIn = null;
  var stackOut = null;
  yw = yi = 0;
  var mul_sum = mul_table[radius];
  var shg_sum = shg_table[radius];
  for (y = 0; y < height; y++) {
    r_in_sum = g_in_sum = b_in_sum = r_sum = g_sum = b_sum = 0;
    r_out_sum = radiusPlus1 * (pr = pixels[yi]);
    g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
    b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
    r_sum += sumFactor * pr;
    g_sum += sumFactor * pg;
    b_sum += sumFactor * pb;
    stack = stackStart;
    for (i = 0; i < radiusPlus1; i++) {
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack = stack.next;
    }
    for (i = 1; i < radiusPlus1; i++) {
      p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
      r_sum += (stack.r = pr = pixels[p]) * (rbs = radiusPlus1 - i);
      g_sum += (stack.g = pg = pixels[p + 1]) * rbs;
      b_sum += (stack.b = pb = pixels[p + 2]) * rbs;
      r_in_sum += pr;
      g_in_sum += pg;
      b_in_sum += pb;
      stack = stack.next;
    }
    stackIn = stackStart;
    stackOut = stackEnd;
    for (x = 0; x < width; x++) {
      pixels[yi] = r_sum * mul_sum >> shg_sum;
      pixels[yi + 1] = g_sum * mul_sum >> shg_sum;
      pixels[yi + 2] = b_sum * mul_sum >> shg_sum;
      r_sum -= r_out_sum;
      g_sum -= g_out_sum;
      b_sum -= b_out_sum;
      r_out_sum -= stackIn.r;
      g_out_sum -= stackIn.g;
      b_out_sum -= stackIn.b;
      p = yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1) << 2;
      r_in_sum += stackIn.r = pixels[p];
      g_in_sum += stackIn.g = pixels[p + 1];
      b_in_sum += stackIn.b = pixels[p + 2];
      r_sum += r_in_sum;
      g_sum += g_in_sum;
      b_sum += b_in_sum;
      stackIn = stackIn.next;
      r_out_sum += pr = stackOut.r;
      g_out_sum += pg = stackOut.g;
      b_out_sum += pb = stackOut.b;
      r_in_sum -= pr;
      g_in_sum -= pg;
      b_in_sum -= pb;
      stackOut = stackOut.next;
      yi += 4;
    }
    yw += width;
  }
  for (x = 0; x < width; x++) {
    g_in_sum = b_in_sum = r_in_sum = g_sum = b_sum = r_sum = 0;
    yi = x << 2;
    r_out_sum = radiusPlus1 * (pr = pixels[yi]);
    g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
    b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
    r_sum += sumFactor * pr;
    g_sum += sumFactor * pg;
    b_sum += sumFactor * pb;
    stack = stackStart;
    for (i = 0; i < radiusPlus1; i++) {
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack = stack.next;
    }
    yp = width;
    for (i = 1; i <= radius; i++) {
      yi = yp + x << 2;
      r_sum += (stack.r = pr = pixels[yi]) * (rbs = radiusPlus1 - i);
      g_sum += (stack.g = pg = pixels[yi + 1]) * rbs;
      b_sum += (stack.b = pb = pixels[yi + 2]) * rbs;
      r_in_sum += pr;
      g_in_sum += pg;
      b_in_sum += pb;
      stack = stack.next;
      if (i < heightMinus1) {
        yp += width;
      }
    }
    yi = x;
    stackIn = stackStart;
    stackOut = stackEnd;
    for (y = 0; y < height; y++) {
      p = yi << 2;
      pixels[p] = r_sum * mul_sum >> shg_sum;
      pixels[p + 1] = g_sum * mul_sum >> shg_sum;
      pixels[p + 2] = b_sum * mul_sum >> shg_sum;
      r_sum -= r_out_sum;
      g_sum -= g_out_sum;
      b_sum -= b_out_sum;
      r_out_sum -= stackIn.r;
      g_out_sum -= stackIn.g;
      b_out_sum -= stackIn.b;
      p = x + ((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width << 2;
      r_sum += r_in_sum += stackIn.r = pixels[p];
      g_sum += g_in_sum += stackIn.g = pixels[p + 1];
      b_sum += b_in_sum += stackIn.b = pixels[p + 2];
      stackIn = stackIn.next;
      r_out_sum += pr = stackOut.r;
      g_out_sum += pg = stackOut.g;
      b_out_sum += pb = stackOut.b;
      r_in_sum -= pr;
      g_in_sum -= pg;
      b_in_sum -= pb;
      stackOut = stackOut.next;
      yi += width;
    }
  }
  return bitmap;
}
function stackBlur(radius = 10, hasAlphaChannel = true) {
  radius = parseParamNumber(radius);
  return function(bitmap, done, opt = {}) {
    let newBitmap = stackBlurImage(bitmap, radius, hasAlphaChannel);
    done(newBitmap);
  };
}
function transparency(amount = 100) {
  amount = parseParamNumber(amount);
  return convolution(weight([
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0.3,
    0,
    0,
    0,
    0,
    0,
    1
  ], amount / 100));
}
function unsharpMasking(amount = 256) {
  amount = parseParamNumber(amount);
  return convolution(weight([
    1,
    4,
    6,
    4,
    1,
    4,
    16,
    24,
    16,
    4,
    6,
    24,
    -476,
    24,
    6,
    4,
    16,
    24,
    16,
    4,
    1,
    4,
    6,
    4,
    1
  ], -1 / amount));
}
var matrix = {
  blur,
  emboss,
  gaussianBlur,
  "gaussian-blur": gaussianBlur,
  gaussianBlur5x,
  "gaussian-blur-5x": gaussianBlur5x,
  grayscale2,
  normal: identity,
  kirschHorizontal,
  "kirsch-horizontal": kirschHorizontal,
  kirschVertical,
  "kirsch-vertical": kirschVertical,
  laplacian,
  laplacian5x,
  "laplacian-5x": laplacian5x,
  motionBlur,
  "motion-blur": motionBlur,
  motionBlur2,
  "motion-blur-2": motionBlur2,
  motionBlur3,
  "motion-blur-3": motionBlur3,
  negative,
  sepia2,
  sharpen,
  sobelHorizontal,
  "sobel-horizontal": sobelHorizontal,
  sobelVertical,
  "sobel-vertical": sobelVertical,
  stackBlur,
  "stack-blur": stackBlur,
  transparency,
  unsharpMasking,
  "unsharp-masking": unsharpMasking
};
function kirsch() {
  return filter("kirsch-horizontal kirsch-vertical");
}
function sobel() {
  return filter("sobel-horizontal sobel-vertical");
}
function vintage() {
  return filter(`brightness(15) saturation(-20) gamma(1.8)`);
}
var multi$1 = {
  kirsch,
  sobel,
  vintage
};
var FilterList = __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, image), pixel$1), matrix), multi$1);
let makeId = 0;
const functions = {
  partial,
  multi,
  merge,
  weight,
  repeat,
  colorMatrix,
  each,
  eachXY,
  createRandomCount,
  createRandRange,
  createBitmap,
  createBlurMatrix,
  pack,
  packXY,
  pixel,
  getBitmap,
  putBitmap,
  radian,
  convolution,
  parseParamNumber,
  filter,
  clamp: clamp$1,
  fillColor,
  fillPixelColor,
  multi,
  merge,
  matches,
  parseFilter,
  partial
};
const LocalFilter = functions;
function weight(arr, num = 1) {
  return arr.map((i) => {
    return i * num;
  });
}
function repeat(value, num) {
  let arr = new Array(num);
  for (let i = 0; i < num; i++) {
    arr[i] = value;
  }
  return arr;
}
function colorMatrix(pixels, i, matrix2) {
  var r = pixels[i], g = pixels[i + 1], b = pixels[i + 2], a = pixels[i + 3];
  fillColor(pixels, i, matrix2[0] * r + matrix2[1] * g + matrix2[2] * b + matrix2[3] * a, matrix2[4] * r + matrix2[5] * g + matrix2[6] * b + matrix2[7] * a, matrix2[8] * r + matrix2[9] * g + matrix2[10] * b + matrix2[11] * a, matrix2[12] * r + matrix2[13] * g + matrix2[14] * b + matrix2[15] * a);
}
function makeFilter(filter2) {
  if (typeof filter2 == "function") {
    return filter2;
  }
  if (typeof filter2 == "string") {
    filter2 = [filter2];
  }
  filter2 = filter2.slice(0);
  const filterName = filter2.shift();
  if (typeof filterName == "function") {
    return filterName;
  }
  const params = filter2;
  const filterFunction = FilterList[filterName] || LocalFilter[filterName];
  if (!filterFunction) {
    throw new Error(`${filterName} is not filter. please check filter name.`);
  }
  return filterFunction.apply(filterFunction, params);
}
function forLoop(max2, index2 = 0, step = 1, callback, done, functionDumpCount = 1e4, frameTimer = "full", loopCount = 50) {
  let runIndex = index2;
  let timer = (callback2) => {
    setTimeout(callback2, 0);
  };
  if (frameTimer == "requestAnimationFrame") {
    timer = requestAnimationFrame;
    functionDumpCount = 1e3;
  }
  if (frameTimer == "full") {
    timer = null;
    functionDumpCount = max2;
  }
  function makeFunction(count = 50) {
    const arr = [...Array(count)];
    const functionStrings = arr.map((countIndex) => {
      return `cri = ri + i * s; if (cri >= mx) return {currentRunIndex: cri, i: null}; c(cri); i++;`;
    }).join("\n");
    const smallLoopFunction = new Function("ri", "i", "s", "mx", "c", `
            let cri = ri;
            
            ${functionStrings}
            
            return {currentRunIndex: cri, i: i} 
        `);
    return smallLoopFunction;
  }
  function runCallback() {
    const smallLoopFunction = makeFunction(loopCount);
    let currentRunIndex = runIndex;
    let ret = {};
    let i = 0;
    while (i < functionDumpCount) {
      ret = smallLoopFunction(runIndex, i, step, max2, callback);
      if (ret.i == null) {
        currentRunIndex = ret.currentRunIndex;
        break;
      }
      i = ret.i;
      currentRunIndex = ret.currentRunIndex;
    }
    nextCallback(currentRunIndex);
  }
  function nextCallback(currentRunIndex) {
    if (currentRunIndex) {
      runIndex = currentRunIndex;
    } else {
      runIndex += step;
    }
    if (runIndex >= max2) {
      done();
      return;
    }
    if (timer)
      timer(runCallback);
    else
      runCallback();
  }
  runCallback();
}
function each(len, callback, done, opt = {}) {
  forLoop(len, 0, 4, function(i) {
    callback(i, i >> 2);
  }, function() {
    done();
  }, opt.functionDumpCount, opt.frameTimer, opt.loopCount);
}
function eachXY(len, width, callback, done, opt = {}) {
  forLoop(len, 0, 4, function(i) {
    var xyIndex = i >> 2;
    callback(i, xyIndex % width, Math.floor(xyIndex / width));
  }, function() {
    done();
  }, opt.functionDumpCount, opt.frameTimer, opt.loopCount);
}
function createRandRange(min2, max2, count) {
  var result = [];
  for (var i = 1; i <= count; i++) {
    var num = Math.random() * (max2 - min2) + min2;
    var sign = Math.floor(Math.random() * 10) % 2 == 0 ? -1 : 1;
    result.push(sign * num);
  }
  result.sort();
  const centerIndex = Math.floor(count >> 1);
  var a = result[centerIndex];
  result[centerIndex] = result[0];
  result[0] = a;
  return result;
}
function createRandomCount() {
  return [3 * 3, 4 * 4, 5 * 5, 6 * 6, 7 * 7, 8 * 8, 9 * 9, 10 * 10].sort(function(a, b) {
    return 0.5 - Math.random();
  })[0];
}
function createBitmap(length, width, height) {
  return { pixels: new Uint8ClampedArray(length), width, height };
}
function putPixel(dstBitmap, srcBitmap, startX, startY) {
  var len = srcBitmap.pixels.length / 4;
  var dstX = 0, dstY = 0, x = 0, y = 0, srcIndex = 0, dstIndex = 0;
  for (var i = 0; i < len; i++) {
    x = i % srcBitmap.width, y = Math.floor(i / srcBitmap.width);
    dstX = startX + x;
    dstY = startY + y;
    if (dstX > dstBitmap.width)
      continue;
    if (dstY > dstBitmap.height)
      continue;
    srcIndex = y * srcBitmap.width + x << 2;
    dstIndex = dstY * dstBitmap.width + dstX << 2;
    dstBitmap.pixels[dstIndex] = srcBitmap.pixels[srcIndex];
    dstBitmap.pixels[dstIndex + 1] = srcBitmap.pixels[srcIndex + 1];
    dstBitmap.pixels[dstIndex + 2] = srcBitmap.pixels[srcIndex + 2];
    dstBitmap.pixels[dstIndex + 3] = srcBitmap.pixels[srcIndex + 3];
  }
}
function getPixel(srcBitmap, dstBitmap, startX, startY) {
  var len = dstBitmap.pixels.length >> 2;
  var srcX = 0, srcY = 0, x = 0, y = 0, srcIndex = 0, dstIndex = 0;
  for (var i = 0; i < len; i++) {
    var x = i % dstBitmap.width, y = Math.floor(i / dstBitmap.width);
    srcX = startX + x;
    srcY = startY + y;
    if (srcX > srcBitmap.width)
      continue;
    if (srcY > srcBitmap.height)
      continue;
    srcIndex = srcY * srcBitmap.width + srcX << 2;
    dstIndex = y * dstBitmap.width + x << 2;
    dstBitmap.pixels[dstIndex] = srcBitmap.pixels[srcIndex];
    dstBitmap.pixels[dstIndex + 1] = srcBitmap.pixels[srcIndex + 1];
    dstBitmap.pixels[dstIndex + 2] = srcBitmap.pixels[srcIndex + 2];
    dstBitmap.pixels[dstIndex + 3] = srcBitmap.pixels[srcIndex + 3];
  }
}
function cloneBitmap(bitmap, padding = 0) {
  const width = bitmap.width + padding;
  const height = bitmap.height + padding;
  const newBitmap = { pixels: new Uint8ClampedArray(width * height * 4), width, height };
  return newBitmap;
}
function getBitmap(bitmap, area) {
  return Canvas.getBitmap(bitmap, area);
}
function putBitmap(bitmap, subBitmap, area) {
  return Canvas.putBitmap(bitmap, subBitmap, area);
}
function parseParamNumber(param) {
  if (typeof param === "string") {
    param = param.replace(/deg/, "");
    param = param.replace(/px/, "");
  }
  return +param;
}
const filter_regexp = /(([\w_\-]+)(\(([^\)]*)\))?)+/gi;
function pack(callback) {
  return function(bitmap, done) {
    each(bitmap.pixels.length, (i, xyIndex) => {
      callback(bitmap.pixels, i, xyIndex, bitmap.pixels[i], bitmap.pixels[i + 1], bitmap.pixels[i + 2], bitmap.pixels[i + 3]);
    }, function() {
      done(bitmap);
    });
  };
}
function makePrebuildUserFilterList(arr) {
  const codeString = arr.map((it) => {
    return ` 
            ${it.userFunction.$preContext}

            ${it.userFunction.$preCallbackString}

            $r = clamp($r); $g = clamp($g); $b = clamp($b); $a = clamp($a);
        `;
  }).join("\n\n");
  var rootContextObject = { clamp: clamp$1, Color: Color$1 };
  arr.forEach((it) => {
    Object.assign(rootContextObject, it.userFunction.rootContextObject);
  });
  var rootContextDefine = `const ` + Object.keys(rootContextObject).map((key) => {
    return ` ${key} = $rc.${key} `;
  }).join(",");
  let FunctionCode = ` 
    let $r = $p[$pi], $g = $p[$pi+1], $b = $p[$pi+2], $a = $p[$pi+3];
    
    ${rootContextDefine}

    ${codeString}
    
    $p[$pi] = $r; $p[$pi+1] = $g; $p[$pi+2] = $b; $p[$pi+3] = $a;
    `;
  const userFunction = new Function("$p", "$pi", "$rc", FunctionCode);
  return function($pixels, $pixelIndex) {
    userFunction($pixels, $pixelIndex, rootContextObject);
  };
}
function makeUserFilterFunctionList(arr) {
  let rootContextObject = {};
  const list = arr.map((it) => {
    let newKeys = [];
    Object.keys(it.context).forEach((key, i) => {
      newKeys[key] = `n$${makeId++}${key}$`;
    });
    Object.keys(it.rootContext).forEach((key, i) => {
      newKeys[key] = `r$${makeId++}${key}$`;
      rootContextObject[newKeys[key]] = it.rootContext[key];
    });
    let preContext2 = Object.keys(it.context).filter((key) => {
      if (typeof it.context[key] === "number" || typeof it.context[key] === "string") {
        return false;
      } else if (Array.isArray(it.context[key])) {
        if (typeof it.context[key][0] == "number" || typeof it.context[key][0] == "string") {
          return false;
        }
      }
      return true;
    }).map((key, i) => {
      return [newKeys[key], JSON.stringify(it.context[key])].join(" = ");
    });
    let preCallbackString2 = it.callback;
    if (typeof it.callback === "function") {
      preCallbackString2 = it.callback.toString().split("{");
      preCallbackString2.shift();
      preCallbackString2 = preCallbackString2.join("{");
      preCallbackString2 = preCallbackString2.split("}");
      preCallbackString2.pop();
      preCallbackString2 = preCallbackString2.join("}");
    }
    Object.keys(newKeys).forEach((key) => {
      var newKey = newKeys[key];
      if (typeof it.context[key] === "number" || typeof it.context[key] === "string") {
        preCallbackString2 = preCallbackString2.replace(new RegExp("\\" + key, "g"), it.context[key]);
      } else if (Array.isArray(it.context[key])) {
        if (typeof it.context[key][0] == "number" || typeof it.context[key][0] == "string") {
          it.context[key].forEach((item, index2) => {
            preCallbackString2 = preCallbackString2.replace(new RegExp("\\" + key + "\\[" + index2 + "\\]", "g"), item);
          });
        } else {
          preCallbackString2 = preCallbackString2.replace(new RegExp("\\" + key, "g"), newKey);
        }
      } else {
        preCallbackString2 = preCallbackString2.replace(new RegExp("\\" + key, "g"), newKey);
      }
    });
    return { preCallbackString: preCallbackString2, preContext: preContext2 };
  });
  const preContext = list.map((it, i) => {
    return it.preContext.length ? `const ${it.preContext};` : "";
  }).join("\n\n");
  const preCallbackString = list.map((it) => {
    return it.preCallbackString;
  }).join("\n\n");
  let FunctionCode = ` 
    let $r = $pixels[$pixelIndex], $g = $pixels[$pixelIndex+1], $b = $pixels[$pixelIndex+2], $a = $pixels[$pixelIndex+3];

    ${preContext}

    ${preCallbackString}
    
    $pixels[$pixelIndex] = $r
    $pixels[$pixelIndex+1] = $g 
    $pixels[$pixelIndex+2] = $b   
    $pixels[$pixelIndex+3] = $a   
    `;
  const userFunction = new Function("$pixels", "$pixelIndex", "$clamp", "$Color", FunctionCode);
  userFunction.$preCallbackString = preCallbackString;
  userFunction.$preContext = preContext;
  userFunction.rootContextObject = rootContextObject;
  return userFunction;
}
function makeUserFilterFunction(callback, context = {}, rootContext = {}) {
  return makeUserFilterFunctionList([{ callback, context, rootContext }]);
}
function pixel(callback, context = {}, rootContext = {}) {
  const userFunction = makeUserFilterFunction(callback, context, rootContext);
  const returnCallback = function(bitmap, done) {
  };
  returnCallback.userFunction = userFunction;
  return returnCallback;
}
const ColorListIndex = [0, 1, 2, 3];
function swapColor(pixels, startIndex, endIndex) {
  ColorListIndex.forEach((i) => {
    var temp = pixels[startIndex + i];
    pixels[startIndex + i] = pixels[endIndex + i];
    pixels[endIndex + i] = temp;
  });
}
function packXY(callback) {
  return function(bitmap, done, opt = {}) {
    eachXY(bitmap.pixels.length, bitmap.width, (i, x, y) => {
      callback(bitmap.pixels, i, x, y);
    }, function() {
      done(bitmap);
    }, opt);
  };
}
function radian(degree) {
  return Matrix.CONSTANT.radian(degree);
}
function createBlurMatrix(amount = 3) {
  const count = Math.pow(amount, 2);
  const value = 1 / count;
  return repeat(value, count);
}
function fillColor(pixels, i, r, g, b, a) {
  if (arguments.length == 3) {
    var { r, g, b, a } = arguments[2];
  }
  if (typeof r == "number") {
    pixels[i] = r;
  }
  if (typeof g == "number") {
    pixels[i + 1] = g;
  }
  if (typeof b == "number") {
    pixels[i + 2] = b;
  }
  if (typeof a == "number") {
    pixels[i + 3] = a;
  }
}
function fillPixelColor(targetPixels, targetIndex, sourcePixels, sourceIndex) {
  fillColor(targetPixels, targetIndex, sourcePixels[sourceIndex], sourcePixels[sourceIndex + 1], sourcePixels[sourceIndex + 2], sourcePixels[sourceIndex + 3]);
}
function createWeightTable(weights, min2 = 0, max2 = 255) {
  var weightTable = [];
  weightTable = weights.map((w, i) => {
    return [];
  });
  weights.forEach((w, i) => {
    if (w != 0) {
      let data = weightTable[i];
      for (var i = min2; i <= max2; i++) {
        data[i] = w * i;
      }
    }
  });
  return weightTable;
}
function createSubPixelWeightFunction(weights, weightTable, width, height, opaque) {
  const side = Math.round(Math.sqrt(weights.length));
  const halfSide = Math.floor(side / 2);
  const alphaFac = opaque ? 1 : 0;
  let FunctionCode = `let r = 0, g = 0, b = 0, a = 0, scy = 0, scx =0, si = 0; `;
  let R = [];
  let G = [];
  let B = [];
  let A = [];
  weights.forEach((wt, index2) => {
    const cy = Math.floor(index2 / side);
    const cx = index2 % side;
    const distY = cy - halfSide;
    const distX = cx - halfSide;
    if (wt == 0) {
      return;
    }
    R.push(`$t[${index2}][$sp[(($sy + (${distY})) * ${width} + ($sx + (${distX}))) * 4]]`);
    G.push(`$t[${index2}][$sp[(($sy + (${distY})) * ${width} + ($sx + (${distX}))) * 4 + 1]]`);
    B.push(`$t[${index2}][$sp[(($sy + (${distY})) * ${width} + ($sx + (${distX}))) * 4 + 2]]`);
    A.push(`$t[${index2}][$sp[(($sy + (${distY})) * ${width} + ($sx + (${distX}))) * 4 + 3]]`);
  });
  FunctionCode += `r = ${R.join(" + ")}; g = ${G.join(" + ")}; b = ${B.join(" + ")}; a = ${A.join(" + ")};`;
  FunctionCode += `$dp[$di] = r; $dp[$di+1] = g;$dp[$di+2] = b;$dp[$di+3] = a + (${alphaFac})*(255-a); `;
  const subPixelFunction = new Function("$dp", "$sp", "$di", "$sx", "$sy", "$t", FunctionCode);
  return function($dp, $sp, $di, $sx, $sy) {
    subPixelFunction($dp, $sp, $di, $sx, $sy, weightTable);
  };
}
function convolution(weights, opaque = true) {
  const weightTable = createWeightTable(weights);
  return function(bitmap, done, opt = {}) {
    const side = Math.round(Math.sqrt(weights.length));
    const padding = side * 2;
    let sourceBitmap = cloneBitmap(bitmap, padding);
    putPixel(sourceBitmap, bitmap, side, side);
    let newBitmap = createBitmap(sourceBitmap.pixels.length, sourceBitmap.width, sourceBitmap.height);
    let returnBitmap = createBitmap(bitmap.pixels.length, bitmap.width, bitmap.height);
    const subPixelWeightFunction = createSubPixelWeightFunction(weights, weightTable, sourceBitmap.width, sourceBitmap.height, opaque);
    var len = bitmap.pixels.length / 4;
    for (var i = 0; i < len; i++) {
      var xyIndex = i, x = xyIndex % bitmap.width + side, y = Math.floor(xyIndex / bitmap.width) + side;
      subPixelWeightFunction(newBitmap.pixels, sourceBitmap.pixels, (y * sourceBitmap.width + x) * 4, x, y);
    }
    getPixel(newBitmap, returnBitmap, side, side);
    done(returnBitmap);
  };
}
function matches(str) {
  var ret = Color$1.convertMatches(str);
  const matches2 = ret.str.match(filter_regexp);
  let result = [];
  if (!matches2) {
    return result;
  }
  result = matches2.map((it) => {
    return { filter: it, origin: Color$1.reverseMatches(it, ret.matches) };
  });
  var pos = { next: 0 };
  result = result.map((item) => {
    const startIndex = str.indexOf(item.origin, pos.next);
    item.startIndex = startIndex;
    item.endIndex = startIndex + item.origin.length;
    item.arr = parseFilter(item.origin);
    pos.next = item.endIndex;
    return item;
  }).filter((it) => {
    if (!it.arr.length)
      return false;
    return true;
  });
  return result;
}
function parseFilter(filterString) {
  var ret = Color$1.convertMatches(filterString);
  const matches2 = ret.str.match(filter_regexp);
  if (!matches2[0]) {
    return [];
  }
  var arr = matches2[0].split("(");
  var filterName = arr.shift();
  var filterParams = [];
  if (arr.length) {
    filterParams = arr.shift().split(")")[0].split(",").map((f) => {
      return Color$1.reverseMatches(f, ret.matches);
    });
  }
  var result = [filterName, ...filterParams].map(Color$1.trim);
  return result;
}
function clamp$1(num) {
  return Math.min(255, num);
}
function filter(str) {
  return merge(matches(str).map((it) => {
    return it.arr;
  }));
}
function makeGroupedFilter(filters = []) {
  var groupedFilter = [];
  var group = [];
  for (var i = 0, len = filters.length; i < len; i++) {
    var f = filters[i];
    if (f.userFunction) {
      group.push(f);
    } else {
      if (group.length) {
        groupedFilter.push([...group]);
      }
      groupedFilter.push(f);
      group = [];
    }
  }
  if (group.length) {
    groupedFilter.push([...group]);
  }
  groupedFilter.forEach((filter2, index2) => {
    if (Array.isArray(filter2)) {
      groupedFilter[index2] = function() {
        const userFunction = makePrebuildUserFilterList(filter2);
        return function(bitmap, done) {
          for (var i2 = 0, len2 = bitmap.pixels.length; i2 < len2; i2 += 4) {
            userFunction(bitmap.pixels, i2);
          }
          done(bitmap);
        };
      }();
    }
  });
  return groupedFilter;
}
function multi(...filters) {
  filters = filters.map((filter2) => {
    return makeFilter(filter2);
  }).filter((f) => f);
  filters = makeGroupedFilter(filters);
  var max2 = filters.length;
  return function(bitmap, done, opt = {}) {
    var currentBitmap = bitmap;
    var index2 = 0;
    function runFilter() {
      filters[index2].call(null, currentBitmap, function(nextBitmap) {
        currentBitmap = nextBitmap;
        nextFilter();
      }, opt);
    }
    function nextFilter() {
      index2++;
      if (index2 >= max2) {
        done(currentBitmap);
        return;
      }
      runFilter();
    }
    runFilter();
  };
}
function merge(filters) {
  return multi(...filters);
}
function partial(area, ...filters) {
  var allFilter = null;
  if (filters.length == 1 && typeof filters[0] === "string") {
    allFilter = filter(filters[0]);
  } else {
    allFilter = merge(filters);
  }
  return (bitmap, done, opt = {}) => {
    allFilter(getBitmap(bitmap, area), function(newBitmap) {
      done(putBitmap(bitmap, newBitmap, area));
    }, opt);
  };
}
var ImageFilter = __spreadValues(__spreadValues({}, FilterList), functions);
var Util = {
  Color: Color$1,
  HueColor,
  ColorNames,
  ImageFilter,
  Canvas,
  ImageLoader
};
Color$1.color;
let counter = 0;
let cached = [];
class Dom {
  constructor(tag, className, attr) {
    if (typeof tag != "string") {
      this.el = tag;
    } else {
      var el = document.createElement(tag);
      this.uniqId = counter++;
      if (className) {
        el.className = className;
      }
      attr = attr || {};
      for (var k in attr) {
        el.setAttribute(k, attr[k]);
      }
      this.el = el;
    }
  }
  static getScrollTop() {
    return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
  }
  static getScrollLeft() {
    return Math.max(window.pageXOffset, document.documentElement.scrollLeft, document.body.scrollLeft);
  }
  attr(key, value) {
    if (arguments.length == 1) {
      return this.el.getAttribute(key);
    }
    this.el.setAttribute(key, value);
    return this;
  }
  closest(cls) {
    var temp = this;
    var checkCls = false;
    while (!(checkCls = temp.hasClass(cls))) {
      if (temp.el.parentNode) {
        temp = new Dom(temp.el.parentNode);
      } else {
        return null;
      }
    }
    if (checkCls) {
      return temp;
    }
    return null;
  }
  checked() {
    return this.el.checked;
  }
  removeClass(cls) {
    this.el.className = ` ${this.el.className} `.replace(` ${cls} `, " ").trim();
    return this;
  }
  hasClass(cls) {
    if (!this.el.className) {
      return false;
    } else {
      var newClass = ` ${this.el.className} `;
      return newClass.indexOf(` ${cls} `) > -1;
    }
  }
  addClass(cls) {
    if (!this.hasClass(cls)) {
      this.el.className = `${this.el.className} ${cls}`;
    }
    return this;
  }
  toggleClass(cls) {
    if (this.hasClass(cls)) {
      this.removeClass(cls);
    } else {
      this.addClass(cls);
    }
  }
  html(html) {
    try {
      if (typeof html == "string") {
        this.el.innerHTML = html;
      } else {
        this.empty().append(html);
      }
    } catch (e) {
      console.log(html);
    }
    return this;
  }
  find(selector) {
    return this.el.querySelector(selector);
  }
  $(selector) {
    return new Dom(this.find(selector));
  }
  findAll(selector) {
    return this.el.querySelectorAll(selector);
  }
  $$(selector) {
    return [...this.findAll(selector)].map((el) => new Dom(el));
  }
  empty() {
    return this.html("");
  }
  append(el) {
    if (typeof el == "string") {
      this.el.appendChild(document.createTextNode(el));
    } else {
      this.el.appendChild(el.el || el);
    }
    return this;
  }
  appendTo(target) {
    var t = target.el ? target.el : target;
    t.appendChild(this.el);
    return this;
  }
  remove() {
    if (this.el.parentNode) {
      this.el.parentNode.removeChild(this.el);
    }
    return this;
  }
  text() {
    return this.el.textContent;
  }
  css(key, value) {
    if (arguments.length == 2) {
      this.el.style[key] = value;
    } else if (arguments.length == 1) {
      if (typeof key == "string") {
        return getComputedStyle(this.el)[key];
      } else {
        var keys = key || {};
        Object.keys(keys).forEach((k) => {
          this.el.style[k] = keys[k];
        });
      }
    }
    return this;
  }
  cssFloat(key) {
    return parseFloat(this.css(key));
  }
  cssInt(key) {
    return parseInt(this.css(key));
  }
  px(key, value) {
    return this.css(key, value + "px");
  }
  offset() {
    var rect = this.el.getBoundingClientRect();
    return {
      top: rect.top + Dom.getScrollTop(),
      left: rect.left + Dom.getScrollLeft()
    };
  }
  rect() {
    return this.el.getBoundingClientRect();
  }
  position() {
    if (this.el.style.top) {
      return {
        top: parseFloat(this.css("top")),
        left: parseFloat(this.css("left"))
      };
    } else {
      return this.el.getBoundingClientRect();
    }
  }
  size() {
    return [this.width(), this.height()];
  }
  width() {
    return this.el.offsetWidth || this.el.getBoundingClientRect().width;
  }
  contentWidth() {
    return this.width() - this.cssFloat("padding-left") - this.cssFloat("padding-right");
  }
  height() {
    return this.el.offsetHeight || this.el.getBoundingClientRect().height;
  }
  contentHeight() {
    return this.height() - this.cssFloat("padding-top") - this.cssFloat("padding-bottom");
  }
  dataKey(key) {
    return this.uniqId + "." + key;
  }
  data(key, value) {
    if (arguments.length == 2) {
      cached[this.dataKey(key)] = value;
    } else if (arguments.length == 1) {
      return cached[this.dataKey(key)];
    } else {
      var keys = Object.keys(cached);
      var uniqId = this.uniqId + ".";
      return keys.filter(function(key2) {
        if (key2.indexOf(uniqId) == 0) {
          return true;
        }
        return false;
      }).map(function(value2) {
        return cached[value2];
      });
    }
    return this;
  }
  val(value) {
    if (arguments.length == 0) {
      return this.el.value;
    } else if (arguments.length == 1) {
      this.el.value = value;
    }
    return this;
  }
  int() {
    return parseInt(this.val(), 10);
  }
  float() {
    return parseFloat(this.val());
  }
  show() {
    return this.css("display", "block");
  }
  hide() {
    return this.css("display", "none");
  }
  toggle() {
    if (this.css("display") == "none") {
      return this.show();
    } else {
      return this.hide();
    }
  }
  scrollTop() {
    if (this.el === document.body) {
      return Dom.getScrollTop();
    }
    return this.el.scrollTop;
  }
  scrollLeft() {
    if (this.el === document.body) {
      return Dom.getScrollLeft();
    }
    return this.el.scrollLeft;
  }
  on(eventName, callback, opt1, opt2) {
    this.el.addEventListener(eventName, callback, opt1, opt2);
    return this;
  }
  off(eventName, callback) {
    this.el.removeEventListener(eventName, callback);
    return this;
  }
  getElement() {
    return this.el;
  }
  createChild(tag, className = "", attrs = {}, css = {}) {
    let $element = new Dom(tag, className, attrs);
    $element.css(css);
    this.append($element);
    return $element;
  }
  firstChild() {
    return new Dom(this.el.firstElementChild);
  }
  replace(oldElement, newElement) {
    this.el.replaceChild(newElement, oldElement);
    return this;
  }
}
class BaseModule {
  constructor($store) {
    this.$store = $store;
    this.initialize();
  }
  initialize() {
    this.filterProps().forEach((key) => {
      this.$store.action(key, this);
    });
  }
  filterProps(pattern = "/") {
    return Object.getOwnPropertyNames(this.__proto__).filter((key) => {
      return key.startsWith(pattern);
    });
  }
}
class ColorSetsList extends BaseModule {
  initialize() {
    super.initialize();
    this.$store.colorSetsList = [
      {
        name: "Material",
        colors: [
          "#F44336",
          "#E91E63",
          "#9C27B0",
          "#673AB7",
          "#3F51B5",
          "#2196F3",
          "#03A9F4",
          "#00BCD4",
          "#009688",
          "#4CAF50",
          "#8BC34A",
          "#CDDC39",
          "#FFEB3B",
          "#FFC107",
          "#FF9800",
          "#FF5722",
          "#795548",
          "#9E9E9E",
          "#607D8B"
        ],
        edit: true
      },
      { name: "Custom", "edit": true, "colors": [] },
      { name: "Color Scale", "scale": ["red", "yellow", "black"], count: 5 }
    ];
    this.$store.currentColorSets = {};
  }
  "/list"($store) {
    return Array.isArray($store.userList) && $store.userList.length ? $store.userList : $store.colorSetsList;
  }
  "/setUserPalette"($store, list) {
    $store.userList = list;
    $store.dispatch("/resetUserPalette");
    $store.dispatch("/setCurrentColorSets");
  }
  "/resetUserPalette"($store) {
    if ($store.userList && $store.userList.length) {
      $store.userList = $store.userList.map((element, index2) => {
        if (typeof element.colors == "function") {
          const makeCallback = element.colors;
          element.colors = makeCallback($store);
          element._colors = makeCallback;
        }
        return Object.assign({
          name: `color-${index2}`,
          colors: []
        }, element);
      });
      $store.emit("changeUserList");
    }
  }
  "/setCurrentColorSets"($store, nameOrIndex) {
    const _list = $store.dispatch("/list");
    if (typeof nameOrIndex == "undefined") {
      $store.currentColorSets = _list[0];
    } else if (typeof nameOrIndex == "number") {
      $store.currentColorSets = _list[nameOrIndex];
    } else {
      $store.currentColorSets = _list.filter(function(obj) {
        return obj.name == nameOrIndex;
      })[0];
    }
    $store.emit("changeCurrentColorSets");
  }
  "/getCurrentColorSets"($store) {
    return $store.currentColorSets;
  }
  "/addCurrentColor"($store, color) {
    if (Array.isArray($store.currentColorSets.colors)) {
      $store.currentColorSets.colors.push(color);
      $store.emit("changeCurrentColorSets");
      $store.emit("addCurrentColor", color);
    }
  }
  "/setCurrentColorAll"($store, colors = []) {
    $store.currentColorSets.colors = colors;
    $store.emit("changeCurrentColorSets");
  }
  "/removeCurrentColor"($store, index2) {
    if ($store.currentColorSets.colors[index2]) {
      $store.currentColorSets.colors.splice(index2, 1);
      $store.emit("changeCurrentColorSets");
    }
  }
  "/removeCurrentColorToTheRight"($store, index2) {
    if ($store.currentColorSets.colors[index2]) {
      $store.currentColorSets.colors.splice(index2, Number.MAX_VALUE);
      $store.emit("changeCurrentColorSets");
    }
  }
  "/clearPalette"($store) {
    if ($store.currentColorSets.colors) {
      $store.currentColorSets.colors = [];
      $store.emit("changeCurrentColorSets");
    }
  }
  "/getCurrentColors"($store) {
    return $store.dispatch("/getColors", $store.currentColorSets);
  }
  "/getColors"($store, element) {
    if (element.scale) {
      return Color$1.scale(element.scale, element.count);
    }
    return element.colors || [];
  }
  "/getColorSetsList"($store) {
    return $store.dispatch("/list").map((element) => {
      return {
        name: element.name,
        edit: element.edit,
        colors: $store.dispatch("/getColors", element)
      };
    });
  }
}
var Event = {
  addEvent(dom, eventName, callback, options) {
    if (dom) {
      dom.addEventListener(eventName, callback, options);
    }
  },
  removeEvent(dom, eventName, callback) {
    if (dom) {
      dom.removeEventListener(eventName, callback);
    }
  },
  pos(e) {
    if (e.touches && e.touches[0]) {
      return e.touches[0];
    }
    return e;
  },
  posXY(e) {
    var pos = this.pos(e);
    return {
      x: pos.pageX,
      y: pos.pageY
    };
  }
};
const DELEGATE_SPLIT = ".";
class State {
  constructor(masterObj, settingObj = {}) {
    this.masterObj = masterObj;
    this.settingObj = settingObj;
  }
  set(key, value, defaultValue = void 0) {
    this.settingObj[key] = value || defaultValue;
  }
  init(key, ...args) {
    if (!this.has(key) || !this.settingObj[key]) {
      const arr = key.split(DELEGATE_SPLIT);
      const obj = this.masterObj.refs[arr[0]] || this.masterObj[arr[0]] || this.masterObj;
      const method = arr.pop();
      if (obj[method]) {
        const value = obj[method].apply(obj, args);
        this.set(key, value);
      }
    }
  }
  get(key, defaultValue = "") {
    this.init(key, defaultValue);
    return this.settingObj[key] || defaultValue;
  }
  has(key) {
    return !!this.settingObj[key];
  }
}
const CHECK_EVENT_PATTERN = /^(click|mouse(down|up|move|enter|leave)|touch(start|move|end)|key(down|up|press)|contextmenu|change|input)/ig;
const CHECK_LOAD_PATTERN = /^load (.*)/ig;
const EVENT_SAPARATOR = " ";
const META_KEYS = ["Control", "Shift", "Alt", "Meta"];
class EventMachin {
  constructor() {
    this.state = new State(this);
    this.refs = {};
    this.childComponents = this.components();
  }
  newChildComponents() {
    const childKeys = Object.keys(this.childComponents);
    childKeys.forEach((key) => {
      const Component = this.childComponents[key];
      this[key] = new Component(this);
    });
  }
  render() {
    this.$el = this.parseTemplate(this.template());
    this.refs.$el = this.$el;
    this.parseTarget();
    this.load();
    this.afterRender();
  }
  afterRender() {
  }
  components() {
    return {};
  }
  parseTemplate(html) {
    const $el = new Dom("div").html(html).firstChild();
    var refs = $el.findAll("[ref]");
    [...refs].forEach((node) => {
      const name = node.getAttribute("ref");
      this.refs[name] = new Dom(node);
    });
    return $el;
  }
  parseTarget() {
    const $el = this.$el;
    const targets = $el.findAll("[target]");
    [...targets].forEach((node) => {
      const targetComponentName = node.getAttribute("target");
      const refName = node.getAttribute("ref") || targetComponentName;
      var Component = this.childComponents[targetComponentName];
      var instance = new Component(this);
      this[refName] = instance;
      this.refs[refName] = instance.$el;
      if (instance) {
        instance.render();
        var $parent = new Dom(node.parentNode);
        $parent.replace(node, instance.$el.el);
      }
    });
  }
  load() {
    this.filterProps(CHECK_LOAD_PATTERN).forEach((callbackName) => {
      const elName = callbackName.split("load ")[1];
      if (this.refs[elName]) {
        this.refs[elName].html(this.parseTemplate(this[callbackName].call(this)));
      }
    });
  }
  template() {
    return "<div></div>";
  }
  initialize() {
  }
  initializeEvent() {
    this.initializeEventMachin();
    Object.keys(this.childComponents).forEach((key) => {
      if (this[key])
        this[key].initializeEvent();
    });
  }
  destroy() {
    this.destroyEventMachin();
    Object.keys(this.childComponents).forEach((key) => {
      if (this[key])
        this[key].destroy();
    });
  }
  destroyEventMachin() {
    this.removeEventAll();
  }
  initializeEventMachin() {
    this.filterProps(CHECK_EVENT_PATTERN).forEach(this.parseEvent.bind(this));
  }
  collectProps() {
    if (!this.collapsedProps) {
      var p = this.__proto__;
      var results = [];
      do {
        results.push(...Object.getOwnPropertyNames(p));
        p = p.__proto__;
      } while (p);
      this.collapsedProps = results;
    }
    return this.collapsedProps;
  }
  filterProps(pattern) {
    return this.collectProps().filter((key) => {
      return key.match(pattern);
    });
  }
  parseEvent(key) {
    let arr = key.split(EVENT_SAPARATOR);
    this.bindingEvent(arr, this[key].bind(this));
  }
  getDefaultDomElement(dom) {
    let el;
    if (dom) {
      el = this.refs[dom] || this[dom] || window[dom];
    } else {
      el = this.el || this.$el || this.$root;
    }
    if (el instanceof Dom) {
      return el.getElement();
    }
    return el;
  }
  getDefaultEventObject(eventName) {
    let arr = eventName.split(".");
    const realEventName = arr.shift();
    const isControl = arr.includes("Control");
    const isShift = arr.includes("Shift");
    const isAlt = arr.includes("Alt");
    const isMeta = arr.includes("Meta");
    arr = arr.filter((code) => {
      return META_KEYS.includes(code) === false;
    });
    const checkMethodList = arr.filter((code) => {
      return !!this[code];
    });
    arr = arr.filter((code) => {
      return checkMethodList.includes(code) === false;
    }).map((code) => {
      return code.toLowerCase();
    });
    return {
      eventName: realEventName,
      isControl,
      isShift,
      isAlt,
      isMeta,
      codes: arr,
      checkMethodList
    };
  }
  bindingEvent([eventName, dom, ...delegate], callback) {
    dom = this.getDefaultDomElement(dom);
    let eventObject = this.getDefaultEventObject(eventName);
    eventObject.dom = dom;
    eventObject.delegate = delegate.join(EVENT_SAPARATOR);
    this.addEvent(eventObject, callback);
  }
  matchPath(el, selector) {
    if (el) {
      if (el.matches(selector)) {
        return el;
      }
      return this.matchPath(el.parentElement, selector);
    }
    return null;
  }
  getBindings() {
    if (!this._bindings) {
      this.initBindings();
    }
    return this._bindings;
  }
  addBinding(obj) {
    this.getBindings().push(obj);
  }
  initBindings() {
    this._bindings = [];
  }
  checkEventType(e, eventObject) {
    var onlyControl = eventObject.isControl ? e.ctrlKey : true;
    var onlyShift = eventObject.isShift ? e.shiftKey : true;
    var onlyAlt = eventObject.isAlt ? e.altKey : true;
    var onlyMeta = eventObject.isMeta ? e.metaKey : true;
    var hasKeyCode = true;
    if (eventObject.codes.length) {
      hasKeyCode = eventObject.codes.includes(e.code.toLowerCase()) || eventObject.codes.includes(e.key.toLowerCase());
    }
    var isAllCheck = true;
    if (eventObject.checkMethodList.length) {
      isAllCheck = eventObject.checkMethodList.every((method) => {
        return this[method].call(this, e);
      });
    }
    return onlyControl && onlyAlt && onlyShift && onlyMeta && hasKeyCode && isAllCheck;
  }
  makeCallback(eventObject, callback) {
    if (eventObject.delegate) {
      return (e) => {
        e.xy = Event.posXY(e);
        if (this.checkEventType(e, eventObject)) {
          const delegateTarget = this.matchPath(e.target || e.srcElement, eventObject.delegate);
          if (delegateTarget) {
            e.delegateTarget = delegateTarget;
            e.$delegateTarget = new Dom(delegateTarget);
            return callback(e);
          }
        }
      };
    } else {
      return (e) => {
        e.xy = Event.posXY(e);
        if (this.checkEventType(e, eventObject)) {
          return callback(e);
        }
      };
    }
  }
  addEvent(eventObject, callback) {
    eventObject.callback = this.makeCallback(eventObject, callback);
    this.addBinding(eventObject);
    var options = true;
    if (eventObject.eventName === "touchstart") {
      options = { passive: true };
    }
    Event.addEvent(eventObject.dom, eventObject.eventName, eventObject.callback, options);
  }
  removeEventAll() {
    this.getBindings().forEach((obj) => {
      this.removeEvent(obj);
    });
    this.initBindings();
  }
  removeEvent({ eventName, dom, callback }) {
    Event.removeEvent(dom, eventName, callback);
  }
}
const CHECK_STORE_EVENT_PATTERN = /^@/;
class UIElement extends EventMachin {
  constructor(opt) {
    super(opt);
    this.opt = opt || {};
    if (opt && opt.$store) {
      this.$store = opt.$store;
    }
    this.initialize();
    this.initializeStoreEvent();
  }
  initializeStoreEvent() {
    this.storeEvents = {};
    this.filterProps(CHECK_STORE_EVENT_PATTERN).forEach((key) => {
      const arr = key.split("@");
      arr.shift();
      const event = arr.join("@");
      this.storeEvents[event] = this[key].bind(this);
      this.$store.on(event, this.storeEvents[event]);
    });
  }
  destoryStoreEvent() {
    Object.keys(this.storeEvents).forEach((event) => {
      this.$store.off(event, this.storeEvents[event]);
    });
  }
}
function isUndefined(v) {
  return typeof v == "undefined" || v == null;
}
class ColorManager extends BaseModule {
  initialize() {
    super.initialize();
    this.$store.rgb = {};
    this.$store.hsl = {};
    this.$store.hsv = {};
    this.$store.alpha = 1;
    this.$store.format = "hex";
  }
  "/changeFormat"($store, format2) {
    $store.format = format2;
    $store.emit("changeFormat");
  }
  "/initColor"($store, colorObj, source2) {
    $store.dispatch("/changeColor", colorObj, source2, true);
    $store.emit("initColor");
  }
  "/changeColor"($store, colorObj, source2, isNotEmit) {
    colorObj = colorObj || "#FF0000";
    if (typeof colorObj == "string") {
      colorObj = Color$1.parse(colorObj);
    }
    colorObj.source = colorObj.source || source2;
    $store.alpha = isUndefined(colorObj.a) ? $store.alpha : colorObj.a;
    $store.format = colorObj.type != "hsv" ? colorObj.type || $store.format : $store.format;
    if (colorObj.type == "hsl") {
      $store.hsl = Object.assign($store.hsl, colorObj);
      $store.rgb = Color$1.HSLtoRGB($store.hsl);
      $store.hsv = Color$1.HSLtoHSV(colorObj);
    } else if (colorObj.type == "hex") {
      $store.rgb = Object.assign($store.rgb, colorObj);
      $store.hsl = Color$1.RGBtoHSL($store.rgb);
      $store.hsv = Color$1.RGBtoHSV(colorObj);
    } else if (colorObj.type == "rgb") {
      $store.rgb = Object.assign($store.rgb, colorObj);
      $store.hsl = Color$1.RGBtoHSL($store.rgb);
      $store.hsv = Color$1.RGBtoHSV(colorObj);
    } else if (colorObj.type == "hsv") {
      $store.hsv = Object.assign($store.hsv, colorObj);
      $store.rgb = Color$1.HSVtoRGB($store.hsv);
      $store.hsl = Color$1.HSVtoHSL($store.hsv);
    }
    if (!isNotEmit) {
      $store.emit("changeColor", colorObj.source);
    }
  }
  "/getHueColor"($store) {
    return HueColor.checkHueColor($store.hsv.h / 360);
  }
  "/toString"($store, type) {
    type = type || $store.format;
    var colorObj = $store[type] || $store.rgb;
    return Color$1.format(__spreadProps(__spreadValues({}, colorObj), {
      a: $store.alpha
    }), type);
  }
  "/toColor"($store, type) {
    type = type || $store.format;
    if (type == "rgb") {
      return $store.dispatch("/toRGB");
    } else if (type == "hsl") {
      return $store.dispatch("/toHSL");
    } else if (type == "hex") {
      return $store.dispatch("/toHEX");
    }
    return $store.dispatch("/toString", type);
  }
  "/toRGB"($store) {
    return $store.dispatch("/toString", "rgb");
  }
  "/toHSL"($store) {
    return $store.dispatch("/toString", "hsl");
  }
  "/toHEX"($store) {
    return $store.dispatch("/toString", "hex").toUpperCase();
  }
}
class BaseStore {
  constructor(opt) {
    this.callbacks = [];
    this.actions = [];
    this.modules = opt.modules || [];
    this.initialize();
  }
  initialize() {
    this.initializeModule();
  }
  initializeModule() {
    this.modules.forEach((Module) => {
      new Module(this);
    });
  }
  action(action, context) {
    this.actions[action] = { context, callback: context[action] };
  }
  dispatch(action) {
    var args = [...arguments];
    var action = args.shift();
    var m = this.actions[action];
    if (m) {
      return m.callback.apply(m.context, [this, ...args]);
    }
  }
  module(ModuleObject) {
  }
  on(event, callback) {
    this.callbacks.push({ event, callback });
  }
  off(event, callback) {
    if (arguments.length == 0) {
      this.callbacks = [];
    } else if (arguments.length == 1) {
      this.callbacks = this.callbacks.filter((f) => {
        return f.event != event;
      });
    } else if (arguments.length == 2) {
      this.callbacks = this.callbacks.filter((f) => {
        return f.event != event && f.callback != callback;
      });
    }
  }
  emit() {
    var args = [...arguments];
    var event = args.shift();
    this.callbacks.filter((f) => {
      return f.event == event;
    }).forEach((f) => {
      if (f && typeof f.callback == "function") {
        f.callback(...args);
      }
    });
  }
}
class BaseColorPicker extends UIElement {
  constructor(opt) {
    super(opt);
    this.isColorPickerShow = false;
    this.isShortCut = false;
    this.hideDelay = +(typeof this.opt.hideDeplay == "undefined" ? 2e3 : this.opt.hideDelay);
    this.timerCloseColorPicker;
    this.autoHide = this.opt.autoHide || true;
    this.outputFormat = this.opt.outputFormat;
    this.$checkColorPickerClass = this.checkColorPickerClass.bind(this);
  }
  initialize() {
    this.$body = null;
    this.$root = null;
    this.$store = new BaseStore({
      modules: [
        ColorManager,
        ColorSetsList
      ]
    });
    this.callbackChange = () => {
      this.callbackColorValue();
    };
    this.callbackLastUpdate = () => {
      this.callbackLastUpdateColorValue();
    };
    this.callbackAddCurrentColor = (color) => {
      this.callbackAddCurrentColorValue(color);
    };
    this.colorpickerShowCallback = function() {
    };
    this.colorpickerHideCallback = function() {
    };
    this.colorpickerLastUpdateCallback = function() {
    };
    this.colorpickerAddCurrentColorCallback = function() {
    };
    this.$body = new Dom(this.getContainer());
    this.$root = new Dom("div", "easylogic-colorpicker", {
      tabIndex: -1
    });
    if (this.opt.position == "inline") {
      this.$body.append(this.$root);
    }
    if (this.opt.type) {
      this.$root.addClass(this.opt.type);
    }
    if (this.opt.hideInformation) {
      this.$root.addClass("hide-information");
    }
    if (this.opt.hideColorsets) {
      this.$root.addClass("hide-colorsets");
    }
    this.$arrow = new Dom("div", "arrow");
    this.$root.append(this.$arrow);
    if (this.opt.colorSets) {
      this.$store.dispatch("/setUserPalette", this.opt.colorSet);
    } else if (isFunction(this.opt.onRetrievePreset)) {
      this.$store.dispatch("/setUserPalette", this.opt.onRetrievePreset());
    } else {
      this.$store.dispatch("/setUserPalette", []);
    }
    this.render();
    this.$root.append(this.$el);
    this.initColorWithoutChangeEvent(this.opt.color);
    this.initializeEvent();
  }
  initColorWithoutChangeEvent(color) {
    this.$store.dispatch("/initColor", color);
  }
  show(opt, color, showCallback, hideCallback, lastUpdateCallback, addCurrentColorCallback) {
    this.colorpickerShowCallback = showCallback;
    this.colorpickerHideCallback = hideCallback;
    this.colorpickerLastUpdateCallback = lastUpdateCallback;
    this.colorpickerAddCurrentColorCallback = addCurrentColorCallback;
    this.$root.css(this.getInitalizePosition()).show();
    this.isColorPickerShow = true;
    this.isShortCut = opt.isShortCut || false;
    this.outputFormat = opt.outputFormat;
    this.hideDelay = +(typeof opt.hideDelay == "undefined" ? 2e3 : opt.hideDelay);
    if (this.hideDelay > 0) {
      this.setHideDelay(this.hideDelay);
    }
    this.$root.appendTo(this.$body);
    this.definePosition(opt);
    this.initColorWithoutChangeEvent(color);
  }
  initColor(newColor, format2) {
    this.$store.dispatch("/changeColor", newColor, format2);
  }
  hide() {
    if (this.isColorPickerShow) {
      this.$root.hide();
      this.$root.remove();
      this.isColorPickerShow = false;
      this.callbackHideColorValue();
    }
  }
  setColorsInPalette(colors = []) {
    this.$store.dispatch("/setCurrentColorAll", colors);
  }
  setUserPalette(list = []) {
    this.$store.dispatch("/setUserPalette", list);
  }
  getOption(key) {
    return this.opt[key];
  }
  setOption(key, value) {
    this.opt[key] = value;
  }
  isType(key) {
    return this.getOption("type") == key;
  }
  isPaletteType() {
    return this.isType("palette");
  }
  isSketchType() {
    return this.isType("sketch");
  }
  getContainer() {
    return this.opt.container || document.body;
  }
  getColor(type) {
    return this.$store.dispatch("/toColor", type);
  }
  definePositionForArrow(opt, elementScreenLeft, elementScreenTop) {
  }
  definePosition(opt) {
    var width = this.$root.width();
    var height = this.$root.height();
    var elementScreenLeft = opt.left - this.$body.scrollLeft();
    if (width + elementScreenLeft > window.innerWidth) {
      elementScreenLeft -= width + elementScreenLeft - window.innerWidth;
    }
    if (elementScreenLeft < 0) {
      elementScreenLeft = 0;
    }
    var elementScreenTop = opt.top - this.$body.scrollTop();
    if (height + elementScreenTop > window.innerHeight) {
      elementScreenTop -= height + elementScreenTop - window.innerHeight;
    }
    if (elementScreenTop < 0) {
      elementScreenTop = 0;
    }
    this.$root.css({
      left: elementScreenLeft + "px",
      top: elementScreenTop + "px"
    });
  }
  getInitalizePosition() {
    if (this.opt.position == "inline") {
      return {
        position: "relative",
        left: "auto",
        top: "auto",
        display: "inline-block"
      };
    } else {
      return {
        position: "fixed",
        left: "-10000px",
        top: "-10000px"
      };
    }
  }
  isAbsolute() {
    return this.opt.position !== "inline";
  }
  "mouseup.isAbsolute document"(e) {
    this.__isMouseDown = false;
    if (this.checkInHtml(e.target))
      ;
    else if (this.checkColorPickerClass(e.target) == false) {
      this.hide();
    } else {
      if (!this.__isMouseIn) {
        clearTimeout(this.timerCloseColorPicker);
        this.timerCloseColorPicker = setTimeout(this.hide.bind(this), this.delayTime || this.hideDelay);
      }
    }
  }
  "keyup.isAbsolute.escape $root"(e) {
    this.hide();
  }
  "mouseover.isAbsolute $root"(e) {
    clearTimeout(this.timerCloseColorPicker);
  }
  "mousemove.isAbsolute $root"(e) {
    clearTimeout(this.timerCloseColorPicker);
  }
  "mouseenter.isAbsolute $root"(e) {
    clearTimeout(this.timerCloseColorPicker);
    this.__isMouseIn = true;
  }
  "mouseleave.isAbsolute $root"(e) {
    this.__isMouseIn = false;
    if (!this.__isMouseDown) {
      clearTimeout(this.timerCloseColorPicker);
      this.timerCloseColorPicker = setTimeout(this.hide.bind(this), this.delayTime || this.hideDelay);
    }
  }
  "mousedown.isAbsolute $root"(e) {
    this.__isMouseDown = true;
  }
  setHideDelay(delayTime) {
    this.delayTime = delayTime || 0;
  }
  runHideDelay() {
    if (this.isColorPickerShow) {
      this.setHideDelay();
    }
  }
  callbackColorValue(color) {
    color = color || this.getCurrentColor();
    if (typeof this.opt.onChange == "function") {
      this.opt.onChange.call(this, color);
    }
    if (typeof this.colorpickerShowCallback == "function") {
      this.colorpickerShowCallback(color);
    }
  }
  callbackLastUpdateColorValue(color) {
    color = color || this.getCurrentColor();
    if (typeof this.opt.onLastUpdate == "function") {
      this.opt.onLastUpdate.call(this, color);
    }
    if (typeof this.colorpickerLastUpdateCallback == "function") {
      this.colorpickerLastUpdateCallback(color);
    }
  }
  callbackAddCurrentColorValue(color) {
    if (typeof this.opt.onLastUpdate == "function") {
      this.opt.onAddPreset.call(this, color);
    }
    if (typeof this.colorpickerAddCurrentColorCallback == "function") {
      this.colorpickerAddCurrentColorCallback(color);
    }
  }
  callbackHideColorValue(color) {
    color = color || this.getCurrentColor();
    if (typeof this.opt.onHide == "function") {
      this.opt.onHide.call(this, color);
    }
    if (typeof this.colorpickerHideCallback == "function") {
      this.colorpickerHideCallback(color);
    }
  }
  getCurrentColor() {
    return this.$store.dispatch("/toColor", this.outputFormat);
  }
  checkColorPickerClass(el) {
    var hasColorView = new Dom(el).closest("codemirror-colorview");
    var hasColorPicker = new Dom(el).closest("easylogic-colorpicker");
    var hasCodeMirror = new Dom(el).closest("CodeMirror");
    el.nodeName == "HTML";
    return !!(hasColorPicker || hasColorView || hasCodeMirror);
  }
  checkInHtml(el) {
    var IsInHtml = el.nodeName == "HTML";
    return IsInHtml;
  }
  initializeStoreEvent() {
    super.initializeStoreEvent();
    this.$store.on("changeColor", this.callbackChange);
    this.$store.on("lastUpdateColor", this.callbackLastUpdate);
    this.$store.on("changeFormat", this.callbackChange);
    this.$store.on("addCurrentColor", this.callbackAddCurrentColor);
  }
  destroy() {
    super.destroy();
    this.$store.off("changeColor", this.callbackChange);
    this.$store.off("lastUpdateColor", this.callbackLastUpdate);
    this.$store.off("changeFormat", this.callbackChange);
    this.$store.off("addCurrentColor", this.callbackAddCurrentColor);
    this.callbackChange = void 0;
    this.callbackLastUpdate = void 0;
    this.callbackAddCurrentColor = void 0;
    this.colorpickerShowCallback = void 0;
    this.colorpickerHideCallback = void 0;
  }
}
class BaseBox extends UIElement {
  constructor(opt) {
    super(opt);
    this.source = "base-box";
  }
  refresh() {
  }
  refreshColorUI(e) {
  }
  changeColor(opt) {
    this.$store.dispatch("/changeColor", Object.assign({
      source: this.source
    }, opt || {}));
  }
  "mouseup document"(e) {
    this.onDragEnd(e);
  }
  "mousemove document"(e) {
    this.onDragMove(e);
  }
  "mousedown $bar"(e) {
    e.preventDefault();
    this.isDown = true;
  }
  "mousedown $container"(e) {
    this.isDown = true;
    this.onDragStart(e);
  }
  "touchend document"(e) {
    this.onDragEnd(e);
  }
  "touchmove document"(e) {
    this.onDragMove(e);
  }
  "touchstart $bar"(e) {
    e.preventDefault();
    this.isDown = true;
  }
  "touchstart $container"(e) {
    this.onDragStart(e);
  }
  onDragStart(e) {
    this.isDown = true;
    this.refreshColorUI(e);
  }
  onDragMove(e) {
    if (this.isDown) {
      this.refreshColorUI(e);
    }
  }
  onDragEnd(e) {
    if (this.isDown) {
      this.$store.emit("lastUpdateColor");
      this.isDown = false;
    }
  }
  "@changeColor"(sourceType) {
    if (this.source != sourceType) {
      this.refresh();
    }
  }
  "@initColor"() {
    this.refresh();
  }
}
class BaseSlider extends BaseBox {
  constructor(opt) {
    super(opt);
    this.minValue = 0;
    this.maxValue = 1;
    this.source = "base-slider";
  }
  getMinMaxPosition() {
    var min2 = this.getMinPosition();
    var width = this.getMaxDist();
    var max2 = min2 + width;
    return { min: min2, max: max2, width };
  }
  getCurrent(value) {
    return min + this.getMaxDist() * value;
  }
  getMinPosition() {
    return this.refs.$container.offset().left;
  }
  getMaxDist() {
    return this.state.get("$container.width");
  }
  getDist(current) {
    var { min: min2, max: max2 } = this.getMinMaxPosition();
    var dist;
    if (current < min2) {
      dist = 0;
    } else if (current > max2) {
      dist = 100;
    } else {
      dist = (current - min2) / (max2 - min2) * 100;
    }
    return dist;
  }
  getCaculatedDist(e) {
    var current = e ? this.getMousePosition(e) : this.getCurrent(this.getDefaultValue() / this.maxValue);
    var dist = this.getDist(current);
    return dist;
  }
  getDefaultValue() {
    return 0;
  }
  setMousePosition(x) {
    this.refs.$bar.css({ left: x + "px" });
  }
  getMousePosition(e) {
    return Event.pos(e).pageX;
  }
  refresh() {
    this.setColorUI();
  }
  setColorUI(v) {
    v = v || this.getDefaultValue();
    if (this.lastV === v)
      return true;
    this.lastV = v;
    if (v <= this.minValue) {
      this.refs.$bar.addClass("first").removeClass("last");
    } else if (v >= this.maxValue) {
      this.refs.$bar.addClass("last").removeClass("first");
    } else {
      this.refs.$bar.removeClass("last").removeClass("first");
    }
    this.setMousePosition(this.getMaxDist() * ((v || 0) / this.maxValue));
  }
}
class Value extends BaseSlider {
  constructor(opt) {
    super(opt);
    this.minValue = 0;
    this.maxValue = 1;
    this.source = "value-control";
  }
  template() {
    return `
            <div class="value">
                <div ref="$container" class="value-container">
                    <div ref="$bar" class="drag-bar"></div>
                </div>
            </div>
        `;
  }
  setBackgroundColor() {
    this.refs.$container.css("background-color", this.$store.dispatch("/toRGB"));
  }
  refresh() {
    super.refresh();
    this.setBackgroundColor();
  }
  getDefaultValue() {
    return this.$store.hsv.v;
  }
  refreshColorUI(e) {
    var dist = this.getCaculatedDist(e);
    this.setColorUI(dist / 100 * this.maxValue);
    this.changeColor({
      type: "hsv",
      v: dist / 100 * this.maxValue
    });
  }
}
class Opacity$1 extends BaseSlider {
  constructor(opt) {
    super(opt);
    this.minValue = 0;
    this.maxValue = 1;
    this.source = "opacity-control";
  }
  template() {
    return `
        <div class="opacity">
            <div ref="$container" class="opacity-container">
                <div ref="$colorbar" class="color-bar"></div>
                <div ref="$bar" class="drag-bar2"></div>
            </div>
        </div>
        `;
  }
  refresh() {
    super.refresh();
    this.setOpacityColorBar();
  }
  setOpacityColorBar() {
    var rgb2 = Object.assign({}, this.$store.rgb);
    rgb2.a = 0;
    var start = Color$1.format(rgb2, "rgb");
    rgb2.a = 1;
    var end = Color$1.format(rgb2, "rgb");
    this.setOpacityColorBarBackground(start, end);
  }
  setOpacityColorBarBackground(start, end) {
    this.refs.$colorbar.css("background", "linear-gradient(to right, " + start + ", " + end + ")");
  }
  getDefaultValue() {
    return this.$store.alpha;
  }
  refreshColorUI(e) {
    var dist = this.getCaculatedDist(e);
    this.setColorUI(dist / 100 * this.maxValue);
    this.changeColor({
      a: Math.floor(dist) / 100 * this.maxValue
    });
  }
}
const source$7 = "macos-control";
class ColorControl$6 extends UIElement {
  components() {
    return { Value, Opacity: Opacity$1 };
  }
  template() {
    return `
        <div class="control">
            <div target="Value" ></div>
            <div target="Opacity" ></div>
            <div ref="$controlPattern" class="empty"></div>
            <div ref="$controlColor" class="color"></div>
        </div>
        `;
  }
  setBackgroundColor() {
    this.refs.$controlColor.css("background-color", this.$store.dispatch("/toRGB"));
  }
  refresh() {
    this.setColorUI();
    this.setBackgroundColor();
  }
  setColorUI() {
    this.Value.setColorUI();
    this.Opacity.setColorUI();
  }
  "@changeColor"(sourceType) {
    if (source$7 != sourceType) {
      this.refresh();
    }
  }
  "@initColor"() {
    this.refresh();
  }
}
class ColorWheel extends UIElement {
  constructor(opt) {
    super(opt);
    this.width = 214;
    this.height = 214;
    this.thinkness = 0;
    this.half_thinkness = 0;
    this.source = "colorwheel";
  }
  template() {
    return `
        <div class="wheel">
            <canvas class="wheel-canvas" ref="$colorwheel" ></canvas>
            <div class="wheel-canvas" ref="$valuewheel" ></div>
            <div class="drag-pointer" ref="$drag_pointer"></div>
        </div>
        `;
  }
  refresh(isEvent) {
    this.setColorUI(isEvent);
  }
  setColorUI(isEvent) {
    this.renderCanvas();
    this.renderValue();
    this.setHueColor(null, isEvent);
  }
  renderValue() {
    var value = 1 - this.$store.hsv.v;
    this.refs.$valuewheel.css({
      "background-color": `rgba(0, 0, 0, ${value})`
    });
  }
  renderWheel(width, height) {
    if (this.width && !width)
      width = this.width;
    if (this.height && !height)
      height = this.height;
    const $canvas = new Dom("canvas");
    const context = $canvas.el.getContext("2d");
    $canvas.el.width = width;
    $canvas.el.height = height;
    $canvas.css({ width: width + "px", height: height + "px" });
    var img = context.getImageData(0, 0, width, height);
    var pixels = img.data;
    var half_width = Math.floor(width / 2);
    var half_height = Math.floor(height / 2);
    var radius = width > height ? half_height : half_width;
    var cx = half_width;
    var cy = half_height;
    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        var rx = x - cx + 1, ry = y - cy + 1, d = rx * rx + ry * ry, hue2 = caculateAngle(rx, ry);
        var rgb2 = Color$1.HSVtoRGB(hue2, Math.min(Math.sqrt(d) / radius, 1), 1);
        var index2 = (y * width + x) * 4;
        pixels[index2] = rgb2.r;
        pixels[index2 + 1] = rgb2.g;
        pixels[index2 + 2] = rgb2.b;
        pixels[index2 + 3] = 255;
      }
    }
    context.putImageData(img, 0, 0);
    if (this.thinkness > 0) {
      context.globalCompositeOperation = "destination-out";
      context.fillStyle = "black";
      context.beginPath();
      context.arc(cx, cy, radius - this.thinkness, 0, Math.PI * 2);
      context.closePath();
      context.fill();
    }
    return $canvas;
  }
  renderCanvas() {
    if (this.$store.createdWheelCanvas)
      return;
    const $canvas = this.refs.$colorwheel;
    const context = $canvas.el.getContext("2d");
    let [width, height] = $canvas.size();
    if (this.width && !width)
      width = this.width;
    if (this.height && !height)
      height = this.height;
    $canvas.el.width = width;
    $canvas.el.height = height;
    $canvas.css({ width: width + "px", height: height + "px" });
    var $wheelCanvas = this.renderWheel(width, height);
    context.drawImage($wheelCanvas.el, 0, 0);
    this.$store.createdWheelCanvas = true;
  }
  getDefaultValue() {
    return this.$store.hsv.h;
  }
  getDefaultSaturation() {
    return this.$store.hsv.s;
  }
  getCurrentXY(e, angle, radius, centerX, centerY) {
    return e ? Event.posXY(e) : getXYInCircle(angle, radius, centerX, centerY);
  }
  getRectangle() {
    var width = this.state.get("$el.width");
    var height = this.state.get("$el.height");
    var radius = this.state.get("$colorwheel.width") / 2;
    var minX = this.refs.$el.offset().left;
    var centerX = minX + width / 2;
    var minY = this.refs.$el.offset().top;
    var centerY = minY + height / 2;
    return { minX, minY, width, height, radius, centerX, centerY };
  }
  setHueColor(e, isEvent) {
    if (!this.state.get("$el.width"))
      return;
    var { minX, minY, radius, centerX, centerY } = this.getRectangle();
    var { x, y } = this.getCurrentXY(e, this.getDefaultValue(), this.getDefaultSaturation() * radius, centerX, centerY);
    var rx = x - centerX, ry = y - centerY, d = rx * rx + ry * ry, hue2 = caculateAngle(rx, ry);
    if (d > radius * radius) {
      var { x, y } = this.getCurrentXY(null, hue2, radius, centerX, centerY);
    }
    var saturation2 = Math.min(Math.sqrt(d) / radius, 1);
    this.refs.$drag_pointer.css({
      left: x - minX + "px",
      top: y - minY + "px"
    });
    if (!isEvent) {
      this.changeColor({
        type: "hsv",
        h: hue2,
        s: saturation2
      });
    }
  }
  changeColor(opt) {
    this.$store.dispatch("/changeColor", Object.assign({
      source: this.source
    }, opt || {}));
  }
  "@changeColor"(sourceType) {
    if (this.source != sourceType) {
      this.refresh(true);
    }
  }
  "@initColor"() {
    this.refresh(true);
  }
  "mouseup document"(e) {
    if (this.isDown) {
      this.isDown = false;
      this.$store.emit("lastUpdateColor");
    }
  }
  "mousemove document"(e) {
    if (this.isDown) {
      this.setHueColor(e);
    }
  }
  "mousedown $drag_pointer"(e) {
    e.preventDefault();
    this.isDown = true;
  }
  "mousedown $el"(e) {
    this.isDown = true;
    this.setHueColor(e);
  }
  "touchend document"(e) {
    if (this.isDown) {
      this.isDown = false;
      this.$store.emit("lastUpdateColor");
    }
  }
  "touchmove document"(e) {
    if (this.isDown) {
      this.setHueColor(e);
    }
  }
  "touchstart $drag_pointer"(e) {
    e.preventDefault();
    this.isDown = true;
  }
  "touchstart $el"(e) {
    e.preventDefault();
    this.isDown = true;
    this.setHueColor(e);
  }
}
const source$6 = "chromedevtool-information";
class ColorInformation extends UIElement {
  template() {
    return `
        <div class="information hex">
            <div ref="$informationChange" class="information-change">
                <button ref="$formatChangeButton" type="button" class="format-change-button arrow-button"></button>
            </div>
            <div class="information-item hex">
                <div class="input-field hex">
                    <input ref="$hexCode" class="input" type="text" />
                    <div class="title">HEX</div>
                </div>
            </div>
            <div class="information-item rgb">
                <div class="input-field rgb-r">
                    <input ref="$rgb_r" class="input" type="number" step="1" min="0" max="255" />
                    <div class="title">R</div>
                </div>
                <div class="input-field rgb-g">
                    <input ref="$rgb_g" class="input" type="number" step="1" min="0" max="255" />
                    <div class="title">G</div>
                </div>
                <div class="input-field rgb-b">
                    <input ref="$rgb_b" class="input" type="number" step="1" min="0" max="255" />
                    <div class="title">B</div>
                </div>          
                <div class="input-field rgb-a">
                    <input ref="$rgb_a" class="input" type="number" step="0.01" min="0" max="1" />
                    <div class="title">A</div>
                </div>                                                            
            </div>
            <div class="information-item hsl">
                <div class="input-field hsl-h">
                    <input ref="$hsl_h" class="input" type="number" step="1" min="0" max="360" />
                    <div class="title">H</div>
                </div>
                <div class="input-field hsl-s">
                    <input ref="$hsl_s" class="input" type="number" step="1" min="0" max="100" />
                    <div class="postfix">%</div>
                    <div class="title">S</div>
                </div>
                <div class="input-field hsl-l">
                    <input ref="$hsl_l" class="input" type="number" step="1" min="0" max="100" />
                    <div class="postfix">%</div>                        
                    <div class="title">L</div>
                </div>
                <div class="input-field hsl-a">
                    <input ref="$hsl_a" class="input" type="number" step="0.01" min="0" max="1" />
                    <div class="title">A</div>
                </div>
            </div>
        </div>
        `;
  }
  setCurrentFormat(format2) {
    this.format = format2;
    this.initFormat();
  }
  initFormat() {
    var current_format = this.format || "hex";
    ["hex", "rgb", "hsl"].filter((it) => it !== current_format).forEach((formatString) => {
      this.$el.removeClass(formatString);
    });
    this.$el.addClass(current_format);
  }
  nextFormat() {
    var current_format = this.format || "hex";
    var next_format = "hex";
    if (current_format == "hex") {
      next_format = "rgb";
    } else if (current_format == "rgb") {
      next_format = "hsl";
    } else if (current_format == "hsl") {
      next_format = "hex";
    }
    this.format = next_format;
    this.initFormat();
    this.$store.dispatch("/changeFormat", this.format);
    this.$store.emit("lastUpdateColor");
  }
  goToFormat(to_format) {
    this.format = to_format;
    if (to_format === "rgb" || to_format === "hsl") {
      this.initFormat();
    }
    this.$store.dispatch("/changeFormat", this.format);
  }
  getFormat() {
    return this.format || "hex";
  }
  checkNumberKey(e) {
    var code = e.which, isExcept = false;
    if (code == 37 || code == 39 || code == 8 || code == 46 || code == 9)
      isExcept = true;
    if (!isExcept && (code < 48 || code > 57))
      return false;
    return true;
  }
  checkNotNumberKey(e) {
    return !this.checkNumberKey(e);
  }
  changeRgbColor() {
    this.$store.dispatch("/changeColor", {
      type: "rgb",
      r: this.refs.$rgb_r.int(),
      g: this.refs.$rgb_g.int(),
      b: this.refs.$rgb_b.int(),
      a: this.refs.$rgb_a.float(),
      source: source$6
    });
    this.$store.emit("lastUpdateColor");
  }
  changeHslColor() {
    this.$store.dispatch("/changeColor", {
      type: "hsl",
      h: this.refs.$hsl_h.int(),
      s: this.refs.$hsl_s.int(),
      l: this.refs.$hsl_l.int(),
      a: this.refs.$hsl_a.float(),
      source: source$6
    });
    this.$store.emit("lastUpdateColor");
  }
  "@changeColor"(sourceType) {
    if (source$6 != sourceType) {
      this.refresh();
    }
  }
  "@initColor"() {
    this.refresh();
  }
  "input $rgb_r"(e) {
    this.changeRgbColor();
  }
  "input $rgb_g"(e) {
    this.changeRgbColor();
  }
  "input $rgb_b"(e) {
    this.changeRgbColor();
  }
  "input $rgb_a"(e) {
    this.changeRgbColor();
  }
  "input $hsl_h"(e) {
    this.changeHslColor();
  }
  "input $hsl_s"(e) {
    this.changeHslColor();
  }
  "input $hsl_l"(e) {
    this.changeHslColor();
  }
  "input $hsl_a"(e) {
    this.changeHslColor();
  }
  "keyup $hexCode"(e) {
    var code = this.refs.$hexCode.val();
    if (code.charAt(0) == "#" && (code.length == 7 || code.length === 9)) {
      this.$store.dispatch("/changeColor", code, source$6);
      this.$store.emit("lastUpdateColor");
    }
  }
  "click $formatChangeButton"(e) {
    this.nextFormat();
  }
  "click $el .information-item.hex .input-field .title"(e) {
    this.goToFormat("hex");
  }
  "click $el .information-item.rgb .input-field .title"(e) {
    this.goToFormat("hsl");
  }
  "click $el .information-item.hsl .input-field .title"(e) {
    this.goToFormat("rgb");
  }
  setRGBInput() {
    this.refs.$rgb_r.val(this.$store.rgb.r);
    this.refs.$rgb_g.val(this.$store.rgb.g);
    this.refs.$rgb_b.val(this.$store.rgb.b);
    this.refs.$rgb_a.val(this.$store.alpha);
  }
  setHSLInput() {
    this.refs.$hsl_h.val(this.$store.hsl.h);
    this.refs.$hsl_s.val(this.$store.hsl.s);
    this.refs.$hsl_l.val(this.$store.hsl.l);
    this.refs.$hsl_a.val(this.$store.alpha);
  }
  setHexInput() {
    this.refs.$hexCode.val(this.$store.dispatch("/toHEX"));
  }
  refresh() {
    this.setCurrentFormat(this.$store.format);
    this.setRGBInput();
    this.setHSLInput();
    this.setHexInput();
  }
}
const DATA_COLORSETS_INDEX = "data-colorsets-index";
class ColorSetsChooser extends UIElement {
  template() {
    return `
            <div class="color-chooser">
                <div class="color-chooser-container">
                    <div class="colorsets-item colorsets-item-header">
                        <h1 class="title">Color Palettes</h1>
                        <span ref="$toggleButton" class="items">&times;</span>
                    </div>
                    <div ref="$colorsetsList" class="colorsets-list"></div>
                </div>
            </div>
        `;
  }
  refresh() {
    this.load();
  }
  "@changeCurrentColorSets"() {
    this.refresh();
  }
  "@toggleColorChooser"() {
    this.toggle();
  }
  "load $colorsetsList"() {
    const colorSets = this.$store.dispatch("/getColorSetsList");
    return `
            <div>
                ${colorSets.map((element, index2) => {
      return `
                        <div class="colorsets-item" data-colorsets-index="${index2}" >
                            <h1 class="title">${element.name}</h1>
                            <div class="items">
                                <div>
                                    ${element.colors.filter((color, i) => i < 5).map((color) => {
        color = color || "rgba(255, 255, 255, 1)";
        return `<div class="color-item" title="${color}">
                                                <div class="color-view" style="background-color: ${color}"></div>
                                            </div>`;
      }).join("")}
                                </div>
                            </div>
                        </div>`;
    }).join("")}
            </div>
        `;
  }
  show() {
    this.$el.addClass("open");
  }
  hide() {
    this.$el.removeClass("open");
  }
  toggle() {
    this.$el.toggleClass("open");
  }
  "click $toggleButton"(e) {
    this.toggle();
  }
  "click $colorsetsList .colorsets-item"(e) {
    const $item = e.$delegateTarget;
    if ($item) {
      const index2 = parseInt($item.attr(DATA_COLORSETS_INDEX));
      this.$store.dispatch("/setCurrentColorSets", index2);
      this.hide();
    }
  }
  destroy() {
    super.destroy();
    this.hide();
  }
}
class CurrentColorSets extends UIElement {
  template() {
    return `
            <div class="colorsets">
                <div class="menu" title="Open Color Palettes">
                    <button ref="$colorSetsChooseButton" type="button" class="color-sets-choose-btn arrow-button"></button>
                </div>
                <div ref="$colorSetsColorList" class="color-list"></div>
            </div>
        `;
  }
  "load $colorSetsColorList"() {
    const currentColorSets = this.$store.dispatch("/getCurrentColorSets");
    const colors = this.$store.dispatch("/getCurrentColors");
    return `
            <div>
                <h6>${currentColorSets.name}</h6>
                <div class="current-color-sets">
                ${colors.map((color, i) => {
      return `<div class="color-item" title="${color}" data-index="${i}" data-color="${color}">
                        <div class="empty"></div>
                        <div class="color-view" style="background-color: ${color}"></div>
                    </div>`;
    }).join("")}   
                ${currentColorSets.edit ? `<div class="add-color-item">+</div>` : ""}         
                </div>
            </div>
            
        `;
  }
  refresh() {
    this.load();
  }
  addColor(color) {
    this.$store.dispatch("/addCurrentColor", color);
  }
  "@changeCurrentColorSets"() {
    this.refresh();
  }
  "click $colorSetsChooseButton"(e) {
    this.$store.emit("toggleColorChooser");
  }
  "contextmenu $colorSetsColorList"(e) {
    e.preventDefault();
    const currentColorSets = this.$store.dispatch("/getCurrentColorSets");
    if (!currentColorSets.edit) {
      return;
    }
    const $target = new Dom(e.target);
    const $item = $target.closest("color-item");
    if ($item) {
      const index2 = parseInt($item.attr("data-index"));
      this.$store.emit("showContextMenu", e, index2);
    } else {
      this.$store.emit("showContextMenu", e);
    }
  }
  "click $colorSetsColorList .add-color-item"(e) {
    this.addColor(this.$store.dispatch("/toColor"));
  }
  "click $colorSetsColorList .color-item"(e) {
    this.$store.dispatch("/changeColor", e.$delegateTarget.attr("data-color"));
    this.$store.emit("lastUpdateColor");
  }
}
class CurrentColorSetsContextMenu extends UIElement {
  template() {
    return `
            <ul class="colorsets-contextmenu">
                <li class="menu-item small-hide" data-type="remove-color">Remove color</li>
                <li class="menu-item small-hide" data-type="remove-all-to-the-right">Remove all to the right</li>
                <li class="menu-item" data-type="clear-palette">Clear palette</li>
            </ul>
        `;
  }
  show(e, index2) {
    const $event = Event.pos(e);
    this.$el.css({
      top: $event.clientY - 10 + "px",
      left: $event.clientX + "px"
    });
    this.$el.addClass("show");
    this.selectedColorIndex = index2;
    if (typeof this.selectedColorIndex == "undefined") {
      this.$el.addClass("small");
    } else {
      this.$el.removeClass("small");
    }
  }
  hide() {
    this.$el.removeClass("show");
  }
  runCommand(command) {
    switch (command) {
      case "remove-color":
        this.$store.dispatch("/removeCurrentColor", this.selectedColorIndex);
        break;
      case "remove-all-to-the-right":
        this.$store.dispatch("/removeCurrentColorToTheRight", this.selectedColorIndex);
        break;
      case "clear-palette":
        this.$store.dispatch("/clearPalette");
        break;
    }
  }
  "@showContextMenu"(e, index2) {
    this.show(e, index2);
  }
  "click $el .menu-item"(e) {
    e.preventDefault();
    this.runCommand(e.$delegateTarget.attr("data-type"));
    this.hide();
  }
}
class MacOSColorPicker extends BaseColorPicker {
  template() {
    return `
            <div class='colorpicker-body'>
                <div target="colorwheel"></div>
                <div target="control"></div>
                <div target="information"></div>
                <div target="currentColorSets"></div>
                <div target="colorSetsChooser"></div>
                <div target="contextMenu"></div>                
            </div>
        `;
  }
  components() {
    return {
      colorwheel: ColorWheel,
      control: ColorControl$6,
      information: ColorInformation,
      currentColorSets: CurrentColorSets,
      colorSetsChooser: ColorSetsChooser,
      contextMenu: CurrentColorSetsContextMenu
    };
  }
}
class Hue extends BaseSlider {
  constructor(opt) {
    super(opt);
    this.minValue = 0;
    this.maxValue = 360;
    this.source = "hue-control";
  }
  template() {
    return `
            <div class="hue"> 
                <div ref="$container" class="hue-container">
                    <div ref="$bar" class="drag-bar"></div>
                </div>
            </div>
        `;
  }
  getDefaultValue() {
    return this.$store.hsv.h;
  }
  refreshColorUI(e) {
    var dist = this.getCaculatedDist(e);
    const isDifferent = this.setColorUI(dist / 100 * this.maxValue);
    if (isDifferent !== true) {
      this.changeColor({
        h: dist / 100 * this.maxValue,
        type: "hsv"
      });
    }
  }
}
class HueScale extends BaseSlider {
  initialize() {
    super.initialize();
    this.minValue = 0;
    this.maxValue = 360;
    this.hueScaleDist = 0.05;
  }
  template() {
    return `
            <div class="hue-scale">
                <div ref="$container" class="hue-scale-container">
                    <div ref="$bar" class="drag-bar"></div>
                </div>
            </div>
        `;
  }
  getDefaultValue() {
    return this.$store.hsv.h;
  }
  getCalculatedDist(e) {
    var current = e ? this.getMousePosition(e) : this.getCurrent(this.getDefaultValue() / this.maxValue);
    var dist = this.getDist(current);
    return dist;
  }
  refreshColorUI(e) {
    var dist = this.getCalculatedDist(e);
    const isDifferent = this.setColorUI(dist / 100);
    if (isDifferent !== true) {
      this.changeColor({
        h: (this.minValue + this.fullDist * (dist / 100)) * 360,
        type: "hsv"
      });
    }
  }
  setColorUI(v) {
    let p;
    if (v) {
      p = this.minValue + v * this.fullDist;
      if (this.lastP === p)
        return true;
      this.lastP = p;
    } else {
      p = this.getDefaultValue() / 360;
      if (this.lastP === p)
        return true;
      this.lastP = p;
      let maxP = p + 0.05;
      let minP = p - 0.05;
      if (maxP > 1) {
        maxP = 1;
        minP = 1 - this.hueScaleDist * 2;
      } else if (minP < 0) {
        const dist = Math.abs(minP);
        minP = 0;
        maxP = maxP + dist;
      }
      const list = HueColor.getHueScale(p, minP, maxP);
      this.list = list;
      const minValue = list[0].start;
      const maxValue = list[list.length - 1].start;
      this.minValue = minValue;
      this.maxValue = maxValue;
      const fullDist = this.maxValue - this.minValue;
      this.fullDist = fullDist;
      const colorsteps = list.map((it) => {
        return {
          color: it.rgb,
          percent: (it.start - minValue) / fullDist * 100,
          unit: "%"
        };
      });
      this.refs.$container.css("background-image", `linear-gradient(to right, ${colorsteps.map((it) => `${it.color} ${it.percent}${it.unit}`).join(",")})`);
    }
    if (p <= this.minValue) {
      p = this.minValue;
      this.refs.$bar.addClass("first").removeClass("last");
    } else if (p >= this.maxValue) {
      p = this.maxValue;
      this.refs.$bar.addClass("last").removeClass("first");
    } else {
      this.refs.$bar.removeClass("last").removeClass("first");
    }
    this.setMousePosition(this.getMaxDist() * ((p - this.minValue) / this.fullDist));
  }
}
const source$5 = "chromedevtool-control";
class ColorControl$5 extends UIElement {
  components() {
    return { Hue, Opacity: Opacity$1, HueScale };
  }
  template() {
    return `
        <div class="control">
            <div target="Hue" ></div>
            <div target="HueScale" ></div>
            <div target="Opacity" ></div>
            <div ref="$controlPattern" class="empty"></div>
            <div ref="$controlColor" class="color"></div>
            <div ref="$controlPattern2" class="empty2"></div>
            <div ref="$controlColor2" class="color2"></div>            
        </div>
        `;
  }
  setBackgroundColor() {
    this.refs.$controlColor.css("background-color", this.$store.dispatch("/toRGB"));
  }
  setLastUpdateColor() {
    this.refs.$controlColor2.css("background-color", this.$store.dispatch("/toRGB"));
  }
  refresh() {
    this.setColorUI();
    this.setBackgroundColor();
  }
  setColorUI() {
    this.Hue.setColorUI();
    this.Opacity.setColorUI();
  }
  "@changeColor"(sourceType) {
    if (source$5 != sourceType) {
      this.refresh();
    }
  }
  "@lastUpdateColor"(sourceType) {
    if (source$5 != sourceType) {
      this.setLastUpdateColor();
    }
  }
  "@initColor"() {
    this.refresh();
  }
}
const source$4 = "chromedevtool-palette";
class ColorPalette extends UIElement {
  template() {
    return `
        <div class="color">
            <div ref="$saturation" class="saturation">
                <div ref="$value" class="value">
                    <div ref="$drag_pointer" class="drag-pointer" data-axis-value="all">
                        <div ref="$left_saturation" class="left-saturation" data-axis-value="saturation"></div>
                        <div ref="$right_saturation" class="right-saturation" data-axis-value="saturation"></div>
                        <div ref="$top_value" class="top-value" data-axis-value="value"></div>
                        <div ref="$bottom_value" class="bottom-value" data-axis-value="value"></div>
                    </div>
                </div>
            </div>        
        </div>        
        `;
  }
  setBackgroundColor(color) {
    this.$el.css("background-color", color);
  }
  refresh() {
    this.cacheSize();
    this.setColorUI();
  }
  calculateSV() {
    var pos = this.drag_pointer_pos || { x: 0, y: 0 };
    var width = this.state.get("$el.width");
    var height = this.state.get("$el.height");
    var s = pos.x / width;
    var v = (height - pos.y) / height;
    this.$store.dispatch("/changeColor", {
      type: "hsv",
      s,
      v,
      source: source$4
    });
  }
  setColorUI() {
    var x = this.w * this.$store.hsv.s, y = this.h * (1 - this.$store.hsv.v);
    this.refs.$drag_pointer.css({
      left: x + "px",
      top: y + "px"
    });
    this.drag_pointer_pos = { x, y };
    this.setBackgroundColor(this.$store.dispatch("/getHueColor"));
  }
  setSubColor(e) {
    const localX = e.pageX;
    const localY = e.pageY;
    const distX = localX - this.x;
    const distY = localY - this.y;
    var w = this.$el.contentWidth();
    var h = this.$el.contentHeight();
    var x = this.refs.$drag_pointer.cssFloat("left");
    var y = this.refs.$drag_pointer.cssFloat("top");
    if (this.axis === "saturation") {
      x += distX;
    } else if (this.axis === "value") {
      y += distY;
    }
    if (x < 0)
      x = 0;
    else if (x > w)
      x = w;
    if (y < 0)
      y = 0;
    else if (y > h)
      y = h;
    this.refs.$drag_pointer.px("left", x);
    this.refs.$drag_pointer.px("top", y);
    this.drag_pointer_pos = { x, y };
    this.x = localX;
    this.y = localY;
    this.calculateSV();
  }
  setMainColor(e) {
    var pos = this.$el.offset();
    var w = this.w;
    var h = this.h;
    var x = Event.pos(e).pageX - pos.left;
    var y = Event.pos(e).pageY - pos.top;
    if (x < 0)
      x = 0;
    else if (x > w)
      x = w;
    if (y < 0)
      y = 0;
    else if (y > h)
      y = h;
    this.refs.$drag_pointer.css({
      left: x + "px",
      top: y + "px"
    });
    this.drag_pointer_pos = { x, y };
    this.calculateSV();
  }
  "@changeColor"(sourceType) {
    if (source$4 != sourceType) {
      this.refresh();
    }
  }
  "@initColor"() {
    this.refresh();
  }
  "mouseup document"(e) {
    if (this.isDown) {
      this.isDown = false;
      this.$store.emit("lastUpdateColor");
    }
  }
  "mousemove document"(e) {
    if (this.isDown) {
      this.cacheSize();
      if (this.axis === "saturation" || this.axis === "value") {
        this.setSubColor(e);
      } else {
        this.setMainColor(e);
      }
    }
  }
  mousedown(e) {
    this.isDown = true;
    this.cacheSize();
    this.axis = new Dom(e.target).attr("data-axis-value");
    this.x = e.pageX;
    this.y = e.pageY;
    if (this.axis === "saturation" || this.axis === "value") {
      this.setSubColor(e);
    } else {
      this.setMainColor(e);
    }
  }
  "touchend document"(e) {
    if (this.isDown) {
      this.isDown = false;
      this.$store.emit("lastUpdateColor");
    }
  }
  "touchmove document"(e) {
    if (this.isDown) {
      this.setMainColor(e);
    }
  }
  touchstart(e) {
    e.preventDefault();
    this.isDown = true;
    this.cacheSize();
    this.setMainColor(e);
  }
  cacheSize() {
    this.w = this.state.get("$el.contentWidth");
    this.h = this.state.get("$el.contentHeight");
  }
}
class ChromeDevToolColorPicker extends BaseColorPicker {
  template() {
    return `
            <div class='colorpicker-body'>
                <div target="palette"></div> 
                <div target="control"></div>
                <div target="information"></div>
                <div target="currentColorSets"></div>
                <div target="colorSetsChooser"></div>
                <div target="contextMenu"></div>
            </div>
        `;
  }
  components() {
    return {
      palette: ColorPalette,
      control: ColorControl$5,
      information: ColorInformation,
      currentColorSets: CurrentColorSets,
      colorSetsChooser: ColorSetsChooser,
      contextMenu: CurrentColorSetsContextMenu
    };
  }
}
const source$3 = "mini-control";
class ColorControl$4 extends UIElement {
  components() {
    return { Hue, Opacity: Opacity$1 };
  }
  template() {
    return `
        <div class="control">
            <div target="Hue" ></div>
            <div target="Opacity" ></div>
        </div>
        `;
  }
  refresh() {
    this.setColorUI();
  }
  setColorUI() {
    this.Hue.setColorUI();
    this.Opacity.setColorUI();
  }
  "@changeColor"(sourceType) {
    if (source$3 != sourceType) {
      this.refresh();
    }
  }
  "@initColor"() {
    this.refresh();
  }
}
class MiniColorPicker$1 extends BaseColorPicker {
  template() {
    return `
            <div class='colorpicker-body'>
                <div target="palette"></div>
                <div target="control"></div>
            </div>
        `;
  }
  components() {
    return {
      palette: ColorPalette,
      control: ColorControl$4
    };
  }
}
class VerticalSlider extends BaseSlider {
  constructor(opt) {
    super(opt);
    this.source = "vertical-slider";
  }
  getMaxDist() {
    return this.state.get("$container.height");
  }
  setMousePosition(y) {
    this.refs.$bar.css({ top: y + "px" });
  }
  getMousePosition(e) {
    return Event.pos(e).pageY;
  }
  getMinPosition() {
    return this.refs.$container.offset().top;
  }
  getCaculatedDist(e) {
    var current = e ? this.getMousePosition(e) : this.getCurrent(this.getDefaultValue() / this.maxValue);
    var dist = 100 - this.getDist(current);
    return dist;
  }
  setColorUI(v) {
    v = v || this.getDefaultValue();
    if (v <= this.minValue) {
      this.refs.$bar.addClass("first").removeClass("last");
    } else if (v >= this.maxValue) {
      this.refs.$bar.addClass("last").removeClass("first");
    } else {
      this.refs.$bar.removeClass("last").removeClass("first");
    }
    var per = 1 - (v || 0) / this.maxValue;
    this.setMousePosition(this.getMaxDist() * per);
  }
}
class VerticalHue extends VerticalSlider {
  constructor(opt) {
    super(opt);
    this.minValue = 0;
    this.maxValue = 360;
    this.source = "vertical-hue-control";
  }
  template() {
    return `
            <div class="hue">
                <div ref="$container" class="hue-container">
                    <div ref="$bar" class="drag-bar"></div>
                </div>
            </div>
        `;
  }
  getDefaultValue() {
    return this.$store.hsv.h;
  }
  refreshColorUI(e) {
    var dist = this.getCaculatedDist(e);
    this.setColorUI(dist / 100 * this.maxValue);
    this.changeColor({
      h: dist / 100 * this.maxValue,
      type: "hsv"
    });
  }
}
class Opacity extends VerticalSlider {
  constructor(opt) {
    super(opt);
    this.source = "vertical-opacity-control";
  }
  template() {
    return `
        <div class="opacity">
            <div ref="$container" class="opacity-container">
                <div ref="$colorbar" class="color-bar"></div>
                <div ref="$bar" class="drag-bar2"></div>
            </div>
        </div>
        `;
  }
  refresh() {
    super.refresh();
    this.setOpacityColorBar();
  }
  setOpacityColorBar() {
    var rgb2 = Object.assign({}, this.$store.rgb);
    rgb2.a = 0;
    var start = Color$1.format(rgb2, "rgb");
    rgb2.a = 1;
    var end = Color$1.format(rgb2, "rgb");
    this.refs.$colorbar.css("background", "linear-gradient(to top, " + start + ", " + end + ")");
  }
  getDefaultValue() {
    return this.$store.alpha;
  }
  refreshColorUI(e) {
    var dist = this.getCaculatedDist(e);
    this.setColorUI(dist / 100 * this.maxValue);
    this.changeColor({
      a: Math.floor(dist) / 100 * this.maxValue
    });
  }
}
const source$2 = "mini-control";
class ColorControl$3 extends UIElement {
  components() {
    return { Hue: VerticalHue, Opacity };
  }
  template() {
    return `<div class="control"><div target="Hue" ></div><div target="Opacity" ></div></div>`;
  }
  refresh() {
    this.setColorUI();
  }
  setColorUI() {
    this.Hue.setColorUI();
    this.Opacity.setColorUI();
  }
  "@changeColor"(sourceType) {
    if (source$2 != sourceType) {
      this.refresh();
    }
  }
  "@initColor"() {
    this.refresh();
  }
}
class MiniColorPicker extends BaseColorPicker {
  template() {
    return `
            <div class='colorpicker-body'>
                <div target="palette"></div><div target="control"></div>
            </div>
        `;
  }
  components() {
    return {
      palette: ColorPalette,
      control: ColorControl$3
    };
  }
}
const source$1 = "macos-control";
class ColorControl$2 extends UIElement {
  components() {
    return { Value, Opacity: Opacity$1 };
  }
  template() {
    return `
        <div class="control">
            <div target="Value" ></div>
            <div target="Opacity" ></div>
            <div ref="$controlPattern" class="empty"></div>
            <div ref="$controlColor" class="color"></div>
        </div>
        `;
  }
  setBackgroundColor() {
    this.refs.$controlColor.css("background-color", this.$store.dispatch("/toRGB"));
  }
  refresh() {
    this.setColorUI();
    this.setBackgroundColor();
  }
  setColorUI() {
    this.Value.setColorUI();
    this.Opacity.setColorUI();
  }
  "@changeColor"(sourceType) {
    if (source$1 != sourceType) {
      this.refresh();
    }
  }
  "@initColor"() {
    this.refresh();
  }
}
class ColorRing extends ColorWheel {
  constructor(opt) {
    super(opt);
    this.width = 214;
    this.height = 214;
    this.thinkness = 16;
    this.half_thinkness = this.thinkness / 2;
    this.source = "colorring";
  }
  template() {
    return `
        <div class="wheel" data-type="ring">
            <canvas class="wheel-canvas" ref="$colorwheel" ></canvas>
            <div class="drag-pointer" ref="$drag_pointer"></div>
        </div>
        `;
  }
  setColorUI(isEvent) {
    this.renderCanvas();
    this.setHueColor(null, isEvent);
  }
  getDefaultValue() {
    return this.$store.hsv.h;
  }
  setHueColor(e, isEvent) {
    if (!this.state.get("$el.width"))
      return;
    var { minX, minY, radius, centerX, centerY } = this.getRectangle();
    var { x, y } = this.getCurrentXY(e, this.getDefaultValue(), radius, centerX, centerY);
    var rx = x - centerX, ry = y - centerY, hue2 = caculateAngle(rx, ry);
    {
      var { x, y } = this.getCurrentXY(null, hue2, radius - this.half_thinkness, centerX, centerY);
    }
    this.refs.$drag_pointer.css({
      left: x - minX + "px",
      top: y - minY + "px"
    });
    if (!isEvent) {
      this.changeColor({
        type: "hsv",
        h: hue2
      });
    }
  }
}
class RingColorPicker extends BaseColorPicker {
  template() {
    return `
            <div class='colorpicker-body'>
                <div target="colorring"></div>
                <div target="palette"></div> 
                <div target="control"></div>
                <div target="information"></div>
                <div target="currentColorSets"></div>
                <div target="colorSetsChooser"></div>
                <div target="contextMenu"></div>
            </div>
        `;
  }
  components() {
    return {
      colorring: ColorRing,
      palette: ColorPalette,
      control: ColorControl$2,
      information: ColorInformation,
      currentColorSets: CurrentColorSets,
      colorSetsChooser: ColorSetsChooser,
      contextMenu: CurrentColorSetsContextMenu
    };
  }
}
class ColorControl$1 extends UIElement {
  components() {
    return { Hue: VerticalHue, Opacity };
  }
  template() {
    return `
        <div class="control">
            <div target="Hue" ></div>
            <div target="Opacity" ></div>
        </div>
        `;
  }
  refresh() {
    this.setColorUI();
  }
  setColorUI() {
    this.Hue.setColorUI();
    this.Opacity.setColorUI();
  }
  "@changeColor"() {
    this.refresh();
  }
  "@initColor"() {
    this.refresh();
  }
}
class XDColorPicker extends BaseColorPicker {
  template() {
    return `
            <div class='colorpicker-body'>
                <div target="palette"></div> 
                <div target="control"></div>
                <div target="information"></div>
                <div target="currentColorSets"></div>
                <div target="colorSetsChooser"></div>
                <div target="contextMenu"></div>
            </div>
        `;
  }
  components() {
    return {
      palette: ColorPalette,
      control: ColorControl$1,
      information: ColorInformation,
      currentColorSets: CurrentColorSets,
      colorSetsChooser: ColorSetsChooser,
      contextMenu: CurrentColorSetsContextMenu
    };
  }
}
const source = "mini-control";
class ColorControl extends UIElement {
  components() {
    return { Hue: VerticalHue, Opacity };
  }
  template() {
    return `
            <div class="control">
                <div target="Opacity" ></div>            
                <div target="Hue" ></div>
            </div>
        `;
  }
  refresh() {
    this.setColorUI();
  }
  setColorUI() {
    this.Hue.setColorUI();
    this.Opacity.setColorUI();
  }
  "@changeColor"(sourceType) {
    if (source != sourceType) {
      this.refresh();
    }
  }
  "@initColor"() {
    this.refresh();
  }
}
class VSCodePicker extends BaseColorPicker {
  template() {
    return `
            <div class='colorpicker-body'>
                <div class='color-view'>
                    <div class='color-view-container'  ref="$colorview"></div>
                </div>
                <div class='color-tool'>
                    <div target="palette"></div>
                    <div target="control"></div>
                </div>
            </div>
        `;
  }
  components() {
    return {
      palette: ColorPalette,
      control: ColorControl
    };
  }
  initColorWithoutChangeEvent(color) {
    this.$store.dispatch("/initColor", color);
    this.refresh();
  }
  setBackgroundColor() {
    var color = this.$store.dispatch("/toColor");
    var rgb2 = this.$store.rgb;
    var bValue = Color$1.brightness(rgb2.r, rgb2.g, rgb2.b);
    this.refs.$colorview.css({
      "background-color": color,
      "color": bValue > 127 ? "black" : "white"
    });
    this.refs.$colorview.html(color);
  }
  "click $colorview"(e) {
    this.nextFormat();
  }
  nextFormat() {
    var current_format = this.$store.format || "hex";
    var next_format = "hex";
    if (current_format == "hex") {
      next_format = "rgb";
    } else if (current_format == "rgb") {
      next_format = "hsl";
    } else if (current_format == "hsl") {
      next_format = "hex";
    }
    this.$store.dispatch("/changeFormat", next_format);
    this.$store.emit("lastUpdateColor");
    this.refresh();
  }
  refresh() {
    this.setBackgroundColor();
  }
  "@changeColor"() {
    this.refresh();
  }
  "@initColor"() {
    this.refresh();
  }
}
var ColorPicker = {
  create(opts) {
    switch (opts.type) {
      case "macos":
        return new MacOSColorPicker(opts);
      case "xd":
        return new XDColorPicker(opts);
      case "ring":
        return new RingColorPicker(opts);
      case "mini":
        return new MiniColorPicker$1(opts);
      case "vscode":
        return new VSCodePicker(opts);
      case "mini-vertical":
        return new MiniColorPicker(opts);
      case "sketch":
      case "palette":
      default:
        return new ChromeDevToolColorPicker(opts);
    }
  },
  ColorPicker: ChromeDevToolColorPicker,
  ChromeDevToolColorPicker,
  MacOSColorPicker,
  RingColorPicker,
  MiniColorPicker: MiniColorPicker$1,
  VSCodePicker,
  MiniVerticalColorPicker: MiniColorPicker
};
class EmbedColorPicker extends UIElement {
  afterRender() {
    var parent = this.opt;
    var options = parent.opt.colorpickerOptions || {
      type: "sketch"
    };
    this.colorPicker = ColorPicker.create(__spreadValues({
      position: "inline",
      container: this.refs.$el.el,
      onChange: (c2) => {
        this.changeColor(c2);
      },
      onLastUpdate: (c2) => {
        this.changeColor(c2, true);
      }
    }, options));
  }
  template() {
    return `<div ref="$color"></div>`;
  }
  changeColor(color, isLastUpdate = false) {
    this.$store.emit("changeEmbedColorPicker", color, isLastUpdate);
  }
  setValue(color) {
    this.colorPicker.initColorWithoutChangeEvent(color);
  }
}
function _traverse(obj) {
  var results = [];
  obj.layers.length && obj.layers.forEach((it) => {
    results.push(..._traverse(it));
  });
  results.push(obj);
  return results;
}
class Item {
  constructor(json = {}) {
    if (json instanceof Item) {
      json = json.toJSON();
    }
    this.json = this.convert(__spreadValues(__spreadValues({}, this.getDefaultObject()), json));
    this.ref = new Proxy(this, {
      get: (target, key) => {
        var originMethod = target[key];
        if (isFunction(originMethod)) {
          return (...args) => {
            return originMethod.apply(target, args);
          };
        } else {
          return originMethod || target.json[key];
        }
      },
      set: (target, key, value) => {
        if (value && value.realVal && isFunction(value.realVal)) {
          value = value.realVal();
        }
        if (this.checkField(key, value)) {
          target.json[key] = value;
        } else {
          throw new Error(`${value} is invalid as ${key} property value.`);
        }
        return true;
      }
    });
    return this.ref;
  }
  getDefaultTitle() {
    return "Item";
  }
  isAttribute() {
    return false;
  }
  get title() {
    return this.json.name || this.getDefaultTitle();
  }
  get id() {
    return this.json.id;
  }
  get layers() {
    return this.json.layers;
  }
  get parent() {
    return this.json.parent;
  }
  is(...itemType) {
    if (!this.json)
      return false;
    return itemType.indexOf(this.json.itemType) > -1;
  }
  convert(json) {
    return json;
  }
  checkField(key, value) {
    return true;
  }
  toCloneObject() {
    var json = {
      itemType: this.json.itemType,
      type: this.json.type,
      selected: this.json.selected
    };
    return json;
  }
  clone() {
    var ItemClass = this.constructor;
    var item = new ItemClass(this.toCloneObject());
    item.parent = this.json.parent;
    return item;
  }
  reset(obj) {
    if (obj instanceof Item) {
      obj = obj.toJSON();
    }
    this.json = this.convert(__spreadValues(__spreadValues({}, this.json), obj));
  }
  getDefaultObject(obj = {}) {
    return __spreadValues({
      selected: false,
      type: "",
      itemType: ""
    }, obj);
  }
  add(layer) {
    this.json.layers.push(layer);
    layer.parent = this.ref;
    return layer;
  }
  toggle(field, toggleValue) {
    if (isUndefined$1(toggleValue)) {
      this.json[field] = !this.json[field];
    } else {
      this.json[field] = !!toggleValue;
    }
  }
  toJSON() {
    return this.json;
  }
  get html() {
    var { elementType, id, layers, itemType } = this.json;
    const tagName = elementType || "div";
    return `
    <${tagName} class='element-item ${itemType}' data-id="${id}">
      ${layers.map((it) => it.html).join("")}
    </${tagName}>
    `;
  }
  resize() {
  }
  copy() {
    this.json.parent.copyItem(this.ref);
  }
  copyItem(childItem) {
    var child = childItem.clone();
    child.width.add(10);
    child.width.add(10);
    var layers = this.json.layers;
    var childIndex = -1;
    for (var i = 0, len = layers.length; i < len; i++) {
      if (layers[i] === childItem) {
        childIndex = i;
        break;
      }
    }
    if (childIndex > -1) {
      this.json.layers.splice(childIndex, 0, child);
    }
  }
  remove() {
    this.json.parent.removeItem(this.ref);
  }
  removeItem(childItem) {
    var layers = this.json.layers;
    var childIndex = -1;
    for (var i = 0, len = layers.length; i < len; i++) {
      if (layers[i] === childItem) {
        childIndex = i;
        break;
      }
    }
    if (childIndex > -1) {
      this.json.layers.splice(childIndex, 1);
    }
  }
  get allLayers() {
    return [..._traverse(this.ref)];
  }
}
class ImageResource extends Item {
  getDefaultObject(obj = {}) {
    return super.getDefaultObject(__spreadValues({
      itemType: "image-resource",
      type: "image"
    }, obj));
  }
  isGradient() {
    return false;
  }
  isLinear() {
    return false;
  }
  isRadial() {
    return false;
  }
  isConic() {
    return false;
  }
  isStatic() {
    return false;
  }
  isImage() {
    return false;
  }
  hasAngle() {
    return false;
  }
  isUrl() {
    return false;
  }
  isFile() {
    return false;
  }
  isAttribute() {
    return true;
  }
  toString() {
    return "none";
  }
}
const stringToPercent = {
  center: 50,
  top: 0,
  left: 0,
  right: 100,
  bottom: 100
};
class Position {
}
Position.CENTER = "center";
Position.TOP = "top";
Position.RIGHT = "right";
Position.LEFT = "left";
Position.BOTTOM = "bottom";
const REG_CSS_UNIT = /([\d.]+)(px|pt|fr|r?em|deg|vh|vw|m?s|%|g?rad|turn)/gi;
class Length {
  constructor(value = "", unit = "") {
    this.value = value;
    this.unit = unit;
  }
  [Symbol.toPrimitive](hint) {
    if (hint == "number") {
      return this.value;
    }
    return this.toString();
  }
  static min(...args) {
    var min2 = args.shift();
    for (var i = 0, len = args.length; i < len; i++) {
      if (min2.value > args[i].value) {
        min2 = args[i];
      }
    }
    return min2;
  }
  static max(...args) {
    var max2 = args.shift();
    for (var i = 0, len = args.length; i < len; i++) {
      if (max2.value < args[i].value) {
        max2 = args[i];
      }
    }
    return max2;
  }
  static string(value) {
    return new Length(value + "", "");
  }
  static number(value) {
    return new Length(+value, "number");
  }
  static px(value) {
    return new Length(+value, "px");
  }
  static em(value) {
    return new Length(+value, "em");
  }
  static percent(value) {
    return new Length(+value, "%");
  }
  static deg(value) {
    return new Length(+value, "deg");
  }
  static fr(value) {
    return new Length(+value, "fr");
  }
  static second(value) {
    return new Length(+value, "s");
  }
  static ms(value) {
    return new Length(+value, "ms");
  }
  static var(value) {
    return new Length(value + "", "--");
  }
  static calc(str) {
    return new Length(str, "calc");
  }
  static parse(obj) {
    if (isString(obj)) {
      if (obj.indexOf("calc(") > -1) {
        return new Length(obj.split("calc(")[1].split(")")[0], "calc");
      } else {
        var arr = obj.replace(REG_CSS_UNIT, "$1 $2").split(" ").filter(Boolean);
        var isNumberString = +arr[0] == arr[0];
        if (isNumberString) {
          return new Length(+arr[0], arr[1]);
        } else {
          return new Length(arr[0]);
        }
      }
    }
    if (obj instanceof Length) {
      return obj;
    } else if (obj.unit) {
      if (obj.unit == "%" || obj.unit == "percent") {
        var value = 0;
        if (isNotUndefined(obj.percent)) {
          value = obj.percent;
        } else if (isNotUndefined(obj.value)) {
          value = obj.value;
        }
        return Length.percent(value);
      } else if (obj.unit == "px") {
        var value = 0;
        if (isNotUndefined(obj.px)) {
          value = obj.px;
        } else if (isNotUndefined(obj.value)) {
          value = obj.value;
        }
        return Length.px(value);
      } else if (obj.unit == "em") {
        var value = 0;
        if (isNotUndefined(obj.em)) {
          value = obj.em;
        } else if (isNotUndefined(obj.value)) {
          value = obj.value;
        }
        return Length.em(value);
      } else if (obj.unit == "deg") {
        var value = 0;
        if (isNotUndefined(obj.deg)) {
          value = obj.deg;
        } else if (isNotUndefined(obj.value)) {
          value = obj.value;
        }
        return Length.deg(value);
      } else if (obj.unit == "s") {
        var value = 0;
        if (isNotUndefined(obj.second)) {
          value = obj.second;
        } else if (isNotUndefined(obj.value)) {
          value = obj.value;
        }
        return Length.second(value);
      } else if (obj.unit == "ms") {
        var value = 0;
        if (isNotUndefined(obj.ms)) {
          value = obj.ms;
        } else if (isNotUndefined(obj.value)) {
          value = obj.value;
        }
        return Length.ms(value);
      } else if (obj.unit == "number") {
        var value = 0;
        if (isNotUndefined(obj.value)) {
          value = obj.value;
        }
        return Length.number(value);
      } else if (obj.unit == "--") {
        var value = 0;
        if (isNotUndefined(obj.value)) {
          value = obj.value;
        }
        return Length.var(value);
      } else if (obj.unit === "" || obj.unit === "string") {
        var value = "";
        if (isNotUndefined(obj.str)) {
          value = obj.str;
        } else if (isNotUndefined(obj.value)) {
          value = obj.value;
        }
        return Length.string(value);
      }
    }
    return Length.string(obj);
  }
  toString() {
    switch (this.unit) {
      case "string":
      case "number":
        return this.value + "";
      case "var":
        return `var(--${this.value})`;
      case "calc":
        return `calc(${this.value})`;
      default:
        return this.value + this.unit;
    }
  }
  isUnitType(unit) {
    return this.unit === unit;
  }
  isCalc() {
    return this.isUnitType("calc");
  }
  isFr() {
    return this.isUnitType("fr");
  }
  isPercent() {
    return this.isUnitType("%");
  }
  isPx() {
    return this.isUnitType("px");
  }
  isEm() {
    return this.isUnitType("em");
  }
  isDeg() {
    return this.isUnitType("deg");
  }
  isSecond() {
    return this.isUnitType("s");
  }
  isMs() {
    return this.isUnitType("ms");
  }
  isNumber() {
    return this.isUnitType("number");
  }
  isString() {
    return this.isUnitType("");
  }
  isVar() {
    return this.isUnitType("--");
  }
  set(value) {
    this.value = value;
    return this;
  }
  add(obj) {
    this.value += +obj;
    return this;
  }
  sub(obj) {
    return this.add(-1 * obj);
  }
  mul(obj) {
    this.value *= +obj;
    return this;
  }
  div(obj) {
    this.value /= +obj;
    return this;
  }
  mod(obj) {
    this.value %= +obj;
    return this;
  }
  clone() {
    return new Length(this.value, this.unit);
  }
  getUnitName() {
    return this.unit === "%" ? "percent" : this.unit;
  }
  toJSON() {
    return { value: this.value, unit: this.unit };
  }
  rate(value) {
    return value / this.value;
  }
  stringToPercent() {
    if (isNotUndefined(stringToPercent[this.value])) {
      return Length.percent(stringToPercent[this.value]);
    }
    return Length.percent(0);
  }
  stringToEm(maxValue) {
    return this.stringToPercent().toEm(maxValue);
  }
  stringToPx(maxValue) {
    return this.stringToPercent().toPx(maxValue);
  }
  toPercent(maxValue, fontSize = 16) {
    if (this.isPercent()) {
      return this;
    } else if (this.isPx()) {
      return Length.percent(this.value * 100 / maxValue);
    } else if (this.isEm()) {
      return Length.percent(this.value * fontSize * 100 / maxValue);
    } else if (this.isString()) {
      return this.stringToPercent(maxValue);
    } else if (this.isDeg()) {
      return Length.percent(this.value / 360 * 100);
    }
  }
  toEm(maxValue, fontSize = 16) {
    if (this.isPercent()) {
      return Length.em(this.value / 100 * maxValue / fontSize);
    } else if (this.isPx()) {
      return Length.em(this.value / fontSize);
    } else if (this.isEm()) {
      return this;
    } else if (this.isString()) {
      return this.stringToEm(maxValue);
    }
  }
  toPx(maxValue, fontSize = 16) {
    if (this.isPercent()) {
      return Length.px(this.value / 100 * maxValue);
    } else if (this.isPx()) {
      return this;
    } else if (this.isEm()) {
      return Length.px(this.value / 100 * maxValue / 16);
    } else if (this.isString()) {
      return this.stringToPx(maxValue);
    }
  }
  toSecond() {
    if (this.isSecond()) {
      return this;
    } else if (this.isMs()) {
      return Length.second(this.value / 1e3);
    }
  }
  toMs() {
    if (this.isSecond()) {
      return Length.ms(this.value * 1e3);
    } else if (this.isMs()) {
      return this;
    }
  }
  to(unit, maxValue, fontSize = 16) {
    if (unit === "px") {
      return this.toPx(maxValue, fontSize);
    } else if (unit === "%" || unit === "percent") {
      return this.toPercent(maxValue, fontSize);
    } else if (unit === "em") {
      return this.toEm(maxValue, fontSize);
    }
  }
  toUnit(unit) {
    return new Length(this.value, unit);
  }
  calculate(type, dist) {
    var func = this[type];
    if (func) {
      return func.call(this, dist);
    }
    return this;
  }
  includes(...arr) {
    return arr.includes(this.value);
  }
  round(k) {
    return new Length(round(this.value, k), this.unit);
  }
  equals(t) {
    return this.value === t.value && this.unit === t.unit;
  }
}
Length.auto = Length.string("auto");
class ColorStep extends Item {
  getDefaultObject() {
    return super.getDefaultObject({
      cut: false,
      percent: 0,
      unit: "%",
      px: 0,
      em: 0,
      color: "rgba(0, 0, 0, 0)",
      prevColorStep: null
    });
  }
  toCloneObject() {
    return __spreadProps(__spreadValues({}, super.toCloneObject()), {
      cut: this.json.cut,
      percent: this.json.percent,
      unit: this.json.unit,
      px: this.json.px,
      em: this.json.em,
      color: this.json.color
    });
  }
  on() {
    this.json.cut = true;
  }
  off() {
    this.json.cut = false;
  }
  toggle() {
    this.json.cut = !this.json.cut;
  }
  getUnit() {
    return this.json.unit == "%" ? "percent" : this.json.unit;
  }
  add(num) {
    var unit = this.getUnit();
    this.json[unit] += +num;
    return this;
  }
  sub(num) {
    var unit = this.getUnit();
    this.json[unit] -= +num;
    return this;
  }
  mul(num) {
    var unit = this.getUnit();
    this.json[unit] *= +num;
    return this;
  }
  div(num) {
    var unit = this.getUnit();
    this.json[unit] /= +num;
    return this;
  }
  mod(num) {
    var unit = this.getUnit();
    this.json[unit] %= +num;
    return this;
  }
  get isPx() {
    return this.json.unit == "px";
  }
  get isPercent() {
    return this.json.unit == "%" || this.json.unit === "percent";
  }
  get isEm() {
    return this.json.unit == "em";
  }
  toLength(maxValue) {
    return Length.parse(this.json).round(1e3);
  }
  getPrevLength() {
    if (!this.json.prevColorStep)
      return "";
    return this.json.prevColorStep.toLength();
  }
  toString() {
    var prev = this.json.cut ? this.getPrevLength() : "";
    return `${this.json.color} ${prev} ${this.toLength()}`;
  }
  reset(json) {
    super.reset(json);
    if (this.parent()) {
      this.parent().sortColorStep();
    }
  }
  static parse(colorStepString) {
    let colorsteps = [];
    const results = convertMatches(colorStepString);
    var arr = results.str.split(" ").filter((it) => it.trim());
    const colorIndex = +arr[0].replace("@", "");
    const color = results.matches[colorIndex].color;
    if (arr.length === 1) {
      colorsteps.push(new ColorStep({
        color,
        unit: "%",
        percent: 0
      }));
    } else if (arr.length === 2) {
      const len = Length.parse(arr[1]);
      let data = { unit: len.unit };
      if (len.isPercent()) {
        data.percent = len.value;
      } else if (len.isPx()) {
        data.px = len.value;
      } else if (len.isEm()) {
        data.em = len.value;
      }
      colorsteps.push(new ColorStep(__spreadValues({ color }, data)));
    } else if (arr.length === 3) {
      [1, 2].forEach((index2) => {
        const len = Length.parse(arr[index2]);
        let data = { unit: len.unit };
        if (len.isPercent()) {
          data.percent = len.value;
        } else if (len.isPx()) {
          data.px = len.value;
        } else if (len.isEm()) {
          data.em = len.value;
        }
        colorsteps.push(new ColorStep(__spreadValues({ color }, data)));
      });
    }
    return colorsteps;
  }
}
const DEFINED_ANGLES$2 = {
  "to top": 0,
  "to top right": 45,
  "to right": 90,
  "to bottom right": 135,
  "to bottom": 180,
  "to bottom left": 225,
  "to left": 270,
  "to top left": 315
};
class Gradient extends ImageResource {
  isGradient() {
    return true;
  }
  toString() {
    return "none";
  }
  getDefaultObject(obj = {}) {
    return super.getDefaultObject(__spreadValues({
      type: "gradient",
      colorsteps: []
    }, obj));
  }
  toCloneObject() {
    return __spreadProps(__spreadValues({}, super.toCloneObject()), {
      colorsteps: this.json.colorsteps.map((color) => color.clone())
    });
  }
  convert(json) {
    json.colorsteps = json.colorsteps.map((c2) => new ColorStep(c2));
    return json;
  }
  calculateAngle() {
    var angle = this.json.angle;
    return isUndefined$1(DEFINED_ANGLES$2[angle]) ? angle : DEFINED_ANGLES$2[angle] || 0;
  }
  addColorStep(colorstep, isSort = true) {
    this.json.colorsteps.push(colorstep);
    if (isSort)
      this.sortColorStep();
    return colorstep;
  }
  insertColorStep(percent, startColor = "rgba(216,216,216,0)", endColor = "rgba(216,216,216,1)") {
    var colorsteps = this.colorsteps;
    if (!colorsteps.length) {
      this.addColorStepList([
        new ColorStep({ color: startColor, percent, index: 0 }),
        new ColorStep({ color: endColor, percent: 100, index: 100 })
      ]);
      return;
    }
    if (percent < colorsteps[0].percent) {
      colorsteps[0].index = 1;
      this.addColorStep(new ColorStep({ index: 0, color: colorsteps[0].color, percent }));
      return;
    }
    var lastIndex = colorsteps.length - 1;
    if (colorsteps[lastIndex].percent < percent) {
      var color = colorsteps[lastIndex].color;
      var index2 = colorsteps[lastIndex].index + 1;
      this.addColorStep(new ColorStep({ index: index2, color, percent }));
      return;
    }
    for (var i = 0, len = colorsteps.length - 1; i < len; i++) {
      var step = colorsteps[i];
      var nextStep = colorsteps[i + 1];
      if (step.percent <= percent && percent <= nextStep.percent) {
        var color = Color.mix(step.color, nextStep.color, (percent - step.percent) / (nextStep.percent - step.percent), "rgb");
        this.addColorStep(new ColorStep({ index: step.index + 1, color, percent }));
        return;
      }
    }
  }
  sortColorStep() {
    var children = this.colorsteps;
    children.sort((a, b) => {
      if (a.percent > b.percent)
        return 1;
      if (a.percent < b.percent)
        return -1;
      if (a.percent == b.percent) {
        if (a.index === b.index)
          return 0;
        return a.index > b.index ? 1 : -1;
      }
    });
    children.forEach((it, index2) => {
      it.index = index2 * 100;
    });
  }
  addColorStepList(colorstepList = []) {
    colorstepList.forEach((c2) => {
      this.addColorStep(c2, false);
    });
    this.sortColorStep();
  }
  getColorStep(id) {
    return this.json.colorsteps.filter((c2) => c2.id == id)[0];
  }
  clear(...args) {
    if (args.length) {
      this.json.colorsteps.splice(+args[0], 1);
    } else {
      this.json.colorsteps = [];
    }
  }
  get colorsteps() {
    return this.json.colorsteps;
  }
  getColorString() {
    var colorsteps = this.colorsteps;
    if (!colorsteps.length)
      return "";
    var newColors = colorsteps.map((c2, index2) => {
      c2.prevColorStep = c2.cut && index2 > 0 ? colorsteps[index2 - 1] : null;
      return c2;
    });
    return newColors.map((f) => `${f}`).join(",");
  }
  static random() {
    var angle = Math.floor(Math.random() * 1e3) % 360;
    return `linear-gradient(${angle}deg, ${Color.random()} 0%, ${Color.random()} 100%)`;
  }
}
var radialTypeList = [
  "circle",
  "circle closest-side",
  "circle closest-corner",
  "circle farthest-side",
  "circle farthest-corner",
  "ellipse",
  "ellipse closest-side",
  "ellipse closest-corner",
  "ellipse farthest-side",
  "ellipse farthest-corner"
];
class GradientEditor extends UIElement {
  initialize() {
    super.initialize();
    var colorsteps = [
      { offset: Length.percent(0), cut: false, color: "yellow" },
      { offset: Length.percent(100), cut: false, color: "red" }
    ];
    this.type = "linear-gradient";
    this.index = 0;
    this.colorsteps = colorsteps;
    this.radialPosition = [Length.percent(50), Length.percent(50)];
    this.radialType = "ellipse";
  }
  "@changeRadialPosition"(posX, posY) {
    this["@changeKeyValue"]("radialPosition", [posX, posY]);
    this.reloadInputValue();
  }
  "@setGradientEditor"(str, index2 = 0, type = "linear-gradient", angle, radialPosition, radialType) {
    var results = convertMatches(str);
    var colorsteps = results.str.split(",").map((it) => it.trim()).map((it) => {
      var [color, offset1, offset2] = it.split(" ").filter((str2) => str2.length);
      color = reverseMatches(color, results.matches);
      var cut = false;
      if (offset2) {
        cut = true;
      }
      var offset = cut ? Length.parse(offset2) : Length.parse(offset1);
      if (offset.isDeg()) {
        offset = Length.percent(offset.value / 360 * 100);
      }
      return { color, offset, cut };
    });
    if (colorsteps.length == 1) {
      colorsteps.push({
        color: colorsteps[0].color,
        offset: Length.percent(100),
        cut: false
      });
    }
    this.cachedStepListRect = null;
    this.colorsteps = colorsteps;
    this.index = index2;
    this.type = type;
    this.angle = Length.parse(angle || "90deg");
    this.radialPosition = radialPosition || [Length.percent(50), Length.percent(50)];
    this.radialType = radialType;
    this.refresh();
    this.selectStep(index2);
    this.reloadInputValue();
  }
  template() {
    return `
        <div class='gradient-editor' data-selected-editor='${this.type}'>
            <div class='gradient-steps' data-editor='gradient'>
                <div class="hue-container" ref="$back"></div>            
                <div class="hue" ref="$steps">
                    <div class='step-list' ref="$stepList" ></div>
                </div>
            </div>
            <div class='tools' data-editor='tools'>
              <label>Offset <input type='checkbox' ref='$cut' checked />  connected</label> <div class="right-menu" ><button type="button" ref="$remove" style="float:right;" title="Remove color stop">&times; Remove</button></div>
              <div class='unit'>
                <div><input type='range' data-key='length' min='0' max="100" step='0.1' ref='$offset' /></div>
                <div><input type='number' data-key='length' min='0' max="100" step='0.1' ref='$offsetNumber' /></div>              
                <div><select ref='$offsetSelect'>
                  <option value='%'>%</option>
                  <option value='px'>px</option>
                  <option value='em'>em</option>
                </select></div>
              </div>
            </div>
            <div class='sub-editor' ref='$subEditor'> 
              <div data-editor='angle'>
                <label>Angle</label>
                <div class='unit'>                
                  <div><input type='range' data-key='angle' min='-720' max="720" step='0.1' ref='$angle' /> </div>
                  <div><input type='number' data-key='angle' min='-720' max="720" step='0.1' ref='$angleNumber' /></div> 
                  <span>deg</span>
                </div>
              </div>
              <div data-editor='centerX'>
                <label>Center X</label>
                <div class='unit'>
                  <div><input type='range' data-key='centerX' min='-100' max="100" step='0.1' ref='$centerX' /></div>
                  <div><input type='number' data-key='centerX' min='-100' max="100" step='0.1' ref='$centerXNumber' /></div>
                  <div><select ref='$centerXSelect'>
                      <option value='%'>%</option>
                      <option value='px'>px</option>
                      <option value='em'>em</option>
                    </select></div>
                </div>
              </div>                
              <div data-editor='centerY'>           
                <label>Center Y</label>                 
                <div class='unit'>
                  <div><input type='range' data-key='centerY' min='-100' max="100" step='0.1' ref='$centerY' /></div>
                  <div><input type='number' data-key='centerX' min='-100' max="100" step='0.1' ref='$centerYNumber' /></div>
                  <div><select ref='$centerYSelect'>
                      <option value='%'>%</option>
                      <option value='px'>px</option>
                      <option value='em'>em</option>
                    </select></div>
                </div>
              </div>                
              <div data-editor='radialType'>       
                <label>Radial Type</label>              
                <div><select ref='$radialType'>
                  ${radialTypeList.map((k) => {
      var selected = this.radialType === k ? "selected" : "";
      return `<option value="${k}" ${selected}>${k}</option>`;
    }).join("")}
                </select></div>
              </div>
            </div>            
        </div>
      `;
  }
  "input $offset"(e) {
    this.refs.$offsetNumber.val(this.refs.$offset.val());
    this["@changeColorStepOffset"]("offset", new Length(this.refs.$offset.val(), this.refs.$offsetSelect.val()));
  }
  "mouseup $offset"(e) {
    this["@changeColorStepOffset"]("offset", new Length(this.refs.$offset.val(), this.refs.$offsetSelect.val()), true);
  }
  "input $offsetNumber"(e) {
    this.refs.$offset.val(this.refs.$offsetNumber.val());
    this["@changeColorStepOffset"]("offset", new Length(this.refs.$offset.val(), this.refs.$offsetSelect.val()), true);
  }
  "input $angle"(e) {
    this.refs.$angleNumber.val(this.refs.$angle.val());
    this["@changeKeyValue"]("angle", Length.deg(this.refs.$angle.val()));
  }
  "mouseup $angle"(e) {
    this["@changeKeyValue"]("angle", Length.deg(this.refs.$angle.val()), true);
  }
  "input $angleNumber"(e) {
    this.refs.$angle.val(this.refs.$angleNumber.val());
    this["@changeKeyValue"]("angle", Length.deg(this.refs.$angle.val()), true);
  }
  "input $centerX"(e) {
    this.refs.$centerXNumber.val(this.refs.$centerX.val());
    this["@changeKeyValue"]("radialPositionX");
  }
  "mouseup $centerX"(e) {
    this["@changeKeyValue"]("radialPositionX", null, true);
  }
  "input $centerXNumber"(e) {
    this.refs.$centerX.val(this.refs.$centerXNumber.val());
    this["@changeKeyValue"]("radialPositionX");
  }
  "input $centerY"(e) {
    this.refs.$centerYNumber.val(this.refs.$centerY.val());
    this["@changeKeyValue"]("radialPositionY");
  }
  "mouseup $centerY"(e) {
    this["@changeKeyValue"]("radialPositionY", null, true);
  }
  "input $centerYNumber"(e) {
    this.refs.$centerY.val(this.refs.$centerYNumber.val());
    this["@changeKeyValue"]("radialPositionX");
  }
  "change $centerXSelect"(e) {
    this["@changeKeyValue"]("radialPositionX", null, true);
  }
  "change $centerYSelect"(e) {
    this["@changeKeyValue"]("radialPositionY", null, true);
  }
  get radialPositionX() {
    return new Length(+this.refs.$centerX.val(), this.refs.$centerXSelect.val()).round(1e3);
  }
  get radialPositionY() {
    return new Length(+this.refs.$centerY.val(), this.refs.$centerYSelect.val()).round(1e3);
  }
  "change $radialType"(e) {
    this["@changeKeyValue"]("radialType", this.refs.$radialType.val(), true);
  }
  "@changeKeyValue"(key, value, isLastUpdate = false) {
    if (key === "angle") {
      value = value.value;
    }
    if (key === "radialPositionX" || key === "radialPositionY") {
      this["radialPosition"] = [this.radialPositionX, this.radialPositionY];
    } else {
      this[key] = value;
    }
    this.updateData(isLastUpdate);
  }
  "@changeColorStepOffset"(key, value, isLastUpdate = false) {
    if (this.currentStep) {
      this.currentStep.offset = value.clone();
      this.$currentStep.css({
        left: this.currentStep.offset
      });
      this.setColorUI();
      this.updateData(isLastUpdate);
    }
  }
  "click $back"(e) {
    if (this.startXY)
      return;
    var rect = this.refs.$stepList.rect();
    var minX = rect.x;
    var maxX = rect.right;
    var x = e.xy.x;
    if (x < minX)
      x = minX;
    else if (x > maxX)
      x = maxX;
    var percent = (x - minX) / rect.width * 100;
    var list = this.colorsteps.map((it, index2) => {
      return { index: index2, color: it.color, offset: it.offset };
    });
    var prev = list.filter((it) => it.offset.value <= percent).pop();
    var next = list.filter((it) => it.offset.value > percent).shift();
    let targetIndex = 0;
    if (prev && next) {
      if (prev.offset.value === percent) {
        return;
      }
      this.colorsteps.splice(next.index, 0, {
        cut: false,
        offset: Length.percent(percent),
        color: Color$1.mix(prev.color, next.color, (percent - prev.offset.value) / (next.offset.value - prev.offset.value))
      });
      targetIndex = prev.index + 1;
    } else if (prev) {
      const colorstep = {
        cut: false,
        offset: Length.percent(percent),
        color: prev.color
      };
      if (this.colorsteps.length - 1 === prev.index) {
        this.colorsteps.push(colorstep);
      } else {
        this.colorsteps.splice(prev.index + 1, 0, colorstep);
      }
      targetIndex = prev.index + 1;
    } else if (next) {
      const colorstep = {
        cut: false,
        offset: Length.percent(percent),
        color: next.color
      };
      if (next.index === 0) {
        this.colorsteps.unshift(colorstep);
        targetIndex = 0;
      } else {
        this.colorsteps.splice(next.index - 1, 0, colorstep);
        targetIndex = next.index;
      }
    } else {
      this.colorsteps.push({
        cut: false,
        offset: Length.percent(0),
        color: "rgba(0, 0, 0, 1)"
      });
      targetIndex = 0;
    }
    this.refresh();
    this.updateData(true);
    this.selectStep(targetIndex);
  }
  reloadStepList() {
    this.refs.$stepList.html(this.colorsteps.map((it, index2) => {
      return `<div class='step' data-index='${index2}' data-cut='${it.cut}' style='left: ${it.offset};'>
        <div class='color-view' style="background-color: ${it.color}"></div>
        <div class='arrow' style="background-color: ${it.color}"></div>
      </div>`;
    }).join(""));
  }
  "click $cut"() {
    if (this.currentStep) {
      this.currentStep.cut = this.refs.$cut.checked();
      this.$currentStep.attr("data-cut", this.currentStep.cut);
      this.setColorUI();
      this.updateData(true);
    }
  }
  "click $remove"() {
    this.removeStep(this.index);
  }
  removeStep(index2) {
    this.colorsteps.splice(index2, 1);
    var currentStep = this.colorsteps[index2];
    var currentIndex = index2;
    if (!currentStep) {
      currentStep = this.colorsteps[index2 - 1];
      currentIndex = index2 - 1;
    }
    if (currentStep) {
      this.selectStep(currentIndex);
    }
    this.refresh();
    this.updateData(true);
  }
  selectStep(index2) {
    this.index = index2;
    this.currentStep = this.colorsteps[index2];
    this.refs.$stepList.attr("data-selected-index", index2);
    this.$currentStep = this.refs.$stepList.$(`[data-index="${index2.toString()}"]`);
    if (this.$currentStep) {
      this.$colorView = this.$currentStep.$(".color-view");
      this.$arrow = this.$currentStep.$(".arrow");
      this.refs.$cut.el.checked = this.currentStep.cut;
    }
    this.prev = this.colorsteps[index2 - 1];
    this.next = this.colorsteps[index2 + 1];
  }
  "mousedown $stepList .step"(e) {
    var index2 = +e.$delegateTarget.attr("data-index");
    if (e.altKey) {
      this.removeStep(index2);
    } else {
      this.selectStep(index2);
      this.startXY = e.xy;
      this.$store.emit("selectColorStep", this.currentStep.color);
      this.refs.$cut.checked(this.currentStep.cut);
      this.refs.$offset.val(this.currentStep.offset.value);
      this.refs.$stepList.attr("data-selected-index", index2);
      this.cachedStepListRect = this.refs.$stepList.rect();
    }
  }
  getStepListRect() {
    return this.cachedStepListRect;
  }
  "mouseup document"(e) {
    if (this.startXY) {
      this.startXY = null;
      this.updateData(true);
    }
  }
  "mousemove document"(e) {
    if (!this.startXY)
      return;
    var dx = e.xy.x - this.startXY.x;
    e.xy.y - this.startXY.y;
    var rect = this.getStepListRect();
    var minX = rect.x;
    var maxX = rect.right;
    var x = this.startXY.x + dx;
    if (x < minX)
      x = minX;
    else if (x > maxX)
      x = maxX;
    var percent = (x - minX) / rect.width * 100;
    if (this.prev) {
      if (this.prev.offset.value > percent) {
        percent = this.prev.offset.value;
      }
    }
    if (this.next) {
      if (this.next.offset.value < percent) {
        percent = this.next.offset.value;
      }
    }
    this.currentStep.offset.set(round(percent, 100));
    this.$currentStep.css({
      left: Length.percent(percent)
    });
    this.refs.$offset.val(this.currentStep.offset.value);
    this.setColorUI();
    this.updateData();
  }
  refresh() {
    this.reloadStepList();
    this.setColorUI();
  }
  getLinearGradient() {
    if (this.colorsteps.length === 0) {
      return "";
    }
    if (this.colorsteps.length === 1) {
      var colorstep = this.colorsteps[0];
      return `linear-gradient(to right, ${colorstep.color} ${colorstep.offset}, ${colorstep.color} 100%)`;
    }
    return `linear-gradient(to right, ${this.colorsteps.map((it, index2) => {
      if (it.cut) {
        var prev = this.colorsteps[index2 - 1];
        if (prev) {
          return `${it.color} ${prev.offset} ${it.offset}`;
        } else {
          return `${it.color} ${it.offset}`;
        }
      } else {
        return `${it.color} ${it.offset}`;
      }
    }).join(",")})`;
  }
  setColorUI() {
    this.refs.$stepList.css("background-image", this.getLinearGradient());
    this.refs.$el.attr("data-selected-editor", this.type);
  }
  reloadInputValue() {
    this.refs.$offset.val(this.currentStep.offset.value);
    this.refs.$offsetNumber.val(this.currentStep.offset.value);
    this.refs.$offsetSelect.val(this.currentStep.offset.unit);
    this.refs.$angle.val(this.angle.value);
    this.refs.$angleNumber.val(this.angle.value);
    const radialPosition = this.radialPosition.map((it) => {
      if (it === "center") {
        return Length.percent(50);
      }
      return it;
    });
    this.refs.$centerX.val(radialPosition[0].value);
    this.refs.$centerXNumber.val(radialPosition[0].value);
    this.refs.$centerXSelect.val(radialPosition[0].unit);
    this.refs.$centerY.val(radialPosition[1].value);
    this.refs.$centerYNumber.val(radialPosition[1].value);
    this.refs.$centerYSelect.val(radialPosition[1].unit);
    this.refs.$radialType.val(this.radialType);
  }
  "@setColorStepColor"(color, isLastUpdate = false) {
    if (this.currentStep) {
      this.currentStep.color = color;
      this.$colorView.css({
        "background-color": color
      });
      this.$arrow.css({
        "background-color": color
      });
      this.setColorUI();
      this.updateData(isLastUpdate);
    }
  }
  updateData(isLastUpdate = false) {
    this.$store.emit("changeGradientEditor", {
      type: this.type,
      index: this.index,
      angle: this.angle,
      colorsteps: this.colorsteps,
      radialPosition: this.radialPosition,
      radialType: this.radialType
    }, isLastUpdate);
  }
}
const DEFINED_DIRECTIONS = {
  "0": "to top",
  "45": "to top right",
  "90": "to right",
  "135": "to bottom right",
  "180": "to bottom",
  "225": "to bottom left",
  "270": "to left",
  "315": "to top left"
};
const DEFINED_ANGLES$1 = {
  "to top": "0",
  "to top right": "45",
  "to right": "90",
  "to bottom right": "135",
  "to bottom": "180",
  "to bottom left": "225",
  "to left": "270",
  "to top left": "315"
};
class LinearGradient extends Gradient {
  getDefaultObject(obj = {}) {
    return super.getDefaultObject(__spreadValues({
      type: "linear-gradient",
      angle: 0
    }, obj));
  }
  toCloneObject() {
    return __spreadProps(__spreadValues({}, super.toCloneObject()), {
      angle: this.json.angle
    });
  }
  isLinear() {
    return true;
  }
  hasAngle() {
    return true;
  }
  toString() {
    if (this.colorsteps.length === 0)
      return "";
    var colorString = this.getColorString();
    var opt = "";
    var angle = this.json.angle || 0;
    opt = angle;
    if (isNumber(opt)) {
      opt = DEFINED_DIRECTIONS[`${opt}`] || opt;
    }
    if (isNumber(opt)) {
      opt = opt > 360 ? opt % 360 : opt;
      opt = `${opt}deg`;
    }
    var result = `${this.json.type}(${opt}, ${colorString})`;
    return result;
  }
  static toLinearGradient(colorsteps) {
    if (colorsteps.length === 0) {
      return "none";
    }
    var gradient2 = new LinearGradient({
      angle: "to right",
      colorsteps
    });
    return gradient2 + "";
  }
  static parse(str) {
    var results = convertMatches(str);
    var angle = 0;
    var colorsteps = [];
    results.str.split("(")[1].split(")")[0].split(",").map((it) => it.trim()).forEach((newValue, index2) => {
      if (newValue.includes("@")) {
        newValue = reverseMatches(newValue, results.matches);
        colorsteps.push(...ColorStep.parse(newValue));
      } else {
        angle = isUndefined$1(DEFINED_ANGLES$1[newValue]) ? Length.parse(newValue) : Length.deg(+DEFINED_ANGLES$1[newValue]);
      }
    });
    return new LinearGradient({ angle, colorsteps });
  }
}
class RepeatingLinearGradient extends LinearGradient {
  getDefaultObject() {
    return super.getDefaultObject({
      type: "repeating-linear-gradient",
      angle: 0
    });
  }
  static parse(str) {
    var linear = LinearGradient.parse(str);
    return new RepeatingLinearGradient({
      angle: linear.angle,
      colorsteps: linear.colorsteps
    });
  }
}
const DEFINED_POSITIONS$1 = {
  ["center"]: true,
  ["top"]: true,
  ["left"]: true,
  ["right"]: true,
  ["bottom"]: true
};
class RadialGradient extends Gradient {
  getDefaultObject(obj = {}) {
    return super.getDefaultObject(__spreadValues({
      type: "radial-gradient",
      radialType: "ellipse",
      radialPosition: [Position.CENTER, Position.CENTER]
    }, obj));
  }
  toCloneObject() {
    var radialPosition = this.json.radialPosition || [Length.percent(50), Length.percent(50)];
    return __spreadProps(__spreadValues({}, super.toCloneObject()), {
      radialType: this.json.radialType || "ellipse",
      radialPosition: JSON.parse(JSON.stringify(radialPosition))
    });
  }
  isRadial() {
    return true;
  }
  toString() {
    if (this.colorsteps.length === 0)
      return "";
    var colorString = this.getColorString();
    var json = this.json;
    var opt = "";
    var radialType = json.radialType;
    var radialPosition = json.radialPosition || ["center", "center"];
    if (DEFINED_POSITIONS$1[radialPosition])
      ;
    else {
      if (typeof radialPosition === "string")
        ;
      else {
        radialPosition = radialPosition.map((it) => {
          if (typeof it === "string") {
            return it;
          }
          if (it.isString()) {
            return it.value;
          }
          return it.round(1e3);
        }).join(" ");
      }
    }
    opt = radialPosition ? `${radialType} at ${radialPosition}` : radialType;
    return `${json.type || "radial-gradient"}(${opt}, ${colorString})`;
  }
  static parse(str) {
    var results = convertMatches(str);
    var radialType = "ellipse";
    var radialPosition = [Position.CENTER, Position.CENTER];
    var colorsteps = [];
    results.str.split("(")[1].split(")")[0].split(",").map((it) => it.trim()).forEach((newValue, index2) => {
      if (newValue.includes("@")) {
        newValue = reverseMatches(newValue, results.matches);
        colorsteps.push(...ColorStep.parse(newValue));
      } else {
        if (newValue.includes("at")) {
          [radialType, radialPosition] = newValue.split("at").map((it) => it.trim());
        } else {
          radialType = newValue;
        }
        if (isString(radialPosition)) {
          var arr = radialPosition.split(" ");
          if (arr.length === 1) {
            var len = Length.parse(arr[0]);
            if (len.isString()) {
              radialPosition = [len.value, len.value];
            } else {
              radialPosition = [len.clone(), len.clone()];
            }
          } else if (arr.length === 2) {
            radialPosition = arr.map((it) => {
              var len2 = Length.parse(it);
              return len2.isString() ? len2.value : len2;
            });
          }
        }
      }
    });
    return new RadialGradient({ radialType, colorsteps });
  }
}
class RepeatingRadialGradient extends RadialGradient {
  getDefaultObject() {
    return super.getDefaultObject({
      type: "repeating-radial-gradient"
    });
  }
  static parse(str) {
    var radial = RadialGradient.parse(str);
    return new RepeatingRadialGradient({
      radialType: radial.radialType,
      radialPosition: radial.radialPosition,
      colorsteps: radial.colorsteps
    });
  }
}
const DEFINED_POSITIONS = {
  ["center"]: true,
  ["top"]: true,
  ["left"]: true,
  ["right"]: true,
  ["bottom"]: true
};
const DEFINED_ANGLES = {
  "to top": 0,
  "to top right": 45,
  "to right": 90,
  "to bottom right": 135,
  "to bottom": 180,
  "to bottom left": 225,
  "to left": 270,
  "to top left": 315
};
class ConicGradient extends Gradient {
  getDefaultObject(obj = {}) {
    return super.getDefaultObject(__spreadValues({
      type: "conic-gradient",
      angle: 0,
      radialPosition: [Position.CENTER, Position.CENTER]
    }, obj));
  }
  toCloneObject() {
    return __spreadProps(__spreadValues({}, super.toCloneObject()), {
      angle: this.json.angle,
      radialPosition: JSON.parse(JSON.stringify(this.json.radialPosition))
    });
  }
  isConic() {
    return true;
  }
  hasAngle() {
    return true;
  }
  getColorString() {
    if (this.colorsteps.length === 0)
      return "";
    var colorsteps = this.colorsteps;
    if (!colorsteps)
      return "";
    colorsteps.sort((a, b) => {
      if (a.percent == b.percent)
        return 0;
      return a.percent > b.percent ? 1 : -1;
    });
    var newColors = colorsteps.map((c2, index2) => {
      c2.prevColorStep = c2.cut && index2 > 0 ? colorsteps[index2 - 1] : null;
      return c2;
    });
    return newColors.map((f) => {
      var deg = Math.floor(f.percent * 3.6);
      var prev = "";
      if (f.cut && f.prevColorStep) {
        var prevDeg = Math.floor(f.prevColorStep.percent * 3.6);
        prev = `${prevDeg}deg`;
      }
      return `${f.color} ${prev} ${deg}deg`;
    }).join(",");
  }
  toString() {
    var colorString = this.getColorString();
    var opt = [];
    var json = this.json;
    var conicAngle = json.angle;
    var conicPosition = json.radialPosition || Position.CENTER;
    conicPosition = DEFINED_POSITIONS[conicPosition] ? conicPosition : conicPosition.join(" ");
    if (isNotUndefined(conicAngle)) {
      conicAngle = +(DEFINED_ANGLES[conicAngle] || conicAngle);
      opt.push(`from ${conicAngle}deg`);
    }
    if (conicPosition) {
      opt.push(`at ${conicPosition}`);
    }
    var optString = opt.length ? opt.join(" ") + "," : "";
    return `${json.type}(${optString} ${colorString})`;
  }
  static parse(str) {
    var results = convertMatches(str);
    var angle = "0deg";
    var radialPosition = [Position.CENTER, Position.CENTER];
    var colorsteps = [];
    results.str.split("(")[1].split(")")[0].split(",").map((it) => it.trim()).forEach((newValue, index2) => {
      if (newValue.includes("@")) {
        newValue = newValue.split(" ").map((it) => it.trim()).map((it) => {
          if (it.includes("deg")) {
            return Length.parse(it).toPercent();
          } else {
            return it;
          }
        }).join(" ");
        newValue = reverseMatches(newValue, results.matches);
        colorsteps.push(...ColorStep.parse(newValue));
      } else {
        if (newValue.includes("at")) {
          [angle, radialPosition] = newValue.split("at").map((it) => it.trim());
        } else {
          angle = newValue;
        }
        if (isString(radialPosition)) {
          var arr = radialPosition.split(" ");
          if (arr.length === 1) {
            var len = Length.parse(arr[0]);
            if (len.isString()) {
              radialPosition = [len.value, len.value];
            } else {
              radialPosition = [len.clone(), len.clone()];
            }
          } else if (arr.length === 2) {
            radialPosition = arr.map((it) => {
              var len2 = Length.parse(it);
              return len2.isString() ? len2.value : len2;
            });
          }
        }
        if (isString(angle)) {
          if (angle.includes("from")) {
            angle = angle.split("from")[1];
            angle = isUndefined$1(DEFINED_ANGLES[angle]) ? Length.parse(angle) : Length.deg(+DEFINED_ANGLES[angle]);
          }
        }
      }
    });
    return new ConicGradient({ angle, radialPosition, colorsteps });
  }
}
class RepeatingConicGradient extends ConicGradient {
  getDefaultObject() {
    return super.getDefaultObject({
      type: "repeating-conic-gradient",
      angle: 0,
      radialPosition: [Position.CENTER, Position.CENTER]
    });
  }
  static parse(str) {
    var conic = ConicGradient.parse(str);
    return new RepeatingConicGradient({
      angle: conic.angle,
      radialPosition: conic.radialPosition,
      colorsteps: conic.colorsteps
    });
  }
}
const tabs = [
  { type: "linear-gradient", title: "Linear Gradient" },
  { type: "repeating-linear-gradient", title: "Repeating Linear Gradient" },
  { type: "radial-gradient", title: "Radial Gradient" },
  { type: "repeating-radial-gradient", title: "Repeating Radial Gradient" },
  { type: "conic-gradient", title: "Conic Gradient" },
  { type: "repeating-conic-gradient", title: "Repeating Conic Gradient" }
];
const reg = /((linear\-gradient|repeating\-linear\-gradient|radial\-gradient|repeating\-radial\-gradient|conic\-gradient|repeating\-conic\-gradient|url)\(([^\)]*)\))/gi;
class GradientPicker$1 extends BaseColorPicker {
  components() {
    return {
      EmbedColorPicker,
      gradientEditor: GradientEditor
    };
  }
  parseImage(str) {
    var results = convertMatches(str);
    let image2 = null;
    results.str.match(reg).forEach((value, index2) => {
      value = reverseMatches(value, results.matches);
      if (value.includes("repeating-linear-gradient")) {
        image2 = RepeatingLinearGradient.parse(value);
      } else if (value.includes("linear-gradient")) {
        image2 = LinearGradient.parse(value);
      } else if (value.includes("repeating-radial-gradient")) {
        image2 = RepeatingRadialGradient.parse(value);
      } else if (value.includes("radial")) {
        image2 = RadialGradient.parse(value);
      } else if (value.includes("repeating-conic-gradient")) {
        image2 = RepeatingConicGradient.parse(value);
      } else if (value.includes("conic")) {
        image2 = ConicGradient.parse(value);
      }
    });
    return image2;
  }
  callbackColorValue(color) {
    var gradientString = this.image.toString();
    if (typeof this.opt.onChange == "function") {
      this.opt.onChange.call(this, gradientString, this.image);
    }
    if (typeof this.colorpickerShowCallback == "function") {
      this.colorpickerShowCallback(gradientString, this.image);
    }
  }
  callbackLastUpdateColorValue(color) {
    var gradientString = this.image.toString();
    if (typeof this.opt.onLastUpdate == "function") {
      this.opt.onLastUpdate.call(this, gradientString, this.image);
    }
  }
  callbackHideColorValue(color) {
    var gradientString = this.image.toString();
    if (typeof this.opt.onHide == "function") {
      this.opt.onHide.call(this, gradientString, this.image);
    }
    if (typeof this.colorpickerHideCallback == "function") {
      this.colorpickerHideCallback(gradientString, this.image);
    }
  }
  initialize() {
    super.initialize();
    this.$root.addClass("gradient-picker");
    this.selectedTab = "linear-gradient";
    this.setValue(this.opt.gradient || "linear-gradient(to right, red 0%, yellow 100%)");
  }
  setValue(gradientString) {
    this.gradient = gradientString;
    this.image = this.parseImage(this.gradient);
    this.selectTabContent(this.image.type);
  }
  getValue() {
    return this.image.toString();
  }
  template() {
    return `
      <div class="gradient-body">

        <div class='box'>
          <div class='gradient-preview'>
            <div class='gradient-view' ref='$gradientView'></div>
          </div>
          <div class="picker-tab">
            <div class="picker-tab-list" ref="$tab" data-value="static-gradient" data-is-image-hidden="false">
              ${tabs.map((it) => {
      return `
                  <span 
                    class='picker-tab-item ${it.selected ? "selected" : ""}' 
                    data-selected-value='${it.type}'
                    title='${it.title}'
                  > 
                  <div class='icon'></div>
                  </span>`;
    }).join("")}
            </div>
          </div>
          <div target='gradientEditor'></div>

        </div>
        <div class='box'>
          <div target="EmbedColorPicker"></div>
        </div>
      </div>
     
    `;
  }
  getColorString() {
    if (!this.image)
      return "";
    var value = this.image.getColorString();
    return value;
  }
  getCurrentStepColor() {
    var colorstep = this.image.colorsteps[this.selectColorStepIndex || 0] || { color: "rgba(0, 0, 0, 1)" };
    return colorstep.color;
  }
  "@changeGradientEditor"(data, isLastUpdate = false) {
    var colorsteps = data.colorsteps.map((it, index2) => {
      return new ColorStep({
        color: it.color,
        percent: it.offset.value,
        cut: it.cut,
        index: (index2 + 1) * 100
      });
    });
    data = __spreadProps(__spreadValues({}, data), {
      type: this.selectedTab,
      colorsteps
    });
    this.image.reset(data);
    this.updateGradientPreview(isLastUpdate);
  }
  "click $tab .picker-tab-item"(e) {
    const type = e.$delegateTarget.attr("data-selected-value");
    this.selectTabContent(type);
  }
  selectTabContent(type) {
    this.selectedTab = type;
    this.refs.$tab.attr("data-value", type);
    this.image = this.createGradient({ type }, this.image);
    this.$store.emit("setGradientEditor", this.getColorString(), this.selectColorStepIndex, this.image.type, this.image.angle, this.image.radialPosition, this.image.radialType);
    var color = this.getCurrentStepColor();
    this["@selectColorStep"](color);
    this.updateGradientPreview(true);
  }
  createGradient(data, gradient2) {
    const colorsteps = data.colorsteps || gradient2.colorsteps;
    const angle = data.angle || gradient2.angle;
    const radialType = data.radialType || gradient2.radialType || "ellipse";
    const radialPosition = data.radialPosition || gradient2.radialPosition || [Length.percent(50), Length.percent(50)];
    let json = gradient2.clone().toJSON();
    delete json.itemType;
    delete json.type;
    switch (data.type) {
      case "linear-gradient":
        return new LinearGradient({ colorsteps, angle });
      case "repeating-linear-gradient":
        return new RepeatingLinearGradient({ colorsteps, angle });
      case "radial-gradient":
        return new RadialGradient({
          colorsteps,
          radialType,
          radialPosition
        });
      case "repeating-radial-gradient":
        return new RepeatingRadialGradient({
          colorsteps,
          radialType,
          radialPosition
        });
      case "conic-gradient":
        return new ConicGradient({
          colorsteps,
          angle,
          radialPosition
        });
      case "repeating-conic-gradient":
        return new RepeatingConicGradient({
          colorsteps,
          angle,
          radialPosition
        });
    }
    return new Gradient();
  }
  "@changeEmbedColorPicker"(color, isLastUpdate = false) {
    this.$store.emit("setColorStepColor", color, isLastUpdate);
  }
  "@selectColorStep"(color) {
    this.EmbedColorPicker.setValue(color);
  }
  "@changeColorStep"(data = {}) {
    this.image.reset(__spreadValues({}, data));
    this.updateGradientPreview();
  }
  updateGradientPreview(isLastUpdate = false) {
    if (this.image) {
      this.refs.$gradientView.css("background-image", this.image.toString());
      this.updateData(isLastUpdate);
    }
  }
  "mousedown $gradientView"(e) {
    this.mouseDown = true;
    this.mouseDownX = e.clientX;
    this.mouseDownY = e.clientY;
    this.rect = this.refs.$gradientView.rect();
  }
  "mousemove document"(e) {
    if (this.mouseDown) {
      var minX = this.rect.left;
      var maxX = this.rect.right;
      var minY = this.rect.top;
      var maxY = this.rect.bottom;
      var currentX = Math.min(Math.max(minX, e.clientX), maxX);
      var currentY = Math.min(Math.max(minY, e.clientY), maxY);
      var posX = Length.percent((currentX - minX) / (maxX - minX) * 100);
      var posY = Length.percent((currentY - minY) / (maxY - minY) * 100);
      this.$store.emit("changeRadialPosition", posX, posY);
    }
  }
  "mouseup document"(e) {
    if (this.mouseDown) {
      this.mouseDown = false;
      this.updateData(true);
    }
  }
  updateData(isLastUpdate = false) {
    this.callbackChange();
    if (isLastUpdate) {
      this.callbackLastUpdate();
    }
  }
}
var GradientPicker = {
  createGradientPicker(opts) {
    return new GradientPicker$1(opts);
  }
};
var index = __spreadValues(__spreadValues(__spreadValues({}, Util), ColorPicker), GradientPicker);
export { index as default };
