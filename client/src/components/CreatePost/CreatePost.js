import React from "react"

export default function CreatePost() {
    return (
        <div className="postContainer">
            <div className="post-container">
                <input type="text" placeholder="Title: " className="input-title"/>
                <input type="text" placeholder="Description: " className="input-description" />
                <div className="createPost-container">
                    <button className="createPost-btn">Create post</button>
                </div>
            </div>
            <div className="post-container">
                <p>Company Case - Tech Incubator</p>
                <p>Google | Nathaniel Mention</p>
                <p>Create a web platform that allows companies to create project/tasks that students 
                    can take on and complete. Be sure to have user authentication and to connect 
                    everything to a database.</p>
                    <input type="checkbox" className="check"/>
            </div>
            <div className="post-container">
                <p>Update Layout and Design of Homepage</p>
                <p>Amazon | Andreas Constantinou</p>
                <p>Pitch a new layout/design of Amazon’s homepage. Be sure to connect it via AWS Database Services.</p>
                <input type="checkbox" className="check"/>
            </div>
        </div>
    )
}