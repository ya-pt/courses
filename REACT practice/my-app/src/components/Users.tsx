import React from "react";

const Users: React.FC = () => {
    const users=[
        {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@example.com',
            age: 28,
            bio: 'I love programming and hiking.',
            happy: true,
        },
        {
            id: 2,
            firstName: 'Jane',
            lastName: 'Smith',
            email: 'jane@example.com',
            age: 32,
            bio: 'Passionate about art and photography.',
            happy: false,
        },
    ]

    return(
        <div>
            {
                users.map((el) => (
                    <div key={el.id}>
                        <h3>{el.firstName} {el.lastName}</h3>
                        <p>{el.bio}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default Users;