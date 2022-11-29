setInterval(() => {
  let rang = Math.floor(Math.random() * 1000000);
  document.body.style.backgroundColor = `#${rang}`;
  console.log(rang);
}, 1000);
