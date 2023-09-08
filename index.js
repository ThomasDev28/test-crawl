async function crawlGithubRepo(owner, repo) {
    try {
      const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching the GitHub repo: ', error);
    }
  }


crawlGithubRepo('ThomasDev28', 'test-crawl');