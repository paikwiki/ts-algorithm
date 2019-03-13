{
  // Q.
  // 배열과 배열의 두 원소의 위치를 인자로 받아서 값을 바꾸는 swapArr() 함수 작성

  // A1.
  // 변수에 할당한 값은 함수를 이용해서 swap할 수 없었는데(q0.2.1-swap.ts 참고)
  // 변수에 할당한 배열은 함수 내에서 순서를 바꾸니까 순서가 바뀐다.
  const swapArr = (arr: Array<any>, pos1: number, pos2: number): void => {
    let temp: any;
    temp = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = temp;
  }

  // A2.
  // 구조분해할당 활용
  const swapArr2 = (arr: Array<any>, pos1: number, pos2: number): void => {
    [arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]];
  }

  // App
  const arr: Array<any> = [0, 1, 2, 3, 4];
  const arr2: Array<any> = ['a', 'b', 'c', 'd', 'e'];

  swapArr(arr, 1, 3);
  swapArr2(arr2, 1, 3);
  console.log(arr); // [0, 3, 2, 1, 4]
  console.log(arr2); // ['a', 'd', 'c', 'b', 'e']
}
