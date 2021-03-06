import * as readline from 'readline';
{
  // Q.
  // 이항계수 구하기
  // 점화식을 이용하여 이항계수 계산하기

  // A.
  const choose = (n, r): number => {
    if( r === 0 || n === r) return 1;

    return choose(n-1, r-1) + choose(n-1, r);
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
      
      console.log(choose(n, r));
    })
  }

  io();
}
