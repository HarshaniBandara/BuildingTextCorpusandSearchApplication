const elasticsearch = require("../config/elasticsearch");

// get all
const search = async (req, res) => {
  console.log('in the search ellastic ')
  try {
    const response = await elasticsearch.search({
      index: "my-sinhala-metaphors",
      body: {
        query:{
        match: {
          "Metaphor_present_or_not": "true",
        },} 
      },
      size: 300,
    });

    console.log(response);
    return response.hits.hits;
  } catch (error) {
    console.error("Elasticsearch search error:", error);
    throw error;
  }
};

async function searchByPoet(query) {
  try {
    const response = await elasticsearch.search({
      index: "my-sinhala-metaphors",
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
const searchByParams = async (req, res) => {
  try {
    console.log(req);
    const {poet, poem, source, target,meaning } = req;
    console.log(poet);
    const mustQueries = [];

    if (meaning) mustQueries.push({ match: { meaning: meaning} });
    // if (lyrics) mustQueries.push({ match_phrase: { lyrics: lyrics } });
    if (poet) mustQueries.push({ match: { poet: poet } });
    if (poem) mustQueries.push({ match: { poem: poem } });
    if (source) mustQueries.push({ match: { source: source } });
    if (target) mustQueries.push({ match: { target: target } });
    mustQueries.push({ match: { Metaphor_present_or_not: true, } });

    if (mustQueries.length === 0) {
      return res.status(400).send({ message: "No selected parameters" });
    }

    const response = await elasticsearch.search({
      index: "my-sinhala-metaphors",
      size: 100,
      body: {
        query: {
          bool: {
            must: mustQueries,
        
            
          },
          
        },
      },
    });
   
    console.log(response.hits.hits)
    return response.hits.hits;
    res.status(200).send(data.hits.hits);
  } catch (error) {
    console.log("error", error);
    throw error
    res.status(400).send({ error: error, message: "Internal server error" });
  }
};

module.exports = {
  search,
  searchByPoet,
  searchByParams,
};
