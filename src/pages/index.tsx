import type { NextPage } from 'next'
import { ChangeEvent, FormEvent, useState } from 'react'

const Home: NextPage = () => {
  
const [userInfo, setUserInfo] = useState<userInfoType>(initialFormValue)

const handelChange = (e:ChangeEvent<HTMLInputElement>) => {
  const {name, value} = e.target;
  setUserInfo({...userInfo, [name]: value})
}

const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log(userInfo.fullname);
  console.log(userInfo.id);
  console.log(userInfo.phone);
  console.log(userInfo.email);
}

  return (
    <div className='w-75 mx-auto'>

        <form className='m-4' id="my_form" onSubmit={handleSubmit} >
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" name="fullname" className="form-control" value={userInfo.fullname} onChange={handelChange}  />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">ID</label>
                    <input type="text" name="id" className="form-control" value={userInfo.id} onChange={handelChange}  />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input type="number" name="phone" className="form-control" value={userInfo.phone} onChange={handelChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" name="email" className="form-control" value={userInfo.email} onChange={handelChange}  />
                  </div>
                  
                  <button type="submit" className="btn btn-primary">Submit</button>
              </form>
    </div>
      
  )
}

export default Home

type userInfoType = {
  fullname: string;
  id: string | number;
  section?: string;
  phone: number;
  email: string;
}

const initialFormValue = {
  fullname: "",
  id: "",
  section: "",
  phone: 0,
  email: ""
}
