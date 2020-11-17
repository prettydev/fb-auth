import Layout from '../components/layout'
import { useSession } from 'next-auth/client'

export default function Page() {

  const [ session, loading ] = useSession()

  return (
    <Layout>
      <h1>Facebook Authentication Example</h1>
      {session && <>
            
              <strong>email:</strong>
        <h1>{session.user.email}</h1>
        
          <strong>username:</strong>
        <h1>{session.user.name}</h1>
        
          <strong>image:</strong><img src={ session.user.image}/><br/>
        <h1>{session.user.image}</h1><br/>

        
        
        <strong>expires:</strong>
              <h1>{session.expires}</h1>
              
          </>}
    </Layout>
  )
}