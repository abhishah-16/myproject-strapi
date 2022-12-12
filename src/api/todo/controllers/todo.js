'use strict';

/**
 * todo controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::todo.todo', ({ strapi }) => ({
    async createAction(ctx) {
        try {
            ctx.body = 'hello world from custom path'
        } catch (error) {
            ctx.body = err
        }
    },
    async find(ctx) {
        ctx.query = { ...ctx.query, local: 'en' }
        const { data, meta } = await super.find(ctx)
        meta.date = Date.now()
        const todoData = await data.filter((d) => {
            return d.attributes.isCompleted == false
        })
        return { todoData, meta }
    }
}));
