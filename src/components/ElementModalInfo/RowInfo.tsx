import Link from "next/link";

type InfoRowProps<T> = {
  label: string;
  data?: { value?: T; link?: string };
};

const formatValue = (value: unknown): string => {
    if (Array.isArray(value)) {
      return JSON.stringify(value); // Transforma arrays em formato legível
    }
    if (typeof value === "object" && value !== null) {
      return JSON.stringify(value, null, 2); // Formata objetos complexos
    }
    return String(value); // Para string, number e boolean
};

const InfoRow = <T,>({ label, data }: InfoRowProps<T>) => {
  if (!data || data.value === undefined || data.value === null) {
    return null; // Não renderiza a linha se os dados não existirem
  }

  return (
    <div className="flex justify-between items-center border-b border-neutral-600 gap-2 p-1">
      <span className="font-semibold">{label}:</span>
      <div className="flex gap-2">
        <span className="break-all">{formatValue(data.value)}</span>
        {data.link && (
          <Link href={data.link} target="_blank" className="text-blue-600 hover:underline">
            ?
          </Link>
        )}
      </div>
    </div>
  )
};

export default InfoRow;