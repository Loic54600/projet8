import React from 'react';

function Tag({ logement }) {
    return (
        <div className="tag">
            {logement.tags.map((tag , id) => {
                return (
                    <p className="element" key={id}>{tag} </p>
                )
            })}
        </div>
    )
}

export default Tag;


