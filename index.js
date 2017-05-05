require('./src/scope-prod');

if (process.env.NODE_ENV !== 'production') {
    require('./src/scope');
}