import React from "react";
import User from "./User";
import { UserTypes } from "./UserTypes";

// void здесь указывает на то, что функция выполняет "побочные эффекты",
// (например, изменение состояния, отправка данных на сервер и т. д.),
// но не возвращает какое-либо конкретное значение.
interface UsersProps {
    users: UserTypes[];
    onDelete: (id:number) => void;
    onEdit: (newValues: UserTypes) => void;
}

const Users: React.FC<UsersProps> = (props) => {

    return(
        <div>
            {
                props.users.length > 0 ? (
                    <div>
                        {
                            props.users.map((el) => (
                                <User key={el.id} user={el} onDelete={props.onDelete} onEdit={props.onEdit} />
                            ))
                        }
                    </div>
                ) : (
                    <div className="user">
                        <h3>No users</h3>
                    </div>
                )
            }
        </div>
    );
}

export default Users;