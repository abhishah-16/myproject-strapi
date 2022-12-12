'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('contact-form')
      .service('myService')
      .getWelcomeMessage();
  },
});
