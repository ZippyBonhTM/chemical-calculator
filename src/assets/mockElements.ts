import { Element } from '../types/Element';

const createMockElements = (): Element[] => {
  const elements: Element[] = [
    {
      name: { value: 'Hydrogen', link: 'https://www.chemblink.com/structure/1_1_0-0.html' },
      symbol: { value: 'H', link: 'https://www.chemblink.com/structure/1_1_0-0.html' },
      atomicNumber: { value: 1, link: 'https://www.chemblink.com/structure/1_1_0-0.html' },
      atomicWeight: { value: 1.008, link: 'https://www.chemblink.com/structure/1_1_0-0.html' },
      category: { value: 'Nonmetal', link: 'https://www.chemblink.com/structure/1_1_0-0.html' },
      description: { value: 'Hydrogen is the most abundant chemical substance in the universe.', link: 'https://www.chemblink.com/structure/1_1_0-0.html' },
      stateAtRoomTemp: { value: 'Gas', link: 'https://www.chemblink.com/structure/1_1_0-0.html' },
      meltingPoint: { value: -259.16, link: 'https://www.chemblink.com/structure/1_1_0-0.html' },
      boilingPoint: { value: -252.87, link: 'https://www.chemblink.com/structure/1_1_0-0.html' },
      electronConfiguration: { value: [1], link: 'https://www.chemblink.com/structure/1_1_0-0.html' },
      uses: { value: 'Fuel, Rocket propellant', link: 'https://www.chemblink.com/structure/1_1_0-0.html' },
      history: { value: 'Discovered by Henry Cavendish in 1766', link: 'https://www.chemblink.com/structure/1_1_0-0.html' },
      interestingFacts: { value: 'Hydrogen is the most abundant element in the universe.', link: 'https://www.chemblink.com/structure/1_1_0-0.html' },
      moreInfoLink: 'https://www.chemblink.com/structure/1_1_0-0.html',
      group: 1,
      period: 1,
    },
    {
      name: { value: 'Helium', link: 'https://www.chemblink.com/structure/2_2_0-0.html' },
      symbol: { value: 'He', link: 'https://www.chemblink.com/structure/2_2_0-0.html' },
      atomicNumber: { value: 2, link: 'https://www.chemblink.com/structure/2_2_0-0.html' },
      atomicWeight: { value: 4.0026, link: 'https://www.chemblink.com/structure/2_2_0-0.html' },
      category: { value: 'Noble Gas', link: 'https://www.chemblink.com/structure/2_2_0-0.html' },
      description: { value: 'Helium is a colorless, odorless, tasteless, inert, monatomic gas that heads the noble gas group.', link: 'https://www.chemblink.com/structure/2_2_0-0.html' },
      stateAtRoomTemp: { value: 'Gas', link: 'https://www.chemblink.com/structure/2_2_0-0.html' },
      meltingPoint: { value: -272.2, link: 'https://www.chemblink.com/structure/2_2_0-0.html' },
      boilingPoint: { value: -268.93, link: 'https://www.chemblink.com/structure/2_2_0-0.html' },
      electronConfiguration: { value: [2], link: 'https://www.chemblink.com/structure/2_2_0-0.html' },
      uses: { value: 'Used in cryogenics, cooling superconducting magnets', link: 'https://www.chemblink.com/structure/2_2_0-0.html' },
      history: { value: 'Discovered in 1895 by Sir William Ramsay', link: 'https://www.chemblink.com/structure/2_2_0-0.html' },
      interestingFacts: { value: 'Helium is the second most abundant element in the observable universe.', link: 'https://www.chemblink.com/structure/2_2_0-0.html' },
      moreInfoLink: 'https://www.chemblink.com/structure/2_2_0-0.html',
      group: 18,
      period: 1,
    },
    {
      name: { value: 'Lithium', link: 'https://www.chemblink.com/structure/3_3_0-0.html' },
      symbol: { value: 'Li', link: 'https://www.chemblink.com/structure/3_3_0-0.html' },
      atomicNumber: { value: 3, link: 'https://www.chemblink.com/structure/3_3_0-0.html' },
      atomicWeight: { value: 6.94, link: 'https://www.chemblink.com/structure/3_3_0-0.html' },
      category: { value: 'Alkali Metal', link: 'https://www.chemblink.com/structure/3_3_0-0.html' },
      description: { value: 'Lithium is a chemical element with the symbol Li and atomic number 3.', link: 'https://www.chemblink.com/structure/3_3_0-0.html' },
      stateAtRoomTemp: { value: 'Solid', link: 'https://www.chemblink.com/structure/3_3_0-0.html' },
      meltingPoint: { value: 180.54, link: 'https://www.chemblink.com/structure/3_3_0-0.html' },
      boilingPoint: { value: 1590, link: 'https://www.chemblink.com/structure/3_3_0-0.html' },
      electronConfiguration: { value: [2, 1], link: 'https://www.chemblink.com/structure/3_3_0-0.html' },
      uses: { value: 'Used in rechargeable batteries for mobile phones, laptops, digital cameras.', link: 'https://www.chemblink.com/structure/3_3_0-0.html' },
      history: { value: 'Discovered in 1817 by Johan August Arfvedson', link: 'https://www.chemblink.com/structure/3_3_0-0.html' },
      interestingFacts: { value: 'Lithium is the lightest metal and the lightest solid element.', link: 'https://www.chemblink.com/structure/3_3_0-0.html' },
      moreInfoLink: 'https://www.chemblink.com/structure/3_3_0-0.html',
      group: 1,
      period: 2,
    },
    // Adicione outros elementos conforme necessário
  ];

  return elements;
};

const mockElements = createMockElements();
export default mockElements;
