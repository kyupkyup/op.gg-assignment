const fetch = require("node-fetch");
print = async () => {
  const res = await fetch("https://codingtest.op.gg/api/summoner/hide on bush");

  const user = await res.json();

  console.log(user.summoner.leagues);
};
print();
