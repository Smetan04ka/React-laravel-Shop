export default function Category(props, {onClick}){
    return(

        <div onClick={onClick} key={props.id} className="category-block">
            <div className="category-block__img">
                <img src={props.img} alt={props.img} />
            </div>
            <p>{props.title}</p>
        </div>

    )
}