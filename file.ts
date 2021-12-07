// type Operation = 'multiply' | 'add' | 'divide';

// const calculator = (a: number, b: number, op: Operation): number => {
//   switch (op) {
//     case 'multiply':
//       return a * b;
//     case 'add':
//       return a + b;
//     case 'divide':
//       if (b === 0) throw new Error('cant divide bu 0!');
//       return a / b;
//     default:
//       throw new Error('Operation is not multiply, add or divide!');
//   }
// };

// interface claculte {
//   value1: number;
//   value2: number;
//   opp: Operation;
// }

// const parseArguments = (arg: Array<string>): claculte => {
//   if (arg.length < 5) throw new Error('Not enough arguments');
//   if (arg.length > 5) throw new Error('too many arguments');

//   if (!isNaN(Number(arg[2])) && !isNaN(Number(arg[3]))) {
//     return {
//       value1: Number(arg[2]),
//       value2: Number(arg[3]),
//       opp: arg[4],
//     };
//   } else {
//     throw new Error('Provided values were not numbers!');
//   }
// };

// try {
//   const { value1, value2, op } = parseArguments(process.argv);
//   console.log(calculator(value1, value2, op));
// } catch (error: unknown) {
//   let errorMessage: string = 'Something went wrong';
//   if (error instanceof Error) {
//     errorMessage += ' Error: ' + error.message;
//   }
//   console.log(errorMessage);
// }

// console.log(process.argv);
