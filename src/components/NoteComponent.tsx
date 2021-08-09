import React from 'react'


interface Props {
    title: string,
    id: number,
    completed: boolean
}


const NoteComponent:React.FC<Props> = ({title, id, completed}) => {

    console.log(title)
    return (
        <div className="note">
            <p>{title}</p>
        </div>
    )
}

export default NoteComponent
