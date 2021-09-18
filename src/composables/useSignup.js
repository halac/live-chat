import {ref} from 'vue'
import {projectAuth} from '../firebase/config'

const error = ref(null)
const singup = async (email, password, displayName) => {
    try {
        const res = await projectAuth.createUserWithEmailAndPassword(email, password)
        if(!res){
            throw Error('Cloud not complete singnup')
        }
        await res.user.updateProfile({ displayName })
        error.value = null 
        
        return res
    } catch (err) {
        console.log(err.message)
        error.value = err.message
    }
}

const useSingup = () => {

    return {error, singup}
}

export default useSingup