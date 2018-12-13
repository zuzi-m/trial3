import { helper } from '@ember/component/helper';

/**
  Formats elevation from its model value to readable format suited for gui.
*/
export function elevationFormatter([elevation]) {
  switch(elevation){
    case 'horizontal': return 'Horizontal';
    case 'vertical': return 'Vertical';
  }
  // default - do nothing
  return elevation;
}

export default helper(elevationFormatter);
