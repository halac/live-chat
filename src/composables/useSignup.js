import {ref} from 'vue'
import {projectAuth} from '../firebase/config'

const error = ref(null)
const singup = async (email, password, displayName) => {
    error.value = null

    try {
        const res = await projectAuth.createUserWithEmailandPassword(email, password)
        if(!res){
            throw Error('Cloud not complete singnup')
        }
        console.log(res.user)
    } catch (err) {
        console.log(err.message)
    }
}

const useSingup = () => {

    return {error, singup}
}

export default useSingup