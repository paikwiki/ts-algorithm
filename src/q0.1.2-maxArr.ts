{
  // Q.
  // 정수 배열에서 가장 큰 값을 반환하는 함수 maxArr()
  // 배열과 배열의 크기를 인자로 받는다.

  // A1.
  const maxArr = (arr: Array<number>, arrLen: number): number => {
    let maxa: number;
    let i: number;

    maxa = arr[0];
    for(i = 1; i < arrLen; i++) {
      if(arr[i] > maxa) maxa = arr[i];
    }

    return maxa;
  }

  // A2.
  const maxArr2 = (arr: Array<number>): number => {
    return arr.reduce((prev, curr) => prev > curr ? prev : curr)
  };

  // App

  console.log(maxArr([2,5,7,8,13,11], 6)); // 13
  console.log(maxArr2([2,5,7,8,13,11])); // 13
}
