export function analyze(input) {
  if (!Number.isInteger(input.syntheticCount) || input.syntheticCount < 1 || input.syntheticCount > 1000000) {
    throw new Error("Synthetic count must be an integer from 1 to 1,000,000.");
  }
  const started = Date.now();
  const findings = [];
  for (let index = 0; index < input.syntheticCount; index++) {
    const path = index === input.attackIndex ? "/etc/passwd" : "/assets/" + (index % 512);
    if (path.startsWith("/etc/")) findings.push({index, path, rule:"sensitive-path-access"});
  }
  return {scanned:input.syntheticCount,count:findings.length, findings, elapsedMs:Date.now()-started};
}
