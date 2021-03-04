function Algo() {}

Algo.prototype.reverse = function(str) {
  // TODO: Your code here
  return str.split("").reverse().join("");
};

Algo.prototype.isPalindrome = function(str) {
  // TODO: Your code here
  var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

    return true;
};

Algo.prototype.capitalize = function(str) {
  // TODO: Your code here
  return str.replace(/\w\S*/g, function(txt){
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
}); 
};

module.exports = Algo;
