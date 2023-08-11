import React from 'react';
import './userDetail.css';

interface UserDetailProps {
  firstname: string;
  lastname: string;
  email: string;
}

const UserDetail: React.FC<UserDetailProps> = ({ firstname,lastname, email}) => {
    const firstLetter = firstname.charAt(0).toUpperCase();
   
  return (
    <div className='data'>
      <div className='circle'>
        <div className='letter'>{firstLetter}</div>
      </div>
      <div className='detail'>
        <p className='name'>{firstname} {lastname}</p>
        <p className='email'>{email}</p>
      </div>
    </div>
  );
};

export default UserDetail;
