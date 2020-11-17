import Layout from '../components/layout'
import { useSession } from 'next-auth/client'

export default function Page() {

  const [ session, loading ] = useSession()

  return (
    <Layout>
      <h1>Facebook Authentication Example</h1>
      {session && <>
            
              <h1>email:</h1>
        <strong>{session.user.email}</strong>
        
          <h1>username:</h1>
        <strong>{session.user.name}</strong>
        
          <h1>image:</h1><img src={ session.user.image}/><br/>
        <strong>{session.user.image}</strong><br/>

        
        
        <h1>expires:</h1>
              <strong>{session.expires}</strong>
              
          </>}
    </Layout>
  )
}