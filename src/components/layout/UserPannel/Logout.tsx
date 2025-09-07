import useAuthContext from "@/hooks/useAuthContext";

export default function Logout() {
  const context = useAuthContext();

  return (
    <button onClick={context?.logout}>
      Logout
    </button>
  )
}