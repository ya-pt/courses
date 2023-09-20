import React, { useRef, useState } from "react";
import { UserTypes } from "./UserTypes";

interface EditUserProps {
    user: UserTypes;
    onEdit: (newValues: UserTypes) => void;
}

const EditUser: React.FC<EditUserProps> = (props) => {

    // Инициализируем состояние компонента с ОБЪЕКТОМ пользователя
    const [user, setUser] = useState<UserTypes>(props.user);

    const handleFieldChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setUser((prevUser) => ({
          ...prevUser, // Копируем предыдущее состояние
          [field]: e.target.value, // Обновляем поле
        }));
    };

    const handleReset = () => {
        // current используется для получения доступа к реальному DOM-элементу
        if (myForm.current) {
            myForm.current.reset(); // reset - для сброса значений полей формы к их исходным значениям
        }
    };

    // useRef: Это хук в React, который позволяет создавать и хранить ссылки (ref) в функциональных компонентах. 
    const myForm = useRef<HTMLFormElement | null>(null);


    return(
        // ref - атрибут(ссылки), обеспечивает прямой доступ к DOM-узлам в React-приложении.
        <form ref={myForm}>
            <input
                placeholder="firstName"
                onChange={handleFieldChange('firstName')}
            />
            <input
                placeholder="lastName"
                onChange={handleFieldChange('lastName')}
            />
            <input
                placeholder="email"
                onChange={handleFieldChange('email')}
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
                onChange={handleFieldChange('bio')}
            />

            {/* htmlFor - это атрибут для связи метки (<label>) в React c элементом ввода формы (<input>, <textarea>, <select>). */}
            <label htmlFor="isHappy">Happy?</label>
            <input
                type="checkbox"
                id="isHappy"
                checked={user.isHappy} //устанавливает значение чекбокса
                onChange={(e) => {
                    setUser((prevUser) => ({
                        ...prevUser,
                        isHappy: e.target.checked, //checked является булевым значением (true или false)
                    }));
                    console.log(user.isHappy); // React может обновлять состояние асинхронно, поэтому console может отобразить предыдущее значение 
                    console.log(e.target.checked); // Это будет актуальное значение после изменения состояния
                }}
            />

            {/* {используем type button, не submit - так как он перезагружает страницу} */}
            <button
                type="button"
                onClick={() => {
                    handleReset();

                    // вызываем функцию через props и изменяем пользователя с текущим id
                    props.onEdit(user);
                }}
            >
                add
            </button>
        </form>
    );
}

export default EditUser;