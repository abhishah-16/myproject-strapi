'use strict';

/**
 * `my-middleware` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In my-middleware middleware.');
    await next();
  };
};
