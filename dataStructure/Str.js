
class Str {
  static strCopy(s) {
    if (Str.isString(s)) return s;
    return null;
  }

  static isString(s) {
    return Object.prototype.toString.call(s) === '[object String]';
  }

  static clearStrinq(s) {
    if (Str.isString(s)) return '';
    return null;
  }

  static stringEmpty(s) {
    return Str.isString(s) && s !== '';
  }

  static strLength(s) {
    if (Str.isString(s)) return s.length;
    return null;
  }

  static stringCompare(s, t) {
    if (Str.isString(s) && Str.isString(t) && Str.strLength(s) === this.strLength(t)) {
      let i = 0;
      while (s[i]) {
        if (s[i].charCodeAt() === t[i].charCodeAt()) {
          i++;
        } else {
          return s[i].charCodeAt() > t[i].charCodeAt();
        }
      }
    }
    return Str.strLength(s) > this.strLength(t);
  }

  static concat(s, t) {
    if (Str.isString(s) && Str.isString(t)) return s.concat(t);
    return false;
  }

  static strSubstring(s, len) {
    if (Str.isString(s) && Str.strLength(s) > len) return s.slice(len);
    return false;
  }
}

module.exports = Str;
