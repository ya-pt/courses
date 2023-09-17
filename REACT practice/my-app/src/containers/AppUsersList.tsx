import React, { useState } from "react";
import FunHeader from "../components/FunHeader.js";
import Users from "../components/addUser/Users";
import AddUser from "../components/addUser/AddUser";
import { UserTypes } from "../components/addUser/UserTypes";
import { AddUserTypes } from "../components/addUser/AddUser"

const AppUsersList: React.FC = () => {
    // Используем определенный тип UserTypes для массива users
    // Теперь TypeScript знает, что users - МАССИВ объектов типа UserTypes
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
    
    function deleteUser(id:number){
        setUsers([...users.filter((el) => el.id !== id)]) //filter - создает новый массив, содержащий только те элементы, для которых условие возвращает true.
    }


    // Создаем функцию addUser, которая принимает ОБЪЕКТ user типа UserTypes
    function addUser(user: AddUserTypes) {
        // Генерируем уникальный id для нового пользователя
        const id = users.length + 1
        const newUser = { ...user, id }; // Создаем нового пользователя с уникальным id
        setUsers([...users, newUser]); // Обновляем состояние users, добавляя нового пользователя
    }

    return(
        <div>
            <FunHeader title=" a list of users"/>
            <main>
                <Users users={users} onDelete={deleteUser}/>
            </main>
            <aside>
                <AddUser onAdd={addUser}/>
            </aside>
        </div>
    );

}

export default AppUsersList;