import Controller from '@ember/controller';

/**
  Controller of the application handling the actions that are available for user
  and handles the results.
*/
export default Controller.extend({
  actions: {
    /**
      Creates a photovoltaic record in the store with given attributes.

      @method createPhotovoltaic
      @param attributes - hash with attributes of photovoltaic to create.
      @return promise from saving the photovoltaic in the store.
    */
    createPhotovoltaic(attributes) {
      // create & save photovoltaic, refresh is not needed because result is cached
      return this.store.createRecord('photovoltaic', attributes).save();
    },

    /**
      Deletes a photovoltaic record from the store.

      @method deletePhotovoltaic
      @param photovoltaic - photovoltaic record to delete.
    */
    deletePhotovoltaic(photovoltaic) {
      // destroys the record, refresh is not needed because result is cached
      photovoltaic.destroyRecord();
    }
  }
});
