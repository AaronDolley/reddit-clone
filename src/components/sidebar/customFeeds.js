import React from "react";
import "./customFeed.css"

const CustomFeeds = ({  isOpen, onClose}) => {
    if (!isOpen) return null;

    return (
        <div className="overlay" onClick={onClose}>
            <div className="content" onClick={(e) => e.stopPropagation()}>
                <h2>Create custom feed</h2>
                <form className="feed">
                    <input
                    type="text"
                    placeholder="Name*"
                    name="name"
                    maxLength={50}
                    required
                    className="custom"
                    />

                    <input
                    type="text"
                    placeholder="Description"
                    name="description"
                    maxLength={500}
                    className="custom"
                    />
                    <button type="button" onClick={onClose}>Cancel</button>
                    <button type="Submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CustomFeeds;