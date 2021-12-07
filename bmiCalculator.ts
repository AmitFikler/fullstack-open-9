const calculateBmi = (h: number, kg: number): string => {
  const bmi = kg / h ** 2;
  console.log(bmi);
  if (18.5 < bmi && bmi < 24.9) {
    return 'Normal (healthy weight)';
  }
};

console.log(calculateBmi(1.8, 74));
