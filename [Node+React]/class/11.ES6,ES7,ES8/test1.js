
async function getTrace () {  
    pageContent = await fetch('https://api.github.com/orgs/octokit/repos', {
      method: 'get'
    })
  return pageContent.json()  //fetch 需用json轉換才能取得資料
}

getTrace()  
  .then((data) => {
    console.log('----');
    console.log(data);
  })
  .then(() => {
    console.log('end');
  })