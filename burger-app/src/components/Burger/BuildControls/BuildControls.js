import React from 'react'

import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'
const controls = [
    {labels:'Salad', type:'salad'},
    {labels:'Bacon', type:'bacon'},
    {labels:'Meat', type:'meat'},
    {labels:'Cheese', type:'cheese'},
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
<p>Current price :<strong>{props.price.toFixed(2)}</strong></p>
{  controls.map( ctrl=>{
       return  <BuildControl
                added={()=> props.ingredientAdded(ctrl.type)} 
                removed={()=> props.ingredientRemoved(ctrl.type)} 
                disabled={props.disabled[ctrl.type]} 

                key={ctrl.labels} 
                labels={ctrl.labels}/>
    })
}
<button 
disabled ={!props.purchasable}
className={classes.OrderButton}
onClick={props.ordered}
>ORDER NOW</button>
    </div>
);

export default buildControls;