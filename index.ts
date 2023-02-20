import inflection from 'inflection'

const test = 'snake_case';
const upperCase = inflection.camelize(test);
console.log(upperCase);
