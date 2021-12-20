import React, { useEffect, useState } from 'react';
import { getCellInfo } from '../../apis/cell';


interface AppProps {
  id: number,
}

interface User {
  id: number,
  name: string,
  img: string
}

const Cell = ({ id }: AppProps): JSX.Element => {

  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    getCellInfo(id)
      .then(res => {
        setUser(res[0]);
      })
      .catch(err => {
        console.log(err);
      })
  }, [user?.id])

  return (
    <>
      <div className='cell'>
        <img src={`/images/${user?.img}`} alt="profile image" className='cell-img' />
        <div className='cell-name'>
          <p className='name'>{user?.name}</p>
        </div>
      </div>
    </>
  )
}

export default Cell