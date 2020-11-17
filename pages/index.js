import Layout from '../components/layout'
import { useSession } from 'next-auth/client'
import { useEffect, useState } from 'react'
import axios from "axios";

export default function Page() {

  const [session, loading] = useSession()

  const [friends_count, setFriendsCount] = useState(0);
  
  const getFriendsCount = async () => {
    const { data } = await axios("/api/fb/friends");
    if (data && data.summary) {
     setFriendsCount(data.summary.total_count); 
    }    
  }

  useEffect(() => {
    getFriendsCount();
  },[]);

  return (
    <Layout>
      <div className="flex">
        <h1 className="my-8 font-semibold mx-auto">Facebook Authentication Demo</h1>
        </div>
      {session && 
      <div>
      <table className="min-w-full table-auto">
        <thead className="justify-between">
          <div className="bg-gray-800 px-16 py-2 flex flex-row justify-between">            
              <span className="text-gray-300">Field</span>
              <span className="text-gray-300">Value</span>            
          </div>
        </thead>
        <tbody className="bg-gray-200">
            <div className="border-4 border-gray-200 flex flex-row items-center px-16 py-2 justify-between">              
              <div>image</div>              
              <img
                className="h-8 w-8 rounded-full object-cover "
                  src={ session.user.image}
                alt=""
              />              
            </div>
            <div className="border-4 border-gray-200 flex flex-row items-center px-16 py-2 justify-between">              
                <div>Name</div>
                 <div className="text-center ml-2 font-semibold">{ session.user.name}</div>              
            </div>
            <div className="border-4 border-gray-200 flex flex-row items-center px-16 py-2 justify-between">              
              <div>Email</div>
              <div className="text-center ml-2 font-semibold">{session.user.email}</div>              
            </div>
            <div className="border-4 border-gray-200 flex flex-row items-center px-16 py-2 justify-between">                          
              <div>Friends</div>
              <div>{ friends_count}</div>            
            </div>
            <div className="border-4 border-gray-200 flex flex-row items-center px-16 py-2 justify-between">                          
              <div>Expires</div>
              <div>{ session.expires}</div>            
            </div>                    
        </tbody>
      </table>
        </div>}              
    </Layout>
  )
}