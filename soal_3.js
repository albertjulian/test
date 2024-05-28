function highestPalindrome(str, k) {
    function reverseString(stringParam) {
      return stringParam.split('').reverse().join('');
    }

    function checkPalindrom(stringParam) {
      return stringParam === reverseString(stringParam);
    }

    function findPalindrom(stringParam, k) {
      const stringFirst = stringParam[0];
      const stringLast = stringParam[stringParam.length - 1];
      
      if (checkPalindrom(stringParam) || k === 0) {
        return stringParam;
      }

      if (stringFirst !== stringLast) {
        const newLastChar = Math.max(stringFirst, stringLast);
        return newLastChar + findPalindrom(stringParam.slice(1, -1), k - 1) + newLastChar;
      }

      return stringParam[0] + findPalindrom(stringParam.slice(1, -1), k) + stringParam[0];
    }

    const result = findPalindrom(str, k);
    
    return isNaN(result) ? -1 : result;
}

console.log(highestPalindrome("3943", 1)); // Output: 3993
console.log(highestPalindrome("3943", 2)); // Output: 992299