"use client";
import { JSX } from 'react';
import { createPeriodicTable } from './createPeriodicTable';
import Element from './Element';
import useElementContext from '@/hooks/useElementContext';

export default function PeriodicTable(): JSX.Element {
  const context = useElementContext();

  if (!context) return (
    <div>
      <p>Parece que o client está quebrado...</p>
    </div>
  );
  if (!context.elements) {
    context.loadElements();
  };
  if (!context.elements) return (
    <div>
      <p>Parece que o servidor não está enviando os dados...</p>
    </div>
  );

  const elements = context?.elements;

  // Cria a tabela dividida em parte superior (7x18) e parte inferior
  const { topTable, bottomTable } = createPeriodicTable(elements);

  return (
    <div className="periodic-table border border-neutral-600 bg-transparent h-min w-min">
      {/* Renderiza a parte superior da tabela */}
      <div className="top-table border-neutral-600 m-2">
        {topTable.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((element, colIndex) => (
              <div key={colIndex} className='p-0.5'>
                {element ? (
                  <Element key={colIndex} {...element} />
                ) : (
                  <div className="flex text-2xl text-neutral-500 justify-center items-center w-[6.3rem] h-[6.3rem] border border-neutral-500">N/A</div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Renderiza a parte inferior da tabela */}
      <div className="bottom-periodic-table">
        <h3>Elementos Abaixo da Tabela</h3>
        <div className="elements-list flex flex-wrap">
          {bottomTable.map((element, index) => (
            <div key={index} className='p-0.5'>
              {element ? (
                <Element key={index} {...element} />
              ) : (
                <div className="flex text-2xl text-neutral-500 justify-center items-center w-[6.3rem] h-[6.3rem] border border-neutral-500">N/A</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
