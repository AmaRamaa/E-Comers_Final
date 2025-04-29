import React, { useState } from 'react';

const Tags = () => {
    const [tags, setTags] = useState(['React', 'JavaScript', 'CSS', 'HTML']);

    const handleAddTag = () => {
        const newTag = prompt('Enter a new tag:');
        if (newTag) {
            setTags([...tags, newTag]);
        }
    };

    const handleRemoveTag = (tagToRemove) => {
        setTags(tags.filter(tag => tag !== tagToRemove));
    };

    return (
        <div>
            <h1>Tags Page</h1>
            <ul>
                {tags.map((tag, index) => (
                    <li key={index}>
                        {tag} <button onClick={() => handleRemoveTag(tag)}>Remove</button>
                    </li>
                ))}
            </ul>
            <button onClick={handleAddTag}>Add Tag</button>
        </div>
    );
};

export default Tags;