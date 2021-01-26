fetch(
  // Explain each parameter in comments below.
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.

// per_page - Results per page (max 100)
// state - Indicates the state of the issues to return. Can be either open, closed, or all.
// sort - What to sort results by. Can be either created, updated, comments.
// direction - One of asc (ascending) or desc (descending).