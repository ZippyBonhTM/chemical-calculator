export default function Page() {


  return (
    <>
      <form action="" className="flex absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] flex-col bg-neutral-800 border border-neutral-50 rounded-xl w-min p-4 gap-4 items-center justify-center">
        <input type="text" placeholder="Username or email" className="border rounded-xl p-1 text-xl"/>
        <input type="password" placeholder="Password" className="border rounded-xl p-1 text-xl"/>
        <button type="submit" className="border rounded-xl p-1 text-xl bg-neutral-500">Submit</button>
      </form>
    </>
  );
}