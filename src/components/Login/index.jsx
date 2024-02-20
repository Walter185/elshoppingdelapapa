import "./Login.css"
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Card } from '../Card/Card'
import { Layout } from '../Layout/Layout'
import { useAuth } from '../../storage/cartContext'
import useMounted from '../hooks/useMounted'

export default function Loginpage() {
  let navigate = useNavigate();
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()
  const location = useLocation()
  const mounted = useMounted()

  function handleRedirectToOrBack() {
    navigate(location.state?.from ?? '/show')
  }

  return (
    <Layout>
      <h1 style={{textAlign: 'center', margin: '12px 0'}}>Login</h1>
      <Card maxW='md' mx='auto' mt={4}>
        <form
          onSubmit={async e => {
            e.preventDefault()
            if (!email || !password) {
              alert('Credentials not valid.')
              return
            }
            // your login logic here
            setIsSubmitting(true)
            login(email, password)
              .then(res => {
                handleRedirectToOrBack()
              })
              .catch(error => {
                console.log(error.message)
                alert(error.message)
              })
              .finally(() => {
                mounted.current && setIsSubmitting(false)
              })
          }}
        >
          <div style={{marginBottom: '24px'}}>
            <label>Email address</label>
            <input
              name='email'
              type='email'
              autoComplete='email'
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div style={{marginBottom: '24px'}}>
            <label>Password</label>
            <input
              name='password'
              type='password'
              autoComplete='password'
              value={password}
              required
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button
            type='submit'
            style={{backgroundColor: 'pink', color: '#fff', padding: '12px 24px', border: 'none', borderRadius: '4px', fontSize: '16px', cursor: 'pointer'}}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
      </Card>
    </Layout>
  )
}
