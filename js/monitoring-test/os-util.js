const os = require('os');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

function getLoadavg() {
  const loads = os.loadavg();
  return loads[0].toFixed(2) + ', ' + loads[1].toFixed(2) + ', ' + loads[2].toFixed(2);
}

async function getCpuCount() {
  const platform = os.platform();
  if (platform === 'darwin') {
    const { stdout } = await exec('sysctl -a | grep hw.ncpu');
    return stdout.split(' ')[1][0];
  } else if (platform === 'linux') {
    const { stdout } = await exec('grep -c processor /proc/cpuinfo');
    return stdout;
  }
}

async function getMemoryUsage() {
  const platform = os.platform();
  if (platform === 'linux') {
    const { stdout } = await exec(
      `free -m | awk 'NR==2{printf "Memory Usage: %.2f%%\\nAvailable Memory: %s Gi", ($2-$7)*100/$2, $7/1000 }'`,
    );
    return stdout;
  }
}

async function getDiskUsage() {
  const platform = os.platform();
  if (platform === 'linux') {
    const { stdout } = await exec(
      `df -h | awk '$NF=="/"{printf "Disk Usage: %.2f/%.2fGB (%s)", $3,$2,$5}'`,
    );
    return stdout;
  }
}

(async function () {
  const loadavg = getLoadavg();
  const cpu = await getCpuCount();
  const memory = await getMemoryUsage();
  const disk = await getDiskUsage();

  console.log(`CPU Load average: ${loadavg}\nCPU Count: ${cpu}\n${memory}\n${disk}`);
})();

module.exports = {
  getLoadavg,
  getCpuCount,
  getMemoryUsage,
  getDiskUsage,
};
