export const ProductRow = ({article, price, reaprice, pattern, color, size, img, sku, id }) => (
	<div className="col-sm-3  shopimgextra ">
        <div className="card cardcontrolmedium border-0">
            <a href={"/products/rea/"+id+"/"}>
    	        <img className="card-img-top"  src={"http://www.vamlingbolaget.com/media/"+img} alt={"Vamlingbolaget:"+article}/>
                 <div className="card-body carddivextra">            
                    <p className="card-text"> {article} </p>
                    <p className="card-text"> {reaprice} SEK </p> 
    	            <p className="card-text"><small className="text-muted">( ▼ { price })</small></p>
                    <p className="card-text"><small> {pattern} {color} </small></p>
                    </div>
    		</a>
        </div>	
    </div>				
)
                                 

export const FullProductRow = ({category, article, img, price, pattern, color, size, description, color_id, pattern_id, sku, id, pk}) => (
    <div className="col-sm-3 shopimgextra">
        <div className="card cardcontrolmedium mb-3 border-0">
            <a href={category == 'Barn' || category == 'Accessoarer & sängkläder' || category == 'Metervara' ? "http://www.vamlingbolaget.com//products/"+pk : "http://www.vamlingbolaget.com/products/fullvariation/"+pk}>  
                <img className="card-img-top" src={category == 'Barn' || category == 'Accessoarer & sängkläder' || category == 'Metervara' ? "http://www.vamlingbolaget.com/"+img : "http://www.vamlingbolaget.com/media/variations/"+sku+"_"+pattern_id+"_"+color_id+"_1.jpg"} width="160px" alt="Vamlingbolaget"/>
                <div className="card-body carddivextra">                
                    <p> {article}  </p>
                    <p>{ price } SEK </p> 
                    <p><small>  {color}  {pattern} </small></p> 
                </div>
            </a>
        </div>     
    </div>               
)
                                
