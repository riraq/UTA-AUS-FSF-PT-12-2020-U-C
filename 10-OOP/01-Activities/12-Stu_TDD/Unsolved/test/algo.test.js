const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    // TODO: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string
    it("should take a string as an argument and return a new reversed version of the string", () => {
      const inputString = "cat"
      
      const reverseString = "tac"
      const obj = new Algo().reverse(inputString)
      expect(obj).toEqual(reverseString)
    })
  });

  describe("isPalindrome", () => {
    // TODO: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.
    it('should take a string as an argument and return the boolean `true` if the provided string is a palindrome'), () => {
      const inputString = 'tacocat'
      const obj = new Algo.isPalindrome(inputString)
      expect(obj === inputString).toBe(true)
    }

    it('should take a string as an argument and return the boolean `false` if the provided string is not a palindrome'), () => {
      const inputString = 'hello'
      const obj = new Algo.isPalindrome(inputString)
      expect(obj === inputString).toBe(false)
    }
  });

  describe("capitalize", () => {
    // TODO: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized
    it('should take a string as an argument and return it with the first letter of each word capitalized', () => {
      const inputString = 'hello there'
      const capitalizedString = 'Hello There'
      const obj = new Algo.capitalize(inputString)

      expect(obj).toEqual(capitalizedString)
    })
  });
});
