'use strict'

var TemplateManager = require('../src/template/TemplateManager');
var scriptConfig = require('./add-template.json');
var mgr = new TemplateManager();
mgr.addTemplate(scriptConfig.templateName, scriptConfig.templateDir)
.then(function onSuccess(template){
   console.log('Template:' + template.toJSON());
    process.exit(0);
}, function onError(err){
    console.log('Error: ' + err.toString());
    process.exit(1);
});