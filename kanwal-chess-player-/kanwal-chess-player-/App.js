import React from 'react';
import { View, StyleSheet } from 'react-native';

const ChessBoard = () => {
  // Define the two colors
  const colors = ['white', 'black'];

 
  const squareSize = 50;

  const rows = [];


  for (let row = 0; row < 8; row++) {
   
    const squares = [];

    for (let col = 0; col < 8; col++) {

      const color = colors[(row + col) % 2];

      
      const square = <View style={[styles.square, { backgroundColor: color, width: squareSize, height: squareSize }]} key={`${row}-${col}`} />;

      
      squares.push(square);
    }

  
    const rowElement = <View style={styles.row} key={row}>{squares}</View>;

    rows.push(rowElement);
  }

 
  return <View style={styles.board}>{rows}</View>;
};

const styles = StyleSheet.create({
  board: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default ChessBoard;
