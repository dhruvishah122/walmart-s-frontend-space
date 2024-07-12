import {useMutation} from '@tanstack/react-query'
import axios from 'axios'
import Image from 'next/image'
import {useRouter} from 'next/navigation'
import React, {useState} from 'react'
import {CgSpinner} from 'react-icons/cg'

export interface UserLogin {
  username: string
  password: string | number
  error: string
  token: string
}

interface LoginProps {
  isLoggedIn: boolean
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
  onLogin: (loginData: UserLogin) => void
}

const handleOnLoginClick = async ({
  username,
  password,
}: {
  username: string
  password: string
}) => {
  try {
    const response = await axios.post<UserLogin>(
      'https://fakestoreapi.com/auth/login',
      {
        username,
        password,
      }
    )
    localStorage.setItem('userToken', response.data.token)
    return response?.data
  } catch (error: any) {
    console.error(error.response.data.message)
  }
}

const Login: React.FC<LoginProps> = ({isLoggedIn, setIsLoggedIn, onLogin}) => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')
  const router = useRouter()
  const {mutate: loginUser, isPending} = useMutation({
    mutationKey: ['login'],
    mutationFn: () => {
      return handleOnLoginClick({username, password})
    },
    onSuccess: () => router.push('/'),
  })

  return (
    <div className='login'>
      <div className='container'>
        <div className='login_container'>
          <div className='login_top'>
            <div className='logo'>
              <Image
                src={
                  'https://i5.walmartimages.com/dfw/4ff9c6c9-d10e/k2-_ef2c8660-96ed-4f64-891d-329fa488c482.v1.png'
                }
                width={100}
                height={100}
                alt='logo'
              />
            </div>
            <h2>Sign in or create your account</h2>
          </div>
          <form className='login_wrapper' onSubmit={() => loginUser()}>
            <div className='input_wrapper'>
              <label htmlFor='userName'>UserName</label>
              <input
                type='text'
                id='userName'
                placeholder='Enter your name'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className='input_wrapper'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className='error-message'>{error}</p>}
            <button disabled={isPending} type='submit' className='login_btn'>
              {isPending ? <CgSpinner /> : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
