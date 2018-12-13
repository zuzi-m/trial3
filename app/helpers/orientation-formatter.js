import { helper } from '@ember/component/helper';

/**
  Formats orientation from its model value to readable format suited for gui.
*/
export function orientationFormatter([orientation]) {
  switch (orientation) {
    case 'N': return "North";
    case 'NE': return "North East";
    case 'E': return "East";
    case 'SE': return "South East";
    case 'S': return "South";
    case 'SW': return "South West";
    case 'W': return 'West';
    case 'NW': return 'North West';
    case 'horizontal': return 'Horizontal';
  }
  // default - do nothing
  return orientation;
}

export default helper(orientationFormatter);
