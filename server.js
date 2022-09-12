const favorite_tutor = process.env.FAVORITE_TUTOR_NAME;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!");
    console.log(`my favorite tutor so far is  ${favorite_tutor}`);
    await sleep(5000);
  }
}

main();
