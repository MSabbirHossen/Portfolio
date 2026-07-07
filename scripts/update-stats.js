import fs from 'fs';

const username = 'MSabbirHossen';
const token = process.env.GH_TOKEN;

const headers = {
  Accept: 'application/vnd.github+json',
  Authorization: `Bearer ${token}`,
};

async function fetchJSON(url) {
  const res = await fetch(url, { headers });

  if (!res.ok) {
    throw new Error(`${url}\n${res.status}`);
  }

  return res.json();
}

async function main() {
  const user = await fetchJSON(`https://api.github.com/users/${username}`);

  const repos = await fetchJSON(`https://api.github.com/users/${username}/repos?per_page=100`);

  const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);

  const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);

  const stats = {
    publicRepos: user.public_repos,
    followers: user.followers,
    following: user.following,
    totalStars,
    totalForks,
    updatedAt: new Date().toISOString(),
  };

  fs.writeFileSync('./public/stats.json', JSON.stringify(stats, null, 2));

  console.log('stats.json updated');
}

main();
