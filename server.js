
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!");

    console.log(`My favorite food is ${process.env.ENV_FAVORITE_FOOD}`);
    await sleep(5000);
  }
}

main();
