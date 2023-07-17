import React,{useState,useEffect} from 'react'

function Multiple_returns_basics() {
  const [user,setUser] = useState(null);
  const [isLoading,setIsLoading] = useState(true);
  const [isError,setIsError] = useState(false);

  useEffect(()=>{
    const fetchUser = async ()=>{
      try {
        const resp = await fetch('https://api.github.com/users/QuincyLarson')
        const user = await resp.json()
        setUser(user);

      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false)
    }
    fetchUser();
    
  },[])
  

if(isLoading){
  return (<h1>Loading...</h1>)
}

if(isError){
  return (<h1>There was an error....</h1>)
}

return (
<>
  <img src={user.avatar_url} alt="user image" />
  <h2>{user.login}</h2>
    <h3>{user.company}</h3>
</>
)
}

export default Multiple_returns_basics