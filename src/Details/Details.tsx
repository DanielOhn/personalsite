import { useState } from 'react';
import './Details.css'

interface Projects { // ADD COLOR FOR BG COLOR AND IMAGES
    title: string;
    items: Array<Project>;
}

interface Project {
    id: number;
    name: string;
    url: string;
    content: string;
}

function Details(props: Projects) {
    return (
        <div className="detail">
            <h2>{props.title}</h2>
            {props.items.map((item) => 
                <div className="item">
                    {item.url === "" &&
                        <h3>{item.name}</h3>
                    }
                    {item.url !== "" &&
                        <h3><a href={item.url}>{item.name}</a></h3>
                    }
                    <p>{item.content}</p>
                </div>
            )}
        </div>
    )
}

export default Details;