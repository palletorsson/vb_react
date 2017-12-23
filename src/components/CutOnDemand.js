import { ArtRow, ColorPatternRow, SizesRow } from './codRows'

export const CodMenu = ({part}) => (
<div>

   	<ul className="btn-group mr-2 justify-content-center nav nav-tabs" role="group" aria-label="cod group">
   	    <li className="nav-item">
   	        <a className="nav-link active" id="intro-tab" data-toggle="tab" href="#intro" role="tab" aria-controls="intro" aria-selected="true">	
	   	        	<span className="badge badge-light">	
			    		<span> 
			    			Cut on Demand 
			    		</span> 
			    	</span> 
				
			 </a>
		</li>
		<li className="nav-item">
			<a className="nav-link" id="art-tab" data-toggle="tab" href="#art" role="tab" aria-controls="art" aria-selected="true">
      
			    <span className="artorderok"> 
			    	<img className="icon" src="/theme/static/svg/arrow-circle-right.svg" alt="arrow-circle-right" />  
			    </span> 
	
		    	<span className="badge badge-light">	
		    		<span className="article_name" id="article_name"> 
		    			Välj modell
		    		</span> 
		    		<span className="article_id" id="article_id"> 
		    		
		    		</span> 
		    	</span> 
			 </a>
		</li>
		<li className="nav-item">
		  <a className="nav-link" id="colorandpattern-tab" data-toggle="tab" href="#patterandcolor" role="tab" aria-controls="patterandcolor" aria-selected="true">
    
		     <span className="artorderok"> 
			    	<img className="icon" src="/theme/static/svg/arrow-circle-right.svg" alt="arrow-circle-right" />  
			    </span> 
		       <span className="badge badge-light">  	
			    	<span className="pattern_name" id="pattern_name"> 
			    		Välj Tyg
			    	</span> 
			    	<span className="pattern_id" id="pattern_id"> 
			    	</span> 
			    </span> 
		
			</a>
		
		</li>
		<li className="nav-item">
		 <a className="nav-link" id="order-tab" data-toggle="tab" href="#order" role="tab" aria-controls="order" aria-selected="true">
    
				<span className="pcorderok"> 
			    	<img className="icon" src="/theme/static/svg/arrow-circle-right.svg" alt="arrow-circle-right" />  
			    </span> 
			  
	  	 		<span className="badge badge-light"> 
			    Välj storlek 
			    </span>
		
	</a>
		</li>
		
	
	</ul>
		</div>
)
//
export const CodIntro = () => (
  	<div id="intro" className="tab-pane fadein active">
		<div className="card mb-3">
			<img className="card-img-top" src="/media/codtopfull.jpg" alt="Card image cap" />
		</div>
  	</div>
)

export const Order = ({orderitem, sizes, addToShoppingCart, addSizeToArt, artok, patterncolorok, codokall, sizebase }) => (
  	<div id="order" className="tab-pane fadein">
	  	<div className="card text-center">
			  <div className="card-header">
			    { orderitem.article } : <span id="the_price"> { orderitem.price } </span> SEK + CUT ON DEMAND: <span id="the_cod_cost">{ orderitem.cod_cost } </span> SEK
			  </div>
		</div>
	  	<div className="card-body row">
			<div className="col-sm-4">
		    	<div className="card">
		      		<div className="card-body">
		      		     { artok ? ('')
		      		     	: (<p className="card-text"> Välj modell </p>) } 
		      		     <p className="card-text"> { orderitem.article } (<span id="article_sku"> { orderitem.sku })</span></p><hr/><p className="card-img-bottom"><img className="img-thumbnail" style={{width:"300px"}} src={'http://www.vamlingbolaget.com/'+orderitem.img} alt=""/> </p>
		        	</div>
		    	</div>
		  	</div>
		  	<div className="col-sm-4">
		    	<div className="card">
		      		<div className="card-body">
		      		
		      		  { patterncolorok ? ('')
		      		     	: (<p className="card-text"> Välj Tyg </p>) } 
		        		<p className="card-text"><span>{ orderitem.pattern_name }, { orderitem.color_name } </span></p>
		        		<hr/>
		        		<p className="card-img-bottom"><img className="img-thumbnail" src={'/media/tyger/'+orderitem.pcimg} alt=""/> </p>
		        		
		      		</div>
		    	</div>
		  	</div>
		   	<div className="col-sm-4">
		   		<div className="card">
		      		<div className="card-body">
		        		<p className="card-title"> Välj Storlek </p>
		        		<hr/>
		        		<p className="card-text">
			        		<nav>
								<ul className="pagination">
									<Sizes sizes={sizes} addSizeToArt={addSizeToArt} sizebase={sizebase}/>
								</ul>
	            			</nav>
	            			<hr/>
	            			<span> Sammanfatting </span>
	            			<hr/>
	            			<small>
		            			<p>Modell: { orderitem.article }</p> 
		            			<p>Färg: { orderitem.color_name }</p> 
		            			<p>Mönster: { orderitem.pattern_name }</p> 
		            			<p>Storlek: { orderitem.size }</p> 
		            			<p>Pris: { orderitem.price } SEK + </p>
		            			<p>CUT ON DEMAND: { orderitem.cod_cost } SEK </p>
							</small>
							<hr/>
		        		</p>
		        		  
		        		<a className="btn btn-primary" onClick={(e) => addToShoppingCart(orderitem)}><span className={codokall ? 'showthis' : 'hidethis'} > Lägg till i shoppingbag</span></a>
		      		</div>
		    	</div>
		  	</div>
		</div> 
		<hr/> 
	</div> 
)

//
export const ArtList = ({arts, chooseCod}) => (
   <div id="art" className="tab-pane fade scrollart" >
  
     	<div className="row">
      		{arts.map((art, i) =>
				<ArtRow 		key={i}
								chooseCod={chooseCod}
						   		{...art}
						   		itemid = {"artid_"+art.id}
						   		price = {art.price}
						   		cod_cost = {art.cod_cost}
						   		/>	
				)}
   		</div>
  </div>
)


//
export const ColorPatternList = ({copa, chooseCod}) => (

    <div id="patterandcolor" className="tab-pane fade scrollart">
      
         <div className="row">
            {copa.map((item, i) =>
				<ColorPatternRow 	key={i}
									chooseCod={chooseCod}
					   				{...item}
					   				makeimg={item.color_num+"f_"+item.pattern_num+"m.jpg"} 
					   				modaltarget_d = {"#"+item.color_num+"f_"+item.pattern_num+"m"}
					   				modaltarget = {item.color_num+"f_"+item.pattern_num+"m"}
					   				itemid = {"id_"+item.color_num+"f_"+item.pattern_num+"m"}/>	
			)}
   		</div>
   		    
     </div> 
)

//
export const Sizes = ({sizes, addSizeToArt, sizebase}) => (

<nav aria-label="Page navigation example" >
	  <ul className="pagination">
            {sizes.map((item, i) =>
				<SizesRow 	key={i}
					   		size = {item}
					   		sizeid={add(i, sizebase)}
					   		addSizeToArt = {addSizeToArt}/>	
			)}
   		</ul> 
	</nav>

)
//
function add(p1, p2) {
	var ret = parseInt(p1) + parseInt(p2)
	console.log(ret, p1, p2);
    return ret; 

}

  