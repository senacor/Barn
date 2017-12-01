const validate = require('validate-cloud-config');

let source = 'cloud-config.yml'; 

let isValid = yield validate(source);
