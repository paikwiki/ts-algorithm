import * as readline from 'readline';

{
  // Q.
  // 원형 큐 작성
  // 배열의 끝까지 저장하고 나면, 다시 배열의 앞쪽부터 번호 저장하기

  // A.
  const circularQueue: Array<number> = [];
  let head: number  = 0;
  let tail: number = -1;
  let queueSize: number = 0;
  const QUEUE_CAPACITY = 8;

  const enqueue = (item: number): void =>{
    if(QUEUE_CAPACITY > queueSize) {
      tail = (tail + 1) % QUEUE_CAPACITY;
      queueSize++;
      circularQueue[tail] = item;
    }
    else console.log('queue full!');
  };

  const dequeue = (): number =>{
    let item: number
    if(queueSize === 0) {
      console.log('queue empty!');
      return;
    }
    item = circularQueue[head];
    head = (head + 1) % QUEUE_CAPACITY;
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
