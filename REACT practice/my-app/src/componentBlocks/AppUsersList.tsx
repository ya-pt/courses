import React, { useState } from "react";
import FunHeader from "../components/FunHeader.js";
import Users from "../components/Users";
import AddUser from "../components/AddUser";
import { UserTypes } from "../components/UserTypes";

const AppUsersList: React.FC = () => {
    // Используем определенный тип User для массива users
    // Теперь TypeScript знает, что users - массив объектов типа User
    // Используем useState для создания состояния users и инициализации его начальным значением
    const [users, setUsers] = useState<UserTypes[]>([
        {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@example.com',
            age: 28,
            bio: 'I love programming and hiking.',
            isHappy: true,
        },
        {
            id: 2,
            firstName: 'Jane',
            lastName: 'Smith',
            email: 'jane@example.com',
            age: 32,
            bio: 'Passionate about art and photography.',
            isHappy: false,
        },
    ]);

    function addUser(user: UserTypes) {
        const id = users.length + 1
        setUsers([...users, {id, ...user}]) 
    }

    return(
        <div>
            <FunHeader title=" a list of users"/>
            <main>
                <Users users={users}/>
            </main>
            <aside>
                <AddUser onAdd={addUser}/>
            </aside>
        </div>
    );

}

export default AppUsersList;