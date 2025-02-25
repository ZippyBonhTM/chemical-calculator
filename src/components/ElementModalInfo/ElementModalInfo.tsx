import { ElementType } from "@/types/Element";
import RowInfo from "./RowInfo";

interface ElementModalProps {
    element: ElementType
}

export default function ElementModalInfo({ element }: ElementModalProps) {
    return (
        <div className="overflow-y-auto max-h-[90rem] border border-neutral-600 bg-neutral-900 rounded-md z-[9999]">
            <RowInfo data={element.name} label="Element"/>
            <RowInfo data={element.symbol} label="Symbol"/>
            <RowInfo data={element.atomicNumber} label="Atomic Number"/>
            <RowInfo data={element.atomicWeight} label="Atomic Weight"/>
            <RowInfo data={element.category} label="Category"/>
            <RowInfo data={element.boilingPoint} label="Boiling Point"/>
            <RowInfo data={element.description} label="Description"/>
            <RowInfo data={element.uses} label="Uses"/>
            <RowInfo data={element.electronConfiguration} label="Electron Configuration"/>
            <RowInfo data={element.meltingPoint} label="Melting Point"/>
            <RowInfo data={element.history} label="History"/>
            <RowInfo data={element.interestingFacts} label="Interesting Facts"/>
            <RowInfo data={element.stateAtRoomTemp} label="State At Room Temp"/>
            <RowInfo data={{ value: element.group }} label="Group"/>
            <RowInfo data={{ value: element.period }} label="Period"/>
        </div>
    )
}