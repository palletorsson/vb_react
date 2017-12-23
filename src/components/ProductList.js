import { ProductRow,  FullProductRow } from './ProductRow'

export const ProductList = ({products}) => (
    <div>
    	<div className="row">
			{products.map((product, i) =>
				<ProductRow key={i}
						   {...product}/>	
				)}
		</div>
	</div>
)


//
export const FullProductList = ({products}) => (
	
	<div className="row">
		{products.map((product, i) =>
			<FullProductRow key={i}
					   {...product}/>	
			)}
	</div>
)








