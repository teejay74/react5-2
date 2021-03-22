/**
 * Строчка с новостью. Компонент получает на вход через props иконку, текст и ссылку.
 */
 export default function NewsUnit(props) {
    return (
        <li className="NewsUnit">
            <span className="Icon">{props.icon}</span>
            <span className="Text">{props.text}</span>
        </li>
    )
}