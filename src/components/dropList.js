import { DropPattern } from './dropPattern'

export const PatternList = ({patterns, filterByPattern}) => ( 
      <span>  
			{Object.keys(patterns).map((pattern, i) =>
				<DropPattern key={i}
						   icon={patterns[pattern].icon}
						   pattern={pattern}
						   fam={patterns[pattern].family}
						   	filterByPattern={filterByPattern}/>	
				)}
	    </span>
)










