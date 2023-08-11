import React, { useState } from 'react';
import './createUser.css';
import axios from 'axios'

const apiUrl = process.env.API_URL;

interface User {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
}

const CreateUserForm = () => {
    const [user, setUser] = useState<User>({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        
        try {
        
          await axios.post(`'http://localhost:5000/createUser`, user);
    
         
          setUser({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
          });
          
          alert('User created successfully!');
        } catch (error) {
          
          console.error('Error creating user:', error);
          
          alert('An error occurred while creating the user.');
        }
      };
    

    return (
        <div className='container'>
            <h2 className='heading'>Create User</h2>
            <form className="user-form" onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={user.firstName}
                        onChange={handleInputChange}
                        required
                        placeholder='Enter your First Name'
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value={user.lastName}
                        onChange={handleInputChange}
                        required
                        placeholder='Enter your Last Name'
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleInputChange}
                        required
                        placeholder='Enter your Email'
                    />
                </label>
                <label>
                    Phone Number:
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={user.phoneNumber}
                        onChange={handleInputChange}
                        required
                        placeholder='Enter your Phone Number'
                    />
                </label>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateUserForm;