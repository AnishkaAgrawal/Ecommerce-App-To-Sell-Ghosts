import AppSidebar from "./SideBar"
import Layout from "./SideBarProvider";

const Profile = ()=>{
  return(
    <Layout>
    <div className="flex flex-row flex-wrap border-b-1 p-12 m-3 border-gray-400">
    <img src="../../public/images/user.png" alt="Profile Photo"  />
    <h1 className="text-center pt-25 center">User</h1>
    </div>
    </Layout>
  )
}

export default Profile ; 