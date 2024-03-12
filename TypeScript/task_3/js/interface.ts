// Definición del tipo RowID
type RowID = number;
// Definición de la interfaz RowElement
interface RowElement {
    firstName: string;
    lastName: string;
    age?: number;
}
// Exportación de las definiciones
export { RowID, RowElement }