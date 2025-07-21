
export default function convertPaulingToArray(pauling: string): string[] {
  // Inicializa o array com 7 posições (K, L, M, N, O, P, Q) com "0"
  const layers = Array(7).fill("0");

  // Divide a string em orbitais e filtra strings vazias
  const orbitals = pauling.trim().split(/\s+/).filter(orbital => orbital !== '');

  // Processa cada orbital
  orbitals.forEach(orbital => {
    const match = orbital.match(/^(\d+)([spdf])(\d+)$/);
    if (!match) {
      throw new Error(`Invalid orbital format: ${orbital}`);
    }

    const principalQuantumNumber = parseInt(match[1], 10); // Nível de energia (1, 2, 3, ...)
    const electronCount = parseInt(match[3], 10); // Número de elétrons

    // Verifica se o nível de energia é válido (1 a 7)
    if (principalQuantumNumber < 1 || principalQuantumNumber > 7) {
      throw new Error(`Invalid energy level: ${principalQuantumNumber}`);
    }

    // Soma os elétrons à camada correspondente (índice 0 = K, 1 = L, etc.)
    const currentElectrons = parseInt(layers[principalQuantumNumber - 1], 10);
    layers[principalQuantumNumber - 1] = (currentElectrons + electronCount).toString();
  });

  return layers;
}