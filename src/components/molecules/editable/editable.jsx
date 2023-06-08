import EasyEdit from 'react-easy-edit';


export default function Editable(){


    return(
        <>
            <div>
            <EasyEdit 
                type='text'
                onSave={save}
            />

            </div>
        </>
    )
}