import React from 'react'
import NavBar from '../components/NavBar';
export default function About(){
	const title = "About";
    return (
        <div>
			<NavBar title={title}></NavBar>
			<div>
				<h3>I'm getting better I think?</h3>
			</div>
		</div>
    )
}