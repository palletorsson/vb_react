import React from 'react'
import { render } from 'react-dom'
import { Products } from './components/Products'

window.React = React

render(
	<Products />,
	document.getElementById('react-container')
)