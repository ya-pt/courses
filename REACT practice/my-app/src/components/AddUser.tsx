import React, { useState } from "react";
import { UserTypes } from "./UserTypes";

interface AddUserProps {
    onAdd: (user: UserTypes) => void;
}

const AddUser: React.FC<AddUserProps> = (props) => {

    const [user, setUser] = useState<UserTypes>({
        firstName: '',
        lastName: '',
        email: '',
        age: 1,
        bio: '',
        isHappy: false,
    });
    

    return(
        <form>
            {/* { id подставляем самостоятельно, остальные значения получаем от пользователя } */}
            <input
                placeholder="firstName"
                onChange={(e) => //e используется для доступа к значению ввода.
                    setUser((prevUser) => ({
                        ...prevUser, // Копируем предыдущее состояние
                        firstName: e.target.value, // Обновляем firstName
                    }))
                } 
            />
            <input
                placeholder="lastName"
                onChange={(e) =>
                    setUser((prevUser) => ({
                        ...prevUser,
                        lastName: e.target.value, // Обновляем lastName
                    }))
                } 
            />
            <input
                placeholder="email"
                onChange={(e) =>
                    setUser((prevUser) => ({
                        ...prevUser,
                        email: e.target.value,
                    }))
                }
            />
            <input
                placeholder="age"
                onChange={(e) =>
                    setUser((prevUser) => ({
                        ...prevUser,
                        age: parseInt(e.target.value), // Преобразование в число
                    }))
                }
            />
            <textarea
                placeholder="bio"
                onChange={(e) =>
                    setUser((prevUser) => ({
                        ...prevUser,
                        bio: e.target.value,
                    }))
                }
            />

            <label htmlFor="isHappy">Happy?</label>
            <input
                type="checkbox"
                id="isHappy"
                onChange={(e) =>
                    setUser((prevUser) => ({
                        ...prevUser,
                        isHappy: e.target.checked, //checked является булевым значением (true или false)
                    }))
                }
            />

            {/* {используем type button, не submit - так как он перезагружает страницу} */}
            <button type="button" onClick={() => props.onAdd(user)}>add</button>
        </form>
    );
}

export default AddUser;