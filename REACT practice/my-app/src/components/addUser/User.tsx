import React, { useState } from "react";
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";
import { UserTypes } from "./UserTypes";
import EditUser from "./EditUser";

interface UserProps {
    user: UserTypes;
    onDelete: (id: number) => void;
    onEdit: (newValues: UserTypes) => void;
}


const User: React.FC<UserProps> = (props) => {
    const [editForm, setEditForm] = useState<boolean>(false);

    return(
        <div className="user">
            <IoCloseCircleSharp onClick={() => props.onDelete(props.user.id)} className="deleteIcon"/>
            <IoHammerSharp onClick={() => { setEditForm(!editForm)}} className="editIcon"/>
            <h3>{props.user.first_name} {props.user.last_name}</h3>
            <p>{props.user.email}</p>
            <p>{props.user.age}</p>
            <p>{props.user.bio}</p>
            <b>{props.user.isHappy ? "happy :)" : "unhappy :("}</b>

            {editForm && <EditUser user={props.user} onEdit={props.onEdit} />} {/* Если editForm (true), то выражение после && (условный рендеринг в React) будет отображено */}
        </div>
    );
}

export default User;