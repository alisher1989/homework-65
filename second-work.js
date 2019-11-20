
// 1) Первый пример
var grades = [1, 5, 12, 4, 3];
function getAvg(grades) {
  const total = grades.reduce((acc, c) => acc + c, 0);
  return total / grades.length;
}

const average = getAvg(grades);
console.log(average);

// 2) Второй пример
var second = [2, 3, 4, 5, 6, 7, 8, 9, 10];
function getSecond(second) {
  const total = second.reduce((acc, c) => acc + c, 0);
  return total / second.length;
}

const second_average = getSecond(second);
console.log(second_average);

// 3) Третий пример
var third = [3, 10, 17];
function getThird(third) {
  const total = third.reduce((acc, c) => acc + c, 0);
  return total / third.length;
}

const third_average = getThird(third);
console.log(third_average);