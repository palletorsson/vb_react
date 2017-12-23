export const DropPattern = ({pattern, icon, fam, i, filterByPattern}) => (
	<li className="box page-item" id={pattern} onClick={(e) => filterByPattern(e, pattern)}><a className="page-link"><img id={pattern} className="iconimg" src={"/media/"+pattern+".png"}/></a></li>						
)