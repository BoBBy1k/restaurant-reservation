import React from 'react'
import { LemonButton } from '../../../../../../components'

//props list: image={}, imageAlt={""}, title={""}, price={""}, text={""}, link={""}
export function SpecialCard(props) {

    return (
        <div className="card" style={{width: "18rem", border:"none", backgroundColor:"#EDEFEE", borderTopLeftRadius:"8%", borderTopRightRadius:"8%" }}>
            <div className="card-body" style={{ padding:"0"}}>
                <img className="card-img-top" src={props.image} alt={props.imageAlt} style={{ borderTopLeftRadius:"8%", borderTopRightRadius:"8%", width:"288", height:"200px"}}></img>
                <div style={{display:"flex", padding:"20px"}}>
                    <h4 className="card-title" style={{flex:1, fontFamily:"karla, sans-serif", fontWeight:"bold", whiteSpace: "nowrap"}}>{props.title}</h4>
                    <h4 className="card-price" style={{flex:1, fontFamily:"karla, sans-serif", textAlign:"right", fontWeight:"bold"}}>{props.price}</h4>
                </div>                
                <p className="card-text" style={{ padding:"10px", height:"200px", fontSize:"16px", fontFamily:"karla, sans-serif", fontWeight:"normal"}}>{props.text}</p>
                <LemonButton text={"Order it Delivered"} href={"#delivery"} />
                <div><br /></div>
            </div>
        </div>
    )
}