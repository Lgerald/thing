/*
Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".

*/

function sortByString(s, t) {
    return s.split("").sort((a, b) => {
        if (t.indexOf(a) < t.indexOf(b)) {
            return -1
        }
        if (t.indexOf(a) > t.indexOf(b)) {
            return 1
        }
        return 0
    }).join("")
}