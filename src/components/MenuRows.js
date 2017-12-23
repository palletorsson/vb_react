export const MenuRow = ({item, Mid, title, type, MenuClick}) => (
    <li className="nav-item" key={Mid}> <a className="nav-link a_headernav" id={Mid} onClick={(evt) => MenuClick(type, Mid, title, "shopmenu")}>{ title }</a> </li>	
)