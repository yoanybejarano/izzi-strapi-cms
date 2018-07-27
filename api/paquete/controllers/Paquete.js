'use strict';

/**
 * Paquete.js controller
 *
 * @description: A set of functions called "actions" for managing `Paquete`.
 */

module.exports = {

  /**
   * Retrieve paquete records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.paquete.search(ctx.query);
    } else {
      return strapi.services.paquete.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a paquete record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.paquete.fetch(ctx.params);
  },

  /**
   * Count paquete records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.paquete.count(ctx.query);
  },

  /**
   * Create a/an paquete record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.paquete.add(ctx.request.body);
  },

  /**
   * Update a/an paquete record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.paquete.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an paquete record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.paquete.remove(ctx.params);
  }
};
