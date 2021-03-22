/**
 * Компонент отрисовки контента топика. В качестве props компонент получает тип топика и контент. В зависимости от типа топика формат вывода контента будет отличаться (для погоды content это картинки погоды и погода, для телепрограммы список передач итд)
 */
 export default function Content(props) {
    return(
        <ul className="Content">
            {props.content.map((cont,index) => <li key={index} className="TopicContentUnit">{cont}</li>)}
        </ul>
    )
}