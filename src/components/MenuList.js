export const ShopMenu = ({items, MenuClick}) => (

   <nav className="navbar navbar-expand-md bg-faded extramenu">  
   	 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedShop" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    	<span className="navbar-toggler-icon"></span>
  	 </button>
     <ul className="collapse pagination" id="navbarSupportedShop"> 
		 {items.map((item) =>	
	     	<li className="nav-item" key={item.Mid}> 
	     	<span className="badge badge-light nav-link a_headernav" id={item.Mid} onClick={() => MenuClick(item.type, item.Mid, item.title, "shopmenu")}>{ item.title } | </span>
			</li>
			)}
	  </ul>	
	</nav>
)

