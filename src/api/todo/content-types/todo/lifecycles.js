module.exports = {
    async afterCreate(event) {
        const { result } = event
        try {
            await strapi.plugins['email'].services.email.send({
                to: 'abhi.s@simformsolutions.com',
                from: 'abhishah0196@gmail.com',
                subject: 'Your have new task  -strapi_abhishah',
                text: `your task is ${result.name}`
            })
        } catch (error) {
            console.log(error);
        }
    }
}