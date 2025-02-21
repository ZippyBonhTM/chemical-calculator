// Padronização dos Elementos
export type Element = {
    name: ValueWithLink; // Nome
    symbol: ValueWithLink; // Simbolo
    atomicNumber: ValueWithLink; // Número Atômico
    atomicWeight: ValueWithLink; // Peso Atômico
    category: ValueWithLink; // Categoria
    description: ValueWithLink; // Descrição
    stateAtRoomTemp: ValueWithLink; // Estado do elemento na temperatura ambiente
    meltingPoint: ValueWithLink; // Ponto de fusão do elemento
    boilingPoint: ValueWithLink; // Ponto de ebulição do elemento
    electronConfiguration: ValueWithLink; // Configuração Eletrônica do elemento
    uses: ValueWithLink; // Usos do elemento
    history: ValueWithLink; // História
    interestingFacts: ValueWithLink; // Fatos interessantes sobre o elemento
    moreInfoLink: string; // Página de mais informações sobre o elemento
    group: number; // Grupo (colunas)
    period: number; // Período (linhas)
};

type ValueWithLink = {
    value: string | number | Array<number> | Array<string> | boolean | undefined;
    link?: string;
};