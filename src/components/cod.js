import { ArtRow, ColorPatternRow } from './codRows'

export const codMenu = ({part}) => (
 <div>
  <ul className="nav nav-tabs">
    <li className="active">
    	<a data-toggle="tab" href="#intro"> 
    		<span className="glyphicon glyphicon-info-sign" aria-hidden="true"> 
    		</span> 
    		<span> Cut on Demand </span>
    	</a> 
    </li>
    <li>
    	<a data-toggle="tab" href="#art"> 
	    	<span className="glyphicon glyphicon-circle-arrow-right" aria-hidden="true"> 
	    	</span> 
	    	<span> Artiklar </span>
    	</a>
    </li>
    <li>
    	<a data-toggle="tab" href="#patterandcolor"> 
	    	<span className="glyphicon glyphicon-circle-arrow-right" aria-hidden="true"> 
	    	</span> 
	    	<span> Färger och Mönster </span>
    	</a>
    </li>

    <li>
    	<a data-toggle="tab" href="#summary"> 
    		<span className="glyphicon glyphicon-circle-arrow-right" aria-hidden="true" >
    		</span> 
    		<span> Slutför </span>
    	</a>
    </li>
  </ul>
</div>
)

export const codIntro = () => (

  <div id="intro" className="tab-pane fade in active">
    <h3>Intro</h3>
    <span className="pull-right">
    	<a data-toggle="tab" href="#art"> 
    </span>
    <hr/>
    <p> - Static Intro  - </p>
  </div>
)


export const ArtList = ({arts}) => (
   <div id="art" className="tab-pane fade">
      {arts.map((art, i) =>
				<ArtRow key={i}
						   {...art}/>	
				)}
   
  </div>
)


//
export const ColorPatternList = ({copa}) => (
    <div id="patterandcolor" className="tab-pane fade">
	     <span className="pull-right">
	     	<a data-toggle="tab" href="#summary"> 
	     		<span className="glyphicon glyphicon-circle-arrow-right" aria-hidden="true" ></span> 
	     		<span>Slutför</span> 
	     	</a>
	     </span>
     </div> 
)







  