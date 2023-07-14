import React,{useState,useEffect} from 'react'


function UseEffectsBasics() {
    const [users,setUsers] = useState([]);

    useEffect(()=>{
       function random(){
            let promise = fetch('https://api.github.com/users')
            promise.then((res)=>{
                return res.json();
            }).then((val)=>{
                console.log(val)
                setUsers(val);
            })
       }
       random();
    },[])
  return (
    <div>
        <h2>Fetch Data Example Users</h2>
        <h4>GitHub Users</h4>
        <div>
            {users.map((ele)=>{
                return(

                    <div key={ele.id}>
                        <img src={ele.avatar_url} alt="" />
                        <h4>{ele.login}</h4>
                    </div>
                )
            })}
        </div>
        {/* <button className='btn' onClick={}>
            Click Me
        </button> */}
    </div>
  )
}

export default UseEffectsBasics