import { PageRow } from './pageRow'

export const PageList = ({vpages, filterByPage}) => ( 
       <span onClick={filterByPage}>
			{
				vpages.map((vpage, i) =>

					<PageRow key={i}
							   vpage={vpage.page}/>	
					)
			}
	    </span>
)
