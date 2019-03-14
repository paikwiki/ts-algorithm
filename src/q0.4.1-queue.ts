import * as readline from 'readline';

{
  // Q.
  // 은행 대기번호 관리 프로그램
  // 대기번호가 입력되면 큐에 저장한다. 0이 입력되면 가장 오래 기다린 대기번호를 꺼내어 출력한다.
  // 0보다 작은 수가 입력되면 프로그램을 종료하고, 0을 입력했을 때 큐가 비었으면 'queue empty!'를
  // 출력하고, 배열이 가득차면 'queue full!'을 출력해야 한다.

  // A.
  const queue: Array<number> = [];
  let head: number  = 0;
  let tail: number = -1;
  let queueSize: number = 0;
  const QUEUE_CAPACITY = 8;

  const enqueue = (item: number): void =>{
    if(QUEUE_CAPACITY > queueSize) {
      tail++;
      queueSize++;
      queue[tail] = item;
    }
    else console.log('queue full!');
  };

  const dequeue = (): number =>{
    let item: number
    if(queueSize === 0) {
      console.log('queue empty!');
      return;
    }
    item = queue[head];
    head++
    queueSize--;

    console.log(`[${item}]`);

    return item;
  };

  const io = (): void => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('input number: ', (answer: string) => {
      rl.close();
      const pAnswer: number = parseInt(answer);
      if(pAnswer === 0) {
        dequeue();
      } else {
        enqueue(pAnswer);
      }
      if(pAnswer < 0) return;
      else io();
    });
  };

  // App
  io();
}
