//arrays function examples 
//1 map():
import React from 'react';
import { Text } from 'react-native';

export default function App() {
  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = numbers.map((num) => num * 2);

  return (
    <Text>{JSON.stringify(doubledNumbers)}</Text>
  );
}


//2: filter():
import React from 'react';
import { Text } from 'react-native';

export default function App() {
  const numbers = [1, 2, 3, 4, 5];
  const evenNumbers = numbers.filter((num) => num % 2 === 0);

  return (
    <Text>{JSON.stringify(evenNumbers)}</Text>
  );
}


//3: reduce():


import React from 'react';
import { Text } from 'react-native';

export default function App() {
  const numbers = [1, 2, 3, 4, 5];
  const sum = numbers.reduce((acc, num) => acc + num, 0);

  return (
    <Text>{sum}</Text>
  );
}
