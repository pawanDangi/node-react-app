import elasticsearch from "elasticsearch";
import esb from "elastic-builder";

// Test connection need to change
const esClient = new elasticsearch.Client( {  
  hosts: [
    //'https://[username]:[password]@[server]:[port]/'
    'https://elastic:69yrfJmNsnqhQQ5lS4gpXqbo@8138588b6d2043fe8eedd9b61c4e32df.us-central1.gcp.cloud.es.io:9243'
  ]
});

module.exports = {
    esClient,
    esb
};