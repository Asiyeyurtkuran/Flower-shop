import { useContext } from "react"
import { AuthContext } from "../context/context"

const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth