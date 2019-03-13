{
  // Q.
  // 두 개의 정수(int 형)를 인자로 받아서 둘 중 큰 값을 반환하는 함수 max()와
  // 둘 중 작은 값을 반환하는 함수 min()을 작성하라.

  // A.
  const max = (x: number, y: number): number => x > y ? x : y;
  const min = (x: number, y: number): number => x < y ? x : y;

  // App

  console.log(max(3,4)); // 4
  console.log(min(6,7)); // 6
}
