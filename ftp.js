require('dotenv').config({path: __dirname + '/variables.env.local'})
var Deploy = require ('ftp-deploy'); 
var ftpDeploy = new Deploy (); 
 
var config = { 
    host    : "51.210.241.194", 
    user    : process.env.USER_FTP, 
    password: process.env.PASS_FTP, 
    port    : 21, 
    localRoot   : __dirname + '/build', 
    remoteRoot  : 'public_html/interno/', 
    include     : ['*'], 
    deleteRemote: true 
}
ftpDeploy.deploy(config, function(err, res) {
    if (err) console.log(err)
    else console.log('finished:', res);
});
ftpDeploy.on("uploading", function(data) {
    data.totalFilesCount; 
    data.transferredFileCount;
    data.filename; 
});
ftpDeploy.on("uploaded", function(data) {
    console.log(data); 
});
ftpDeploy.on("log", function(data) {
    console.log(data);
});
ftpDeploy.on("upload-error", function(data) {
    console.log(data.err);
});