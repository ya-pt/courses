import React, { useRef, useState } from "react";

export interface AddUserTypes {
    first_name: string;
    last_name: string;
    email: string;
    age: number;
    bio: string;
    isHappy: boolean;
}

// void здесь указывает на то, что функция выполняет "побочные эффекты",
// (например, изменение состояния, отправка данных на сервер и т. д.),
// но не возвращает какое-либо конкретное значение.
interface AddUserProps {
    onAdd: (user: AddUserTypes) => void;
}


const AddUser: React.FC<AddUserProps> = (props) => {

    // начальное состояние остается неизменным в течение жизни компонента
    const initialUser = {
        first_name: '',
        last_name: '',
        email: '',
        age: 0,
        bio: '',
        isHappy: false,
    };

    // Инициализируем состояние компонента с ОБЪЕКТОМ пользователя
    const [user, setUser] = useState<AddUserTypes>(initialUser);

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
        setUser(initialUser);
    };

    // useRef: Это хук в React, который позволяет создавать и хранить ссылки (ref) в функциональных компонентах. 
    const myForm = useRef<HTMLFormElement | null>(null);

    return(
        // ref - атрибут(ссылки), обеспечивает прямой доступ к DOM-узлам в React-приложении.
        <form ref={myForm}>
            {/* { id подставляем самостоятельно, остальные значения получаем от пользователя } */}
            <input
                placeholder="first_name"
                onChange={handleFieldChange('first_name')}
            />
            <input
                placeholder="last_name"
                onChange={handleFieldChange('last_name')}
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
                onChange={(e) =>
                    setUser((prevUser) => ({
                        ...prevUser,
                        isHappy: e.target.checked, //checked является булевым значением (true или false)
                    }))
                }
            />

            {/* {используем type button, не submit - так как он перезагружает страницу} */}
            <button
                type="button"
                onClick={() => {
                    props.onAdd(user)
                    handleReset()
                }}
            >
                add
            </button>
        </form>
    );
}

export default AddUser;