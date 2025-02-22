"use client"
import mockElements from "@/assets/mockElements";
import PeriodicTable from "@/shared/PeriodicTable";

export default function Home() {
  return (
    <div>
      <PeriodicTable elements={mockElements}/>
    </div>
  );
}
