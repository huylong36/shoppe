import { RegisterForm } from "../RegisterForm"

export const Register = () =>{
    const handleSubmit = (value:any) =>{
        console.log('value' , value)
    }
    return (
        <RegisterForm onSubmit={handleSubmit} />
    )
}