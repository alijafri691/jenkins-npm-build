console.log("Running test...");
const result = 1 + 1;

if (result === 2) {
  console.log("Test passed!");
  process.exit(0);
} else {
  console.log("Test failed!");
  process.exit(1);
}
