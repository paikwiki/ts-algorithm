{
  // Q.
  // n!을 계산하여 반환하는 재귀함수를 작성하라.

  // A.
  const factorial2 = (n: number): number => {
    if (n === 1) return 1;
    else return n * factorial2(n-1);
  }
  
  // App
  console.log(factorial2(4)); // 24
  console.log(factorial2(6)); // 720
}
