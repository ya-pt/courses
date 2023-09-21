import React, { useState } from "react";
import FunHeader from "../components/FunHeader.js";
import Users from "../components/addUser/Users";
import AddUser from "../components/addUser/AddUser";
import { UserTypes } from "../components/addUser/UserTypes";
import { AddUserTypes } from "../components/addUser/AddUser";

const AppUsersList: React.FC = () => {
    // Используем определенный тип UserTypes для массива users
    // Теперь TypeScript знает, что users - МАССИВ объектов типа UserTypes
    // Используем useState для создания состояния users и инициализации его начальным значением
    const [users, setUsers] = useState<UserTypes[]>([]);
    const [maxId, setMaxId] = useState(1);
    
    function deleteUser(id:number){
        setUsers([...users.filter((el) => el.id !== id)]) //filter - создает новый массив, содержащий только те элементы, для которых условие возвращает true.
    }

    function editUser(newValues: UserTypes) {
        setUsers((prevUsers) => {
          const index = prevUsers.findIndex((user) => user.id === newValues.id);
      
          if (index === -1) {
            // Если пользователя с указанным id не найдено, вернуть исходный массив без изменений
            return prevUsers;
          }
      
          // Создать новый массив, который содержит все элементы из предыдущего массива
          const updatedUsers = [...prevUsers];
      
          // Обновить элемент массива, используя операцию spread, чтобы создать новый объект
          updatedUsers[index] = { ...updatedUsers[index], ...newValues };
          //при совпадении свойств, значения из newValues перезаписывают значения из updatedUsers[index].
      
          // Вывести обновленный массив в консоль
          console.log(updatedUsers);
      
          // Вернуть обновленный массив как новое состояние
          return updatedUsers;
        });
    }

    // Создаем функцию addUser, которая принимает ОБЪЕКТ user типа UserTypes
    const addUser = (user: AddUserTypes) => {
        const newUser = { ...user, id: maxId }; // Создаем нового пользователя с уникальным ID
        setUsers([...users, newUser]); // Обновляем состояние users, добавляя нового пользователя
        setMaxId(maxId + 1); // Обновляем максимальный ID для будущих пользователей
    };

    return(
        <div>
            <FunHeader title=" a list of users"/>
            <main>
                <Users users={users} onDelete={deleteUser} onEdit={editUser}/>
            </main>
            <aside>
                <AddUser onAdd={addUser}/>
            </aside>
        </div>
    );

}

export default AppUsersList;