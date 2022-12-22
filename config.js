const config = {};
config.host = process.env.HOST || "https://azurecosmosdbaccountname.documents.azure.com:443/";config.authKey =
 process.env.AUTH_KEY || "k9WBsy2EiWmaYZJIdm9n7lDXLEdFufTQCxigM02NrK88dmWiU3QdGIUwMVuTuWFO4fgosyHmE78OACDbeaC66w==";
config.databaseId = "ToDoList";
config.containerId = "Items";
if (config.host.includes("https://localhost:")) {
 console.log("Local environment detected");
 console.log("WARNING: Disabled checking of self-signed certs. Do nothave this code in production.");
 process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
 console.log(`Go to http://localhost:${process.env.PORT || '3000'} to
try the sample.`);
}
module.exports = config;
