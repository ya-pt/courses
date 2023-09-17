import React from "react";
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";
import { UserTypes } from "./UserTypes";

interface UserProps {
    user: UserTypes;
    onDelete: (id: number) => void;
}

const User: React.FC<UserProps> = (props) => {
    return(
        <div className="user">
            <IoCloseCircleSharp onClick={() => props.onDelete(props.user.id)} className="deleteIcon"/>
            <IoHammerSharp className="editIcon"/>
            <h3>{props.user.firstName} {props.user.lastName}</h3>
            <p>{props.user.bio}</p>
            <b>{props.user.isHappy ? "happy :)" : "unhappy :("}</b>
        </div>
    );
}

export default User;