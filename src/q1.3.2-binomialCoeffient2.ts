import * as readline from 'readline';
{
  // Q.
  // 이항계수 구하기
  // 점화식을 이용하여 이항계수 계산하기, 한 번 계산된 값은 저장해서 다시 계산하지 않도록 하기

  // A.
  const memo = [];

  const choose2 = (n, r): number => {
    if(typeof memo[n] === 'undefined') memo[n] = [];
    if(typeof memo[n][r] !== 'undefined') return memo[n][r];
    if( r === 0 || n === r) {
      return memo[n][r] = 1;
    }

    return memo[n][r] = choose2(n-1, r-1) + choose2(n-1, r);
  }

  const io = (): void => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('input n, r: ', (answer: string) => {
      rl.close();
      let n: number;
      let r: number;
      [n, r] = answer.split(' ').map(i=>parseInt(i));

      console.log(choose2(n, r));
    })
  }

  io();
}
