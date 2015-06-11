import Ember from 'ember';
/* global hopscotch */

export default Ember.Service.extend(Ember.Evented, {

  startTour(tour, stepNum) {
    return hopscotch.startTour(tour, stepNum);
  },

  showStep(idx) {
    return hopscotch.showStep(idx);
  },

  prevStep() {
    return hopscotch.prevStep();
  },

  nextStep() {
    return hopscotch.nextStep();
  },

  endTour(clearCookie) {
    return hopscotch.endTour(clearCookie);
  },

  configure(options) {
    return hopscotch.configure(options);
  },

  getCurrTour() {
    return hopscotch.getCurrTour();
  },

  getCurrStepNum() {
    return hopscotch.getCurrStepNum();
  },

  getState() {
    return hopscotch.getState();
  },

  listen(eventName, callback) {
    return hopscotch.listen(eventName, callback);
  },

  unlisten(eventName, callback) {
    return hopscotch.unlisten(eventName, callback);
  },

  removeCallbacks(eventName, tourOnly) {
    return hopscotch.removeCallbacks(eventName, tourOnly);
  },

  registerHelper(id, fn) {
    return hopscotch.registerHelper(id, fn);
  },

  resetDefaultI18N() {
    return hopscotch.resetDefaultI18N();
  },

  resetDefaultOptions() {
    return hopscotch.resetDefaultOptions();
  }

});
