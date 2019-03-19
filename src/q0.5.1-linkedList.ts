import * as readline from 'readline';

{
  // Q.
  // 연결리스트를 이용하여 대기번호 관리 프로그램을 구현하라.

  // A.
  const nodeItemFactory = (customerNumber: number) => {
    const nodeItem = new Map<string, any>();
    nodeItem.set('customerNumber', customerNumber);
    nodeItem.set('next', null);

    return nodeItem;
  };

  let head: Map<string, any>  = null;
  let tail: Map<string, any>  = null;
  
  const insertNode = (customerNumber: number): void =>{
    const newNode = nodeItemFactory(customerNumber);
    if(head === null) {
      head = newNode;
      tail = newNode;
    } else {
      tail.set('next', newNode);
      tail = newNode;
    }
  };

  const deleteNode = (): number =>{
    let r: number;
    if(head === null) {
      console.log('empty node!');
      return;
    }
    r = head.get('customerNumber');
    head = head.get('next');

    console.log(`[${r}]`);
    return r;
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
        deleteNode();
      } else if(pAnswer > 0) {
        insertNode(pAnswer);
      }
      if(pAnswer < 0) return;
      else io();
    });
  };

  // App
  io();
}
