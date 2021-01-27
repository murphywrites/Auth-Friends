import React, {useState} from 'react'
import axios from 'axios'
import axiosWithAuth from '../utils/axiosWithAuth';

function Login(props) {

const initialFormValues = {username: '', password:''}
const [formValues, setFormValues] = useState(initialFormValues);
const [isLoading, setIsLoading] = useState(false)

const handleChange = (evt) => {
    setFormValues({...formValues,
                    [evt.target.name]: evt.target.value
                    })
}

const handleLogin = (evt) => {
    evt.preventDefault()
    setIsLoading(true)
    axios.post('http://localhost:5000/api/login', formValues)
    .then(res => {
       localStorage.setItem('token', res.data.payload)
       setIsLoading(false)
       props.history.push('/friendslist')
    })
    .catch(err => {
        console.log(err)
        setIsLoading(false)
    })
}
return (
    <div>
    <form className='login-form' onSubmit={handleLogin}>
        <label>Username
            <input type='text' name="username" value={formValues.username} onChange={handleChange} >
            </input>
        </label>
        <label>Password
            <input type='text' name="password" value={formValues.password} onChange={handleChange} >
            </input>
        </label>
        <button>submit</button>
    </form>
    {isLoading && <h3 className='loading-message'> Loading... </h3> }
    </div>
)
}
export default Login