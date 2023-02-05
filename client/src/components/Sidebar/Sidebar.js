import React from "react"

export default function Sidebar() {
    return(
        <div className="sidebar-container">
            <div className="side-bar">
                <h1 className="sidebar-name">Angel Avila</h1>
                <h1 className="sidebar-name">CUNY City College of New York</h1>
                <h1 className="sidebar-tasks">Tasks: </h1>
                <ul>
                    <li>Company Case - Create Platform
                         Google | Nathaniel Mention
                        <input type="checkbox" className="check"/>
                    </li>
                    <li>Update Layout and Design of Homepage
                            Amazon | Andreas Constantinou
                            <input type="checkbox" className="check"/>
                    </li>
                </ul>
            </div>
        </div>
    )
}