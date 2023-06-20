import './styles.css';
// Props são como argumentos de função em JavaScript e atributos em HTML
export function Card(props){
    return(
        <div className='card'>
            <strong>{props.name} </strong>
            <small>{props.time}</small>
        </div>
    )
}