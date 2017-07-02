import React from 'react';
import _ from 'lodash';
import humanize from 'string-humanize'

function CharacterAttributes(props) {
    let list = null;

    if(Object.keys(props.list)){
        const dataList = _.toPairs(props.list);

        list = (
            <ul className='stdDataList'>
                {dataList.map((item, index) =>
                    <li key={index}><strong>{humanize(item[0])}: </strong><span>{item[1]}</span></li>
                )}
            </ul>
        )
    }

    return (
        <div>{list}</div>
    )
}

export default CharacterAttributes;