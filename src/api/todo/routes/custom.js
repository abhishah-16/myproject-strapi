module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/custom',
            handler: 'todo.createAction',
            config: {
                auth: false
            }
        }
    ]
}