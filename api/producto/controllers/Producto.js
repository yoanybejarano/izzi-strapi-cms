'use strict';

/**
 * Producto.js controller
 *
 * @description: A set of functions called "actions" for managing `Producto`.
 */

module.exports = {

  /**
   * Retrieve producto records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.producto.search(ctx.query);
    } else {
      return strapi.services.producto.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a producto record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.producto.fetch(ctx.params);
  },

  /**
   * Count producto records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.producto.count(ctx.query);
  },

  /**
   * Create a/an producto record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.producto.add(ctx.request.body);
  },

  /**
   * Update a/an producto record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.producto.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an producto record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.producto.remove(ctx.params);
  }
};
