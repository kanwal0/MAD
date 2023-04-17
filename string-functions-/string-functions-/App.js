//string fucntions 
//1:uppercase

import React from 'react';
import { Text } from 'react-native';

export default function App() {
  const str = 'hello world';
  const upperCaseStr = str.toUpperCase();

  return (
    <Text>{upperCaseStr}</Text>
  );
}

//split()


import React from 'react';
import { Text } from 'react-native';

export default function App() {
  const str = 'apple,banana,orange';
  const arr = str.split(',');

  return (
    <Text>{JSON.stringify(arr)}</Text>
  );
}


//trim():
import React from 'react';
import { Text } from 'react-native';

export default function App() {
  const str = '    hello world    ';
  const trimmedStr = str.trim();

  return (
    <Text>{trimmedStr}</Text>
  );
}

