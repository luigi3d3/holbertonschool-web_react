// main.ts
/// <reference path="crud.d.ts" />
import * as CRUD from './crud'; // Assuming crud.js is in the same directory
import { RowElement, RowID } from './interface';
// Creating the object with the type RowElement
const row: RowElement = {
  firstName: 'luigino',
  lastName: 'loayza'
};
// Inserting the row and storing the new row's ID
const newRowID: RowID = CRUD.insertRow(row);
console.log('Insert row', row);
// Updating the row with a new age
const updatedRow: RowElement = {
  ...row, // Spread operator to copy all properties from row
  age: 23
};
CRUD.updateRow(newRowID, updatedRow);
console.log(`Update row ${newRowID}`, updatedRow);
// Deleting a row with a given ID
CRUD.deleteRow(125);
console.log('Delete row id', 125);
