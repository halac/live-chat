import {ref} from 'vue'
import {projectAuth} from '../firebase/config'

const error = ref(null)

const login = async (email, password) => {

}

const useLogin = () => {
    
    return {error, login}
}

export default useLogin