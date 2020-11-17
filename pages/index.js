import Layout from '../components/layout'
import { useSession } from 'next-auth/client'
import { useEffect, useState } from 'react'
import axios from "axios";

export default function Page() {

  const [session, loading] = useSession()

  const [friends_count, setFriendsCount] = useState(0);
  
  const getFriendsCount = async () => {
    const { data } = await axios("/api/fb");

    setFriendsCount(data.summary.total_count);
  }

  useEffect(() => {
    getFriendsCount();
  },[]);

  return (
    <Layout>
      <h1>Facebook Authentication Example</h1>
      {session && <>
            
              <strong>email:</strong>
        <h1>{session.user.email}</h1>
        
          <strong>username:</strong>
        <h1>{session.user.name}</h1>
        
          <strong>image:</strong><img src={ session.user.image}/><br/>
        
        <strong>expires:</strong>
        <h1>{session.expires}</h1>
        
        <strong>friends:</strong>
              <h1>{friends_count}</h1>
              
          </>}
    </Layout>
  )
}