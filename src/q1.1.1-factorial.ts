{
  // Q. n!을 계산하여 반환하는 함수를 작성하라.
  // A.
  const factorial = (n: number): number => {
    let result: number = 1;
    for (let i=2; i<=n; i++)
      result *= i;

    return result;
  };

  // App
  console.log(factorial(4)); // 24
  console.log(factorial(6)); // 720
}