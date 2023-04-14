import { useDispatch } from "react-redux";
import { RegisterForm } from "../RegisterForm"
import { createUser } from "../../../../redux/slices/authSlice";

export const Register = () =>{
    const dispatch = useDispatch();
    const handleSubmit = async (values:any) =>{
        try {
            const action = createUser(values);
        } catch (error) {
            
        }
    }
    return (
        <RegisterForm onSubmit={handleSubmit} />
    )
}