import "./basket.css"

function Baskets({basketsCount}){
    return (
        
        <div className="allBaskets">
           {basketsCount && basketsCount.length > 0 ? basketsCount.map( el =>{
            return <div className="basket"><span>{el}</span></div>
           }):""
        }
        </div>
    )
}
export default Baskets;