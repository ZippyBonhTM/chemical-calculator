// Padronização dos Elementos
export type ElementType = {
    name: { value: string, link: string }; // Nome
    symbol: { value: string, link: string }; // Simbolo
    atomicNumber: { value: number, link: string }; // Número Atômico
    atomicWeight: { value: number, link: string }; // Peso Atômico
    category: { value: ElementCategory, link: string}; // Categoria
    description: { value: string, link: string }; // Descrição
    stateAtRoomTemp: { value: ElementState, link: string }; // Estado do elemento na temperatura ambiente
    meltingPoint: { value: number, link: string }; // Ponto de fusão do elemento
    boilingPoint: { value: number, link: string }; // Ponto de ebulição do elemento
    electronConfiguration: { value: Array<number>, link: string }; // Configuração Eletrônica do elemento
    uses: { value: string, link: string }; // Usos do elemento
    history: { value: string, link: string }; // História
    interestingFacts: { value: string, link: string }; // Fatos interessantes sobre o elemento
    moreInfoLink: string; // Página de mais informações sobre o elemento
    group: number; // Grupo (colunas)
    period: number; // Período (linhas)
};

export enum ElementCategory {
    NONMETALS = "nonmetals",
    METALS = "metals",
    NOBLE_GASES = "noble_gases",
    ALKALI_METALS = "alkali_metals",
    ALKALINE_EARTH_METALS = "alkaline_earth_metals",
    METALLOIDS = "metalloids",
    HALOGENS = "halogens",
    OTHER_METALS = "other_metals",
    TRANSITION_METALS = "transition_metals",
    LANTHANIDES = "lanthanides",
    ACTINIDES = "actinides",
};

export enum ElementState {
    SOLID = "solid",
    LIQUID = "liquid",
    GAS = "gas",
    UNKNOWN = "unknown",
}

export const ElementCategoryInfo: Record<ElementCategory, { 
    label: string; 
    color: string; 
    infoLink: string 
  }> = {
    [ElementCategory.NONMETALS]: {
        label: "Nonmetals",
        color: "#8FC96E",
        infoLink: "https://en.wikipedia.org/wiki/Nonmetal",
    },
    [ElementCategory.NOBLE_GASES]: {
        label: "Noble Gases",
        color: "#77AADD",
        infoLink: "https://en.wikipedia.org/wiki/Noble_gas",
    },
    [ElementCategory.ALKALI_METALS]: {
        label: "Alkali Metals",
        color: "#E5B76E",
        infoLink: "https://en.wikipedia.org/wiki/Alkali_metal",
    },
    [ElementCategory.ALKALINE_EARTH_METALS]: {
        label: "Alkaline Earth Metals",
        color: "#F4DA70",
        infoLink: "https://en.wikipedia.org/wiki/Alkaline_earth_metal",
    },
    [ElementCategory.METALLOIDS]: {
        label: "Metalloids",
        color: "#73C6A5",
        infoLink: "https://en.wikipedia.org/wiki/Metalloid",
    },
    [ElementCategory.HALOGENS]: {
        label: "Halogens",
        color: "#A1D6E5",
        infoLink: "https://en.wikipedia.org/wiki/Halogen",
    },
    [ElementCategory.OTHER_METALS]: {
        label: "Other Metals",
        color: "#A9C7D6",
        infoLink: "https://en.wikipedia.org/wiki/Post-transition_metal",
    },
    [ElementCategory.TRANSITION_METALS]: {
        label: "Transition Metals",
        color: "#EBA5AD",
        infoLink: "https://en.wikipedia.org/wiki/Transition_metal",
    },
    [ElementCategory.LANTHANIDES]: {
        label: "Lanthanides",
        color: "#8CC6CC",
        infoLink: "https://en.wikipedia.org/wiki/Lanthanide",
    },
    [ElementCategory.ACTINIDES]: {
        label: "Actinides",
        color: "#C8A3D6",
        infoLink: "https://en.wikipedia.org/wiki/Actinide",
    },
    [ElementCategory.METALS]: {
        label: "Metals",
        color: "#C8A3D1",
        infoLink: "https://en.wikipedia.org/wiki/Metals"
    }
};

export const ElementStateInfo: Record<ElementState, { 
    label: string; 
    color: string; 
    infoLink: string 
  }> = {
    [ElementState.SOLID]: {
        label: "Solid",
        color: "#A52A2A", // Marrom
        infoLink: "https://en.wikipedia.org/wiki/Solid",
    },
    [ElementState.LIQUID]: {
        label: "Liquid",
        color: "#1E90FF", // Azul vibrante
        infoLink: "https://en.wikipedia.org/wiki/Liquid",
    },
    [ElementState.GAS]: {
        label: "Gas",
        color: "#FFD700", // Dourado
        infoLink: "https://en.wikipedia.org/wiki/Gas",
    },
    [ElementState.UNKNOWN]: {
        label: "Unknown",
        color: "#808080", // Cinza
        infoLink: "https://en.wikipedia.org/wiki/State_of_matter",
    },
};
  