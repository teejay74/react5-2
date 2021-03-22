/**
 * Показатель курса валют. На вход в качестве props принимает код валюты, значение и прирост.
 */
 export default function CurrencyUnit(props) {
    return (
        <div className="CurUnit">
        <span className="CurVal">{props.unit.value}</span>
        <span className="CurType">{props.unit.type}</span>
        <span className="CurDiff">{props.unit.diff}</span>    
        </div>
    )
}