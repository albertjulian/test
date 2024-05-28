function checkBalanced(allString) {
  const stack = [];
  const openBrackets = { '(': ')', '[': ']', '{': '}' };
  const closedBrackets = { ')': true, ']': true, '}': true };

  for (let i = 0; i < allString.length; i += 1) {
    const char = allString[i];
    if (openBrackets[char]) {
      stack.push(char);
    } else if (closedBrackets[char]) {
      const lastOpenBracket = stack.pop();
      if (!lastOpenBracket || openBrackets[lastOpenBracket] !== char) {
        return "NO";
      }
    }
  }

  return stack.length === 0 ? "YES" : "NO";
}

console.log(checkBalanced("{[()]}")); // Output: YES
console.log(checkBalanced("{[(])}")); // Output: NO
console.log(checkBalanced("{{[[(())]]}}")); // Output: YES