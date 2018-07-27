'use strict';

/**
 * Hub.js controller
 *
 * @description: A set of functions called "actions" for managing `Hub`.
 */

module.exports = {

  /**
   * Retrieve hub records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.hub.search(ctx.query);
    } else {
      return strapi.services.hub.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a hub record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.hub.fetch(ctx.params);
  },

  /**
   * Count hub records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.hub.count(ctx.query);
  },

  /**
   * Create a/an hub record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.hub.add(ctx.request.body);
  },

  /**
   * Update a/an hub record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.hub.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an hub record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.hub.remove(ctx.params);
  }
};
