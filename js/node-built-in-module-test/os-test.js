const os = require('os');

// console.log('os EOL : ', os.EOL);
console.log('os CPU architecture (= process.arch) : ', os.arch());
// console.log('os constants for errro codes, process signals etc : ', os.constants);
console.log('os info of cpu cores :', os.cpus());
console.log('os endianness of cpu :', os.endianness());
console.log('amount of free memory in bytes :', `${os.freemem() / (1024 * 1024)} MB`);
console.log('total amount of memory in bytes :', `${os.totalmem() / (1024 * 1024)} MB`);
console.log('os $HOME :', os.homedir());
console.log('host name of os :', os.hostname());

/*
 * Load Average란 시스템의 부하를 평균치로 알려주는 것. 얼마나 많은 프로세스가 실행 대기 중인지를 의미하는 수치.
 * 1: 시스템 부하 어느정도 있음. 2: 사용량 많음  3: 사용량 아주 많음  4: 시스템이 현저히 느려짐.
 * [ 1분 평균 CPU Load, 5분 평균 CPU Load, 15분 평균 CPU Load ]
 */
console.log('load average of os :', os.loadavg());
// console.log('network interfaces of os :', os.networkInterfaces());
console.log('platform of os :', os.platform());
console.log('os name :', os.type());
console.log('os uptime in seconds:', os.uptime());

const totalMem = os.totalmem();
const freeMem = os.freemem();
