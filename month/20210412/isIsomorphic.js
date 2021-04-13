/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let sm = {}
    let tm = {}

    for (let i = 0; i < s.length; i++) {
        if (sm[s[i]] != tm[t[i]]) {
            return false
        }

        sm[s[i]] = tm[t[i]] = i+1
        
    }
    return true;
};

isIsomorphic("foo","bar")