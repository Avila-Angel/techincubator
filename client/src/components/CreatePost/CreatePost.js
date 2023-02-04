import React from "react"

export default function CreatePost() {
    return (
        <div className="post-container">
            <input type="text" placeholder="Title: " className="input-title"/>
            <input type="text" placeholder="Description: " className="input-description" />
            <div className="createPost-container">
                <button className="createPost-btn">Create post</button>
            </div>
        </div>
    )
}