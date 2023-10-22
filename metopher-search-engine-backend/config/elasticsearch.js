const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
  host: 'http://localhost:9200', // Replace with your Elasticsearch cluster URL
});

module.exports = client;
