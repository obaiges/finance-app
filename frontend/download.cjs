const https = require('https');
const fs = require('fs');

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  const loginUrl = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzllYzRiZDU1NjhiZjQ2MTQ4ZjNkNmYzNGNlMjkyNDg1EgsSBxDDztD8zggYAZIBJAoKcHJvamVjdF9pZBIWQhQxNDAzODU5ODc2NDI0NDQwNzEwNQ&filename=&opi=89354086";
  const dashboardUrl = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2I5MGZkYTY4YWUzZDRkNzlhZGE0Y2ZmZDA2ZTYyZTRkEgsSBxDDztD8zggYAZIBJAoKcHJvamVjdF9pZBIWQhQxNDAzODU5ODc2NDI0NDQwNzEwNQ&filename=&opi=89354086";
  const addTransactionUrl = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzg3YTA4NTJhMTQ2NjQwYWFiOTIwMjI0ZmZiNjkxOGFhEgsSBxDDztD8zggYAZIBJAoKcHJvamVjdF9pZBIWQhQxNDAzODU5ODc2NDI0NDQwNzEwNQ&filename=&opi=89354086";

  await downloadFile(loginUrl, "temp_html/login.html");
  await downloadFile(dashboardUrl, "temp_html/dashboard.html");
  await downloadFile(addTransactionUrl, "temp_html/add_transaction.html");
  console.log("Done");
}

run();
