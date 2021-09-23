const documents = require('./documents.json');
var urlencode = require('urlencode');

const {
  writeFile
} = require("fs");

const docIds = documents.value.map(doc => urlencode(doc.Id));

writeFile("./ids.json", JSON.stringify(docIds, null, "\t"), err => {
  if (err) console.log(err);
  console.log('OK');
});