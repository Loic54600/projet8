import React from 'react';

function Tag({ logement }) {

    return (
        <div className="tag">
            <p className="element">{logement.tags[1]} </p>
        </div>
        )
}

export default Tag;

