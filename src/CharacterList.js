import React from 'react';

function CharacterList(props){

    let list = null;

    if(props.list.length){
        list = (
            <ul>
                {props.list.map((character, index) =>
                    (<p key={index}>{character.name}</p>)
                )}
            </ul>
        )
    }

    return (
        <div>{list}</div>
    )
}

export default CharacterList;