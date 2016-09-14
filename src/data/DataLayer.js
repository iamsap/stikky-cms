'use strict'
var Models = require('./Models');
var logger = require('../util/Logger');

function DataLayer(){

}

DataLayer.prototype.insertTemplate = function insertTemplate(templateObj){
    logger.debug('DataLayer.insertTemplate', {templateObj:templateObj});
    return Models.Template.create(templateObj);
}

module.exports = DataLayer