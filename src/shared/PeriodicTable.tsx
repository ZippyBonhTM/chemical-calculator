import { ElementType } from '../types/Element';
import { createPeriodicTable } from './createPeriodicTable';
import Element from './Element';

interface PeriodicTableProps {
  elements: ElementType[]; // Recebe os elementos via props
}

export default function PeriodicTable({ elements }: PeriodicTableProps) {
  // Cria a tabela dividida em parte superior (7x18) e parte inferior
  const { topTable, bottomTable } = createPeriodicTable(elements);

  return (
    <div className="periodic-table border border-neutral-600 bg-transparent h-min w-min">
      {/* Renderiza a parte superior da tabela */}
      <div className="top-table border-neutral-600 m-2">
        {topTable.map((row, rowIndex) => (
          <div key={rowIndex} className="table-row">
            {row.map((element, colIndex) => (
              <div key={colIndex} className='table-cell p-0.5'>
                {element ? <Element key={colIndex} { ...element } /> : ''}
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
