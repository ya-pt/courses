import React from "react";
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";

interface UserProps {
    user: {
      firstName: string;
      lastName: string;
      bio: string;
      isHappy: boolean;
    };
}

const User: React.FC<UserProps> = (props) => {
    return(
        <div className="user">
            <IoCloseCircleSharp className="deleteIcon"/>
            <IoHammerSharp className="editIcon"/>
            <h3>{props.user.firstName} {props.user.lastName}</h3>
            <p>{props.user.bio}</p>
            <b>{props.user.isHappy ? "happy :)" : "unhappy :("}</b>
        </div>
    );
}

export default User;