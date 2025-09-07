import User from ".//UserButton";

export default function NavBar() {
  return (
    <div className="flex relative  left-[25%] w-[50%] justify-evenly p-1.5 bg-neutral-950 border-x border-b rounded-b-xl border-neutral-600">
      <section></section>
      <section></section>
      <section><User/></section>
    </div>
  )
}