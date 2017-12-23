export const ArtRow = ({article, price, size, img, sku, id, chooseCod, itemid, cod_cost}) => (
    <div className="col-sm" id={itemid}>
        <div className="card cardcontrolsmall">
            <a onClick={(e) => chooseCod("article", sku, article, img, price, itemid,  cod_cost)}>
                <img className="card-img-top" src={"http://www.vamlingbolaget.com/"+img} alt={"Vamlingbolaget: "+article} />
                <div className="card-body">
                    <p className="card-title text-muted"> {article} </p>
                    <p className="card-text"><small className="text-muted"> {price} SEK</small></p> 
                    
                </div>
            </a>
    </div> 
    </div> 			
)
//
export const ColorPatternRow = ({quality_name, color_num, pattern_num, pattern_name, color_name, key, itemid, makeimg, chooseCod, modaltarget, modaltarget_d}) => (
    <div className="col-sm" id={itemid} >
        <div className="card cardcontrollarge" >
            <a onClick={(e) => chooseCod("colorsandpatterns", color_num, pattern_num, color_name, pattern_name, makeimg, itemid)}> 
                <img className="card-img-top" alt={"Mönster "+pattern_num+" Färger "+color_num} src={"/media/tyger/"+color_num+"f_"+pattern_num+"m.jpg"} width="100%" key={key} />
                <div className="card-body">
                    <p className="card-text">
                        <small className="text-muted ml-1"> 
                            {color_name}, {pattern_name}
                        </small>
                        <span className="ml-2">
                            <button type="button" className="btn btn-light" data-toggle="modal" data-target={modaltarget_d}>
                                <img className="icon"  src="/theme/static/svg/zoom-in.svg" alt="zoom-in" />
                            </button>

                                <div className="modal fade bd-example-modal-lg" id={modaltarget} tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-lg">
                                        <div className="modal-content">
                                            <img className="card-img-top" alt={"Mönster "+pattern_num+" Färger "+color_num} src={"/media/tyger/"+color_num+"f_"+pattern_num+"m.jpg"} width="100%"  key={key} id="{i}" />
                
                                         </div>
                                    </div>
                                </div>
                        </span> 
                    </p>
                </div>
            </a>
        </div> 
    </div> 
       
)
   //
export const SizesRow  = ({size, addSizeToArt, key, sizeid}) => ( 
    <li className="page-item sizeitem" onClick={() => addSizeToArt(size, sizeid)} id={size} key={key}>
        <a className="page-link" id={sizeid}>{size}</a>
    </li>
)         

