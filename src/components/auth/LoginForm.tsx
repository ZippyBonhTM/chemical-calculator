import DefaultForm from "@/components/DefaultForm";

export default function LoginForm() {
  

  return (
      <DefaultForm.Form>
        <DefaultForm.Input type="text" placeholder="Username or Email"/>
        <DefaultForm.Input type="password" placeholder="Password"/>
        <DefaultForm.Button text="Submit"/>
      </DefaultForm.Form>
  )
}