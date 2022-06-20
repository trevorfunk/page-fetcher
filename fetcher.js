const request = require('request');
const fs = require('fs');

const URL = process.argv[2]
const localFilePath = process.argv[3]

const fetch = (URL, localFilePath) => {
request(URL, (error, response, body) => {
 if (error) {
  console.log(error);
  return;
 }

 fs.writeFile(localFilePath, body, 'utf8', (error) => {
  if (error) {
   console.log(error);
  } else {
console.log(`Downloaded and saved ${body.length} bytes to ${localFilePath}`)
  }
 });
});
}
fetch(URL, localFilePath);
