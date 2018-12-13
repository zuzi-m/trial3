import { helper } from '@ember/component/helper';

/**
  Very simple helper to allow using == in templates
*/
export function eq([val1, val2]) {
  return val1 == val2;
}

export default helper(eq);
