import { SizeRow } from './sizeRow'

export const SizeList = ({sizes, filterBySize}) => ( 
        <span onClick={filterBySize}>
			{sizes.map((size, i) =>
				<SizeRow key={i}
						  size={size}
						   />	
				)}
	    </span>
)
