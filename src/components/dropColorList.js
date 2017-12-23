export const ColorList = ({items, filterByColor}) => ( 
   <span  name="colors">  
	{Object.keys(items).map((item, i) =>
              <li className="page-item box" id={items[item].color} onClick={(e) => filterByColor(e, items[item].color)} key={i} >
	              <a className="page-link" id={i}>
	              	<div style={items[item].colorvalue} className="boxline" ></div> 
	              </a>
              </li> 
          )}
	</span>
)
 