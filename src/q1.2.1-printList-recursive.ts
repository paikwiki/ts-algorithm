import * as readline from 'readline';
import { stringify } from 'querystring';

{
  // Q.
  // 프로그램을 종료하면 연결리스트에 남아있는 대기번호를 재귀호출을 사용하여
  // 순서대로 모두 출력하도록 프로그램을 수정하라

  // A.
  const nodeItemFactory = (customerNumber: number) => {
    const nodeItem = new Map<string, any>();
    nodeItem.set('customerNumber', customerNumber);
    nodeItem.set('next', null);

    return nodeItem;
  };

  let head: Map<string, any>  = null;
  let tail: Map<string, any>  = null;

  const printList = (from: Map<string, any>): void => {
    if(from == null) return;
    console.log(from.get('customerNumber'));
    printList(from.get('next'));
  };
  
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
      if(pAnswer < 0) printList(head);
      else io();
    });
  };

  // App
  io();
}
