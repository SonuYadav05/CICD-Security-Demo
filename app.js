// DEMO ONLY: intentionally bad code to prove SonarQube detects problems

// 1. Hard-coded password (security issue)
const password = "Admin@12345";

// 2. eval on user input (code injection vulnerability)
function run(userInput) {
  return eval(userInput);
}

// 3. Comparing a value with itself (bug)
function check(a) {
  if (a == a) {
    return true;
  }
  return false;
}

module.exports = { run, check, password };