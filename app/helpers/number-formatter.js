import { helper } from '@ember/component/helper';

/**
  Number formatter to round a number to specified precision.
*/
export function numberFormatter([value, precision]) {
  // check the precision to target
  let multiply = Math.pow(10, precision);

  // show the value with given precision by rounding the multiplied number
  return Math.round(value * multiply) / multiply;
}

export default helper(numberFormatter);
