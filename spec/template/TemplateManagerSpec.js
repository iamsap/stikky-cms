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

    it('uses a datalayer to the database'

});