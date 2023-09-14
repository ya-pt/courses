import React from "react";
import User from "./User";
import { UserTypes } from "./UserTypes";


interface UsersProps {
    users: UserTypes[];
}

const Users: React.FC<UsersProps> = (props) => {

    return(
        <div>
            {
                props.users.length > 0 ? (
                    <div>
                        {
                            props.users.map((el) => (
                                <User key={el.id} user={el}/>
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