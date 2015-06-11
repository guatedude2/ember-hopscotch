export function initialize(container, app) {
  app.inject('route', 'hopscotch', 'service:hopscotch');
  app.inject('controller', 'hopscotch', 'service:hopscotch');
}

export default {
  name: 'hopscotch',
  initialize: initialize
};
