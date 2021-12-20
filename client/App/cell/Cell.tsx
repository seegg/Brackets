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
    getCellInfo(1)
      .then(res => {
        setUser(res[0]);
      })
  }, [user?.id])

  return (
    <>
      <div className='cell'>
        <img src={`/images/${user?.img}`} alt="profile image" className='cell-img' />
        <div className='cell-name'>
          <h3>{user?.name}</h3>
        </div>
      </div>
    </>
  )
}

export default Cell