"use strict";
import { isEmpty } from 'lodash';
import { esClient, esb } from "../util/elasticsearch/connection";

//Graph controller
const getDashboardGraphController = async (req, res) => {
    //console.log(JSON.stringify(req.headers));
    try{
        let getHeaders = req.headers;
        //let getQuery = queryDPGraphAggs();
        let getQuery = queryPGGraphAgg(getHeaders);
        
        //Client Part
        esClient.search({
            index: 'dailyreports',
            //type: 'report',
            type:'pgstats',
            body:getQuery
        })
        .then(resp => {
            let getAllhit = [];
            let getAllBucket = []; //aggregation

            resp.hits.hits.forEach((hit)=>{
                getAllhit.push(hit); 
            })

            resp.aggregations.dayAgg.buckets.forEach((bucket)=>{
                getAllBucket.push(bucket); 
            })
            
            res.status(200).send({
                hits:getAllhit,
                aggregations: getAllBucket
            });
        })
        .catch(err => {
            console.trace(err.message);
        });
    }catch(err){
        res.status(404).send({
            message: 'Not Found'
        });
    }
};



// Query for DP Graph
const queryDPGraphAggs = () => {
        let requestBody;
        requestBody = esb.requestBodySearch()
        .query(
            esb.boolQuery()
                .must(esb.termsQuery('ad_type', [ 0, 1, 2 ]))
                .must(esb.termsQuery('publisher_id', [1143, 0, 2065, 2098, 2099, 2747, 2748, 2746, 1043, 1173, 1140, 1402, 4090, 2, -1]))
                .must(esb.termsQuery('supply_type', [1,2]))
                .filter(esb.rangeQuery('day').from("2016-06-01T00:00:00").to("2019-04-12T23:59:59").includeLower(true).includeUpper(true))
                .should([esb.boolQuery()
                .must([esb.termQuery('ad_network_id', 11), esb.existsQuery('dspId'), esb.existsQuery('dealId')])
                .mustNot(esb.existsQuery('advertiserId')), 
                esb.termsQuery('ad_network_id', [ 1, 9, 10, 12 ])])
                .minimumShouldMatch("1")
    
        )
        .agg(
            esb.dateHistogramAggregation('dayAgg', 'day')
                .interval('1d')
                .minDocCount(0)
                .format("yyyy-MM-dd")
                .extendedBounds(1464719400000, 1555007400000)
                .agg(esb.sumAggregation('cost', 'cost'))
                .agg(esb.sumAggregation('platformFee', 'platformFee'))
                .agg(esb.sumAggregation('imps_sold', 'imps_sold'))
                .agg(esb.sumAggregation('clicks', 'clicks'))
                .agg(esb.sumAggregation('total_revenue', 'total_revenue'))
                .agg(esb.sumAggregation('pubNet', 'pubNet'))
        )
        return requestBody.toJSON();
}

// Query for PG Graph
const queryPGGraphAgg = (getHeaders) => {
        let stringAdType = getHeaders.ad_type;
        let arrAdType = stringAdType.split(',').map(Number);

        let stringPartnerId = getHeaders.partner_id;
        let arrPartnerId = stringPartnerId.split(',').map(Number);

        let stringSupplyType = getHeaders.supply_type;
        let arrupplyType = stringSupplyType.split(',').map(Number);

        console.log(arrAdType);
        console.log(arrPartnerId);
        console.log(arrupplyType);
       

        let requestBody = esb.requestBodySearch()
        .query(
            esb.boolQuery()
                .must(esb.termsQuery('ad_type', arrAdType))
                .must(esb.termsQuery('partner_id', arrPartnerId))
                .must(esb.termsQuery('ad_network_id', [0]))
                .must(esb.termsQuery('supply_type', arrupplyType))
                .filter(esb.rangeQuery('day').from('2016-06-01T00:00:00').to('2019-04-12T23:59:59').includeLower(true).includeUpper(true))
                .should([esb.boolQuery().mustNot(esb.existsQuery('segment_id')), esb.termQuery('segment_id', -1)])
                .minimumShouldMatch("1")
    
        )
        .agg(
            esb.dateHistogramAggregation('dayAgg', 'day')
                .interval('1d')
                .minDocCount(0)
                .format("yyyy-MM-dd")
                .extendedBounds(1464719400000, 1555007400000)
                .agg(esb.sumAggregation('pg_request', 'pg_request'))
                .agg(esb.sumAggregation('pg_valid_response', 'pg_valid_response'))
                .agg(esb.sumAggregation('nofillFee', 'nofillFee'))
                .agg(esb.sumAggregation('pg_impression', 'pg_impression'))
                .agg(esb.sumAggregation('pg_click', 'pg_click'))
                .agg(esb.sumAggregation('pg_response_rate', 'pg_response_rate'))
                .agg(esb.sumAggregation('pg_qualified_response', 'pg_qualified_response'))
                .agg(esb.sumAggregation('pg_valid_request', 'pg_valid_request'))
        )
        return requestBody.toJSON();
}

// Overview controller
const getDashboardOverviewController = (req, res) => {
    try{
       // Query Builder Part
       let requestBody;
      
       requestBody = esb.requestBodySearch()
       .query(
           esb.boolQuery()
               .must(esb.termsQuery('ad_type', [ 0, 1, 2 ]))
               .must(esb.termsQuery('publisher_id', [1143, 0, 2065, 2098, 2099, 2747, 2748, 2746, 1043, 1173, 1140, 1402, 4090, 2, -1]))
               .must(esb.termsQuery('supply_type', [1,2]))
               .filter(esb.rangeQuery('day').from("2016-06-01T00:00:00").to("2019-04-12T23:59:59").includeLower(true).includeUpper(true))
               .should([esb.boolQuery()
               .must([esb.termQuery('ad_network_id', 11), esb.existsQuery('dspId'), esb.existsQuery('dealId')])
               .mustNot(esb.existsQuery('advertiserId')), 
               esb.termsQuery('ad_network_id', [ 1, 9, 10, 12 ])])
               .minimumShouldMatch("1")
       )
       .agg(esb.sumAggregation('cost', 'cost'))
       .agg(esb.sumAggregation('platformFee', 'platformFee'))
       .agg(esb.sumAggregation('imps_sold', 'imps_sold'))
       .agg(esb.sumAggregation('clicks', 'clicks'))
       .agg(esb.sumAggregation('total_revenue', 'total_revenue'))
       .agg(esb.sumAggregation('pubNet', 'pubNet'))
               
       // Client Part
        esClient.search({
           index: 'dailyreports',
           type: 'report',
           body: requestBody.toJSON()
        })
        .then(resp => {
            let getAllhit =  [];
            
            resp.hits.hits.forEach(function(hit){
               getAllhit.push(hit); 
            })

            res.status(200).send({
               hits: getAllhit,
               aggregations:resp.aggregations
            });
        })
       .catch(err => {
           console.trace(err.message);
       });
    }catch(err){
        res.status(404).send({
            message: 'Not Found'
        });
    }
};

// Export 
module.exports = {
    getDashboardGraphController,
    getDashboardOverviewController
};


