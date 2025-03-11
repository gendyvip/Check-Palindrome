function checkPalindrome(str, cas) {
  if (cas) {
    if (str == str.split("").reverse().join("")) {
      alert("Plaindrome");
    } else {
      alert("Not palindrome");
    }
  } else {
    if (str.toLowerCase() == str.toLowerCase().split("").reverse().join("")) {
      alert("Plaindrome");
    } else {
      alert("Not palindrome");
    }
  }
}
var cas = confirm("Consider case sensitivity or not?");
var inp = prompt("Please enter your string");
checkPalindrome(inp, cas);
