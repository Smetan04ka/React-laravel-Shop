import Button from "../Button/Button";

export default function RequestBlock({telephone}){
    <div>
        <div>
            <div>
                <img src="" alt="" />
            </div>
            <a href={'tel:'+telephone}>{telephone} sad</a>
        </div>
        <div>
            <Button>Заказать звонок</Button>
        </div>
    </div>
}