import React from 'react';

function Tag({ logement }) {
    return (
        <div className="tag">
            {logement.tags.map((tag) => {
                return (
                    <p className="element">{tag} </p>
                )
            })}
        </div>
    )
}

export default Tag;


