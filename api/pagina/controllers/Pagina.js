'use strict';

/**
 * Pagina.js controller
 *
 * @description: A set of functions called "actions" for managing `Pagina`.
 */

module.exports = {

  /**
   * Retrieve pagina records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.pagina.search(ctx.query);
    } else {
      return strapi.services.pagina.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a pagina record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.pagina.fetch(ctx.params);
  },

  /**
   * Count pagina records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.pagina.count(ctx.query);
  },

  /**
   * Create a/an pagina record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.pagina.add(ctx.request.body);
  },

  /**
   * Update a/an pagina record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.pagina.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an pagina record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.pagina.remove(ctx.params);
  }
};
