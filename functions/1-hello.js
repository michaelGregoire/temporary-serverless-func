
exports.handler = async (event, context) => {
    console.log('context:', context);
    return {
        statusCode: 200,
        body: 'Yo, check this out…'
    };
};