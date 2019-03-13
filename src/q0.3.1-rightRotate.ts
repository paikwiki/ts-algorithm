{
  // Q.
  // 배열의 일부를 오른쪽으로 1만큼 회전시키는 rightRotate() 함수를 작성하라.

  // A.
  const rightRotate = (arr: Array<any>, s: number, t: number): void => {
    let last: any;
    last = arr[t];
    for (let i = t; i > s; i--) {
      arr[i] = arr[i-1];
    }
    arr[s] = last;
  }

  // App
  const arr: Array<any> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  rightRotate(arr, 3, 7)
  console.log(arr); // [0, 1, 2, 7, 3, 4, 5, 6, 8, 9]
}
