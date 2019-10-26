function xo(str) {
    var x = 0;
    var o = 0;
    for (var a = 0; a < str.length; a++){
        var compare = str[a];
        if (compare == 'x') {
            x += 1;
        } else if (compare == 'o') {
            o += 1;
        }  
    } if (x == o) {
        return true;
    } else {
        return false;
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true