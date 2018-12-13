import Route from '@ember/routing/route';

/**
  The index route of the app showing a create form and PV energy calculator.
*/
export default Route.extend({
  model() {
    // list of all photovoltaics
    return this.store.findAll('photovoltaic');
  }
});
