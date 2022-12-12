'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('first-plugin')
      .service('myService')
      .getWelcomeMessage();
  },
});
