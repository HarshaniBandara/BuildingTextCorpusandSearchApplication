const elasticsearch = require("../config/elasticsearch");

// Example search function
async function search(query) {
  try {
    const response = await elasticsearch.search({
      index: "sinhala-metaphors",
      body: {
        query: {
          match_all: {},
        },
      },
    });
    console.log(response);
    return response.hits.hits;
  } catch (error) {
    console.error("Elasticsearch search error:", error);
    throw error;
  }
}

async function searchByPoet(query) {
  try {
    const response = await elasticsearch.search({
      index: "sinhala-metaphors",
      body: {
        query: {
          match: {
            target: "ඇයගේ සමනල් මුවක්",
          },
        },
      },
    });
    console.log(response);
    return response.hits.hits;
  } catch (error) {
    console.error("Elasticsearch search error:", error);
    throw error;
  }
}

module.exports = {
  search,
};
