export default function Category(props){
    return(

        <div key={props.key} className="category-block">
            <div className="category-block__img">
                <img src={props.img} alt={props.img} />
            </div>
            
            <p>{props.title}</p>
        </div>

    )
}