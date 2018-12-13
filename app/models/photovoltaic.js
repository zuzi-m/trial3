import DS from 'ember-data';

/**
  Photovoltaic model with required attributes.

  @class Photovoltaic
*/
export default DS.Model.extend({
  peakPower: DS.attr('number'),
  orientation: DS.attr('string'),
  elevation: DS.attr('string'),
  overshading: DS.attr('string')
});

// the possible values in orientation, elevation, and overshading defined as
// constants. Importing these allows to list all possible values
export const ENUM_ORIENTATION = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', 'horizontal'];
export const ENUM_ELEVATION = ['30', '45', '60', 'horizontal', 'vertical'];
export const ENUM_OVERSHADING = ['none', 'modest', 'significant', 'heavy'];
