const checkNumber = (number) => {
  const regexRuleOne = /3/;
  const regexRuleTwo = /5/;

  const obeyRuleOne = (number % 3 === 0 || regexRuleOne.test(number));
  const obeyRuleTwo = (number % 5 === 0 || regexRuleTwo.test(number));
  const obeyRuleFour = (number % 5 === 0 && number % 3 === 0);
  const obeyRuleFiveFizz = (number % 3 === 0 && regexRuleOne.test(number));
  const obeyRuleFiveBuzz = (number % 5 === 0 && regexRuleTwo.test(number));

  if (obeyRuleFour) {
    return "lucky";
  }

  if (obeyRuleOne) {
    if (obeyRuleFiveFizz) {
      return "fizz fizz";
    }
    return "fizz";
  } else if (obeyRuleTwo) {
    if (obeyRuleFiveBuzz) {
      return "buzz buzz";
    }
    return "buzz";
  } else {
    return number;
  } 
}

const fizzBuzz = (initial, final) => {
    const numberArray = [];

    for (var number = initial; number <= final; number++) {
        numberArray.push(checkNumber(number));
    }

    return numberArray;
}

export default fizzBuzz
