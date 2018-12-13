import { helper } from '@ember/component/helper';

/**
  Formats overshading from its model value to readable format suited for gui.
*/
export function overshadingFormatter([overshading]) {
  switch (overshading) {
    case 'none': return 'Little or None';
    case 'modest': return 'Modest';
    case 'significant': return 'Significant';
    case 'heavy': return 'Heavy';
  }
  // default - do nothing
  return overshading;
}

export default helper(overshadingFormatter);
