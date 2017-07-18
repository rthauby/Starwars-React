import React from 'react';

function CharacterList(props){

    let list = null;

    if(props.list.length){
        props.list.map(character => {
            const id = character.url.replace('http://swapi.co/api/people/','');
            character.id = id;
        });
        list = (
            <ul>
                {props.list.map(character =>
                    (<li key={character.id}><a href={`/character/${character.id}`}>{character.name}</a></li>)
                )}
            </ul>
        )
    }

    return (
        <div>{list}</div>
    )
}

export default CharacterList;