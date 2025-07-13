import { ElementType } from '../types/ElementAtributes'; // Certifique-se de importar o tipo Element corretamente

export type PeriodicTableType = {
  topTable: (ElementType | null)[][];
  bottomTable: (ElementType | null)[];
};

// Função que organiza os elementos em uma tabela 7x18 (7 períodos, 18 grupos)
// E separa os elementos que não cabem na tabela principal
export const createPeriodicTable = (elements: ElementType[]): PeriodicTableType => {
  // Inicializa a tabela principal (7x18) vazia com null
  const topTable: (ElementType | null)[][] = Array.from({ length: 7 }, () => Array(18).fill(null));
  // Tabela inferior para os elementos removidos da principal
  const bottomTable: (ElementType | null)[] = [];

  // Preenche a tabela com os elementos conforme seu grupo e período
  elements.forEach(element => {
    const { group, period } = element.position;

    // Verifica se o grupo e o período estão dentro dos limites da tabela principal (7x18)
    if (group >= 1 && group <= 18 && period >= 1 && period <= 7) {
      // Atribui o elemento à posição correta na tabela principal (lembrando que os índices começam em 0)
      topTable[period - 1][group - 1] = element;
    } else {
      // Caso o elemento não caiba na tabela principal, adiciona à tabela inferior
      bottomTable.push(element);
    }
  });

  // Retorna tanto a tabela principal quanto a inferior
  return { topTable, bottomTable };
};
