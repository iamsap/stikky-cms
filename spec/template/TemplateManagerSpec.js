'use strict'

var TemplateManager = require('../../src/template/TemplateManager');

describe('template manager', function(){

    it('can be initialized', function(){
        expect(TemplateManager).toBeDefined();
        var mgr = new TemplateManager();
        expect(mgr).toBeDefined();
    });

    it('has function getTemplates', function(){
        var mgr = new TemplateManager();
        expect(mgr['getTemplates']).toBeDefined();
    });

    it('uses a datalayer to the database', function(cb){
        var dl = {};
        dl.getTemplates = function getTemplates(){
            cb();
        }

        var mgr = new TemplateManager(dl);
        mgr.getTemplates();
    });

    it('has an addTemplate function', function(){
       var mgr = new TemplateManager();
        expect(mgr['addTemplate']).toBeDefined();
    });

    it('calls insertTemplate on data layer', function(cb){
        var dl = {};
        dl.insertTemplate = function insertTemplate(obj){
            cb();
        }
        var mgr = new TemplateManager(dl);
        mgr.addTemplate('name', 'description');
    });

});