{
  // Q.
  // 피보나치 수열의 n번째 항 Fn을 계산하여 반환하는 함수를 작성하고, f20, f50을 구하라.

  // A.
  const fibo = (n: number): number => {
    if(n === 1 || n === 2) return 1;
    else return fibo(n-1) + fibo(n-2);
  }

  // App
  console.log(fibo(20)); // 6765
  console.log(fibo(50)); // 12586269025
}
