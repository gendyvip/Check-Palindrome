function isPalindrome(str) {
    last = str.length - 1
    for (var x = 0; x < str.length; x++) {
        if (str[x] == str[last])
            last--
        else
            return false
        return true
    }
}



var check = confirm("Would you like to  consider case sensitivity?")
var inp = String(prompt("Please enter a word to check if it's palindrome or not"))
if (check) {
    isPalindrome(inp) ? alert("The word " + inp + " is palindrome") : alert("The word " + inp + " is not palindrome")
}
else {
    isPalindrome(inp.toUpperCase()) ? alert("The word " + inp + " is palindrome") : alert("The word " + inp + " is not palindrome")
}
