// crud.d.ts
/// <reference path="interface.ts" />
import { RowElement, RowID } from './interface';
declare module './crud' {
  function insertRow(row: RowElement): RowID;
  function deleteRow(rowId: RowID): void;
  function updateRow(rowId: RowID, row: RowElement): RowID;
}