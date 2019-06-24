// race.js
const usainBolt = new Promise((resolve, reject) =>
  setTimeout(() => resolve('Usain Bolt'), 100),
);

const tysonGay = new Promise((resolve, reject) =>
  setTimeout(() => resolve('Tyson Gay'), 200),
);

const startTime = Date.now();
Promise.race([usainBolt, tysonGay]).then(runnersName => {
  console.log(
    `And the winner is...${runnersName} in ${Date.now() - startTime}ms`,
  );
});

