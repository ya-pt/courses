import React from "react";
import FunHeader from "../components/FunHeader.js";
import Users from "../components/Users";

const UsersList: React.FC = () => {
    return(
        <div>
            <FunHeader title=" a list of users"/>
            <main>
                <Users/>
            </main>
            <aside></aside>
        </div>
    );
}

export default UsersList;