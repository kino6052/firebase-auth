var parameters = require('../scripts/parameters.js');
var createFile = require('create-file');
var del = require('delete');

var pathToFile = './src/index.html';
var content = `
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>` + parameters.TITLE + `</title>
  <meta name="description" content="` + parameters.DESCRIPTION + `">
  <meta name="author" content="` + parameters.AUTHOR + `">
  <!-- inject:css -->
  <!-- endinject -->
  <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
</head>
<body>
` + parameters.CONTENT  + `
<!-- inject:js -->
<!-- endinject -->
</body>
</html>
`;

del.promise([pathToFile], {force: true})
  .then(function() {
    createFile(pathToFile, content, function(err){
        console.log(err);
    });
  });




