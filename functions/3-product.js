require('dotenv').config();
const Airtable = require('airtable-node');

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base('appr2D6JsFjCaCBEl')
  .table('products');

exports.handler = async (event) => {
    const { id } = event.queryStringParameters;

    try {
        const product = await airtable.retrieve(id);

        if (!id || product.error) {
            throw new Error();
        }

        return {
            statusCode: 200,
            body: JSON.stringify(product)
        };
    } catch (error) {
        return {
            statusCode: 404,
            body: 'That resource does not exist.'
        };
    }
};