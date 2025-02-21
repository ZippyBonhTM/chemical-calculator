import React from 'react';
import { Element } from '../types/Element';
import { createPeriodicTable } from './createPeriodicTable';

interface PeriodicTableProps {
  elements: Element[]; // Recebe os elementos via props
}

const PeriodicTable: React.FC<PeriodicTableProps> = ({ elements }) => {
  // Cria a tabela dividida em parte superior (7x18) e parte inferior
  const { topTable, bottomTable } = createPeriodicTable(elements);

  return (
    <div className="periodic-table border border-neutral-600 bg-transparent">
      {/* Renderiza a parte superior da tabela */}
      <div className="top-table flex border border-neutral-600 m-2">
        {topTable.map((row, rowIndex) => (
          <div key={rowIndex} className="table-row">
            {row.map((element, colIndex) => (
              <div key={colIndex} className={`table-cell border border-neutral-600 ${element ? "" : "invisible"}`}>
                {element ? element.symbol.value : ''}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Renderiza a parte inferior da tabela */}
      <div className="bottom-table">
        <h3>Elementos Abaixo da Tabela</h3>
        <div className="elements-list">
          {bottomTable.map((element, index) => (
            <div key={index} className="element-item">
              {element?.symbol.value} - {element?.name.value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PeriodicTable;
