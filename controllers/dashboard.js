import { isEmpty } from 'lodash';
import { esClient, esb } from "../util/elasticsearch/connection";

//Graph controller
const getDashboardGraphController = (req, res) => {
    try{
        esClient.count({index: 'gov',type: 'constituencies'},function(err,resp,status) {  
            console.log("constituencies count",resp);
        });
        
        res.status(200).send({
            message: 'hjsgfhgfhjsfjsgj'
        });
    }catch(err){
        res.status(500).send({
            message: 'Internal Server Error'
        });
    }
};

// Overview controller
const getDashboardOverviewController = (req, res) => {
    try{
        esClient.count({index: 'gov',type: 'constituencies'},function(err,resp,status) {  
            console.log("constituencies count",resp);
        });
        
        res.status(200).send({
            message: 'kkkjkkjkk'
        });
    }catch(err){
        res.status(500).send({
            message: 'Internal Server Error'
        });
    }
};

module.exports = {
    getDashboardGraphController,
    getDashboardOverviewController
};


