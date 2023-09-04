import './layout'
import UserServices from '@/services/userServices'
const userServices=new UserServices()
const handleUsers= async ()=>{
  const users =await  userServices.getUsers()
  return users
}

const users=await handleUsers()

// console.log(users)

const MainSection = ()=>{
    return <section className="main-section">
    <div className="main-section-item">
      <ul>
      {users.map(user=><li key={user.id}>{user.email}</li>)}
      </ul>
    </div>
    <div className="main-section-item"></div>
  </section>
}
export default MainSection