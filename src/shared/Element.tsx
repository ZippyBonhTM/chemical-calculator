import { ElementType } from "@/types/Element"

const Element: React.FC<ElementType> = ( element ) => {
    return (
        <div className="m-0.5">
            <section className="top flex justify-between items-center">
                <div className="atomicWeight">
                    {element.atomicWeight.value}
                </div>
                <div className="atomicNumber text-lg">
                    {element.atomicNumber.value}
                </div>
            </section>
            <section className="center flex justify-center">
                <div className="symbol text-2xl">
                    {element.symbol.value}
                </div>
            </section>
            <section className="bottom">
                <div className="name text-sm">
                    {element.name.value}
                </div>
                <div className="electronConfiguration">
                    {element.electronConfiguration.value}
                </div>
            </section>
        </div>
    )
};

export default Element;
