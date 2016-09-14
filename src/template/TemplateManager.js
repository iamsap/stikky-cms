'use strict'
var logger = require('../util/Logger');
var DataLayer = require('../data/DataLayer');

function TemplateManager(dataLayer) {
    this.dataLayer = dataLayer;

    if(!this.dataLayer){
        logger.debug('TemplateManager() initializing with default dataLayer');
        this.dataLayer = new DataLayer();
    }
}

TemplateManager.prototype.getTemplates = function getTemplates() {
    logger.debug('TemplateManager.getTemplates');
    return this.dataLayer.getTemplates();
}

TemplateManager.prototype.addTemplate = function addTemplate(name, description) {
    var templateObj = {templateName:name, templateDescription:description};
    logger.debug('TemplateManager.addTemplate', templateObj);
    return this.dataLayer.insertTemplate(templateObj);
}

module.exports = TemplateManager