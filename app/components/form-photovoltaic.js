import Component from '@ember/component';
import { ENUM_ORIENTATION, ENUM_ELEVATION, ENUM_OVERSHADING } from '../models/photovoltaic';

/**
  Form for creating/editing a photovoltaic record.

  @class FormPhotovoltaic
*/
export default Component.extend({
  /**
    Empty object to be used for specifying a new photovoltaic.

    @property model
    @type {Object}
  */
  model: null,

  /**
    Flag used to disable the create button.

    @property saveDisabled
    @type {Boolean}
  */
  saveDisabled: false,
  /**
    Flag used to disable the elevation select if it does not make sense - that
    is when the elevation or orientation is set to horizontal.

    @property elevationDisabled
    @type {Boolean}
  */
  elevationDisabled: false,

  init() {
    this._super(...arguments);

    // set the enum constants to be able to use them in template
    this.set('orientations', [...ENUM_ORIENTATION]);
    this.set('elevations', [...ENUM_ELEVATION]);
    this.set('overshadings', [...ENUM_OVERSHADING]);

    // initializing the model to empty hash
    this.resetModel();
  },

  resetModel() {
    // make sure to enable elevation
    this.set('elevationDisabled', false);
    // reset the attributes to some default values
    this.set('model', {
      peakPower: 1,
      orientation: this.get('orientations')[0],
      elevation: this.get('elevations')[0],
      overshading: this.get('overshadings')[0]
    });
  },

  actions: {
    /**
      Action to create a new photovoltaic with attributes specified in the form.
      Triggers create action if one is specified and if save is enabled.
      Disables save button until the save action is finished and then resets.

      @method createPhotovoltaic
      @return nothing
    */
    createPhotovoltaic() {
      // check if it is allowed to save
      if (this.onCreateAction && !this.saveDisabled) {
        // disable save until it is finished
        this.toggleProperty('saveDisabled');

        // call the onCreate action
        this.onCreateAction(this.get('model')).then(() => {
          // enable save again
          this.toggleProperty('saveDisabled');
          // reset the model's attributes
          this.resetModel();
        });
      }
    },

    /**
      Action that sets orientation attribute from its select. Disables elevation
      if the orientation was set to horizontal because in that case the elevation
      can only be horizontal as well. Re-enables elevation otherwise.

      @method selectOrientation
      @param {String} value - value that was selected
      @return none
    */
    selectOrientation(value) {
      // set the value
      this.set('model.orientation', value);

      if (value == 'horizontal') {
        // if setting to horizontal, set the same to elevation and disable it
        this.set('model.elevation', 'horizontal');
        this.set('elevationDisabled', true);
      } else {
        // otherwise make sure elevation is re-enabled
        this.set('elevationDisabled', false);
      }
    },

    /**
      Action that sets elevation attribute from its select. Disables the select
      if the elevation was set to horizontal (logically connected to orientation)

      @method selectElevation
      @param {String} value - value that was selected
      @return none
    */
    selectElevation(value) {
      // set the value
      this.set('model.elevation', value);

      // if setting to horizontal, set the horizontal orientation as well and
      // disable elevation (can be re-enabled by changing orientation)
      if (value == 'horizontal') {
        this.set('model.orientation', 'horizontal');
        this.set('elevationDisabled', true);
      }
    },

    /**
      Action that sets overshading attribute from its select.

      @method selectOvershading
      @param {String} value - value that was selected
      @return none
    */
    selectOvershading(value) {
      // set the value
      this.set('model.overshading', value);
    },
  }
});
