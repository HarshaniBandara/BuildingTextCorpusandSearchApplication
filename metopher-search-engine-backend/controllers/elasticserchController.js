const elasticsearch = require("../config/elasticsearch");

// get all
const search = async (req, res) => {
  console.log("in the search ellastic ");
  try {
    const response = await elasticsearch.search({
      index: "my-sinhala-metaphors",
      body: {
        query: {
          match: {
            Metaphor_present_or_not: "true",
          },
        },
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
            target: query.target,
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
    const { poet, poem, source, target, meaning } = req;
    console.log(poet);
    const query = [];

    if (meaning) {
      query.push({ match: { meaning: meaning } });
    }
    if (poet) {
      query.push({ match: { poet: poet } });
    }
    if (poem) {
      query.push({ match: { poem: poem } });
    }
    if (source) {
      query.push({ match: { source: source } });
    }
    if (target) {
      query.push({ match: { target: target } });
    }
    query.push({ match: { Metaphor_present_or_not: true } });

    if (query.length === 0) {
      return res.status(400).send({ message: "No selected parameters" });
    }

    const response = await elasticsearch.search({
      index: "my-sinhala-metaphors",
      size: 100,
      body: {
        query: {
          bool: {
            must: query,
          },
        },
      },
    });

    console.log(response.hits.hits);
    return response.hits.hits;
  } catch (error) {
    console.log("error", error);
    throw error;
    res.status(400).send({ error: error, message: "Internal server error" });
  }
};

module.exports = {
  search,
  searchByPoet,
  searchByParams,
};
