import React, { useEffect } from 'react';
import UserDetail from '../UserDetail/UserDetail';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, selectUsersError, selectUsersLoading,selectUsers } from '../../slice/usersSlice';
import { AppDispatch } from '../../store'; 

// ...



const UserList: React.FC = () => {
  
  const isLoading = useSelector(selectUsersLoading);
  const error = useSelector(selectUsersError);
  const users = useSelector(selectUsers);
  const dispatch = useDispatch<AppDispatch>(); 
  
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className='container'>
<h2 className='heading'>Users</h2>


</div>

<ul>
        {users.map(user => (
          <UserDetail  email={user.email} firstname={user.firstName} lastname={user.lastName}/>
        ))}
      </ul>
    </div>
  );
};

export default UserList;



