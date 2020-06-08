import React from 'react';

const EmployeeDetail = ({ employee }) => {
    const { name, email, phone, avatar } = employee;
    return (
        <div className='thumbnail'>
            <img src={avatar} />

            <div className='caption'>
                <h3>{name}</h3>

                <ul className='listGroup'>
                    <li className='listGroupItem'>Email: {email}</li>
                    <li className='listGroupItem'>Phone: {phone}</li>
                </ul>
            </div>
        </div>
    )
}

export default EmployeeDetail