import React, { useReducer, useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
const items = [
	{
		title: 'What is React?',
		content: 'React is a front end javascript framework'
	},
	{
		title: 'Why use React?',
		content: 'React is a favorite JS library among engineers'
	},
	{
		title: 'How do you use React?',
		content: 'React can be used by creating components'
	}
];
const options = [
	{
		label: 'The Color Red',
		value: 'red'
	},
	{
		label: 'The Color Blue',
		value: 'blue'
	},
	{
		label: 'The Color Green',
		value: 'green'
	}
];

const showAccordion = () => {
	if (window.location.pathname === '/') {
		return <Accordion items={items} />;
	}
};
const showList = () => {
	if (window.location.pathname === '/list') {
		return <Search />;
	}
};
const showDropdown = () => {
	if (window.location.pathname === '/dropdown') {
		return <Dropdown />;
	}
};
const showTranslate = () => {
	if (window.location.pathname === '/translate') {
		return <Translate />;
	}
};
export default () => {
	// const [ selected, setSelected ] = useState(options[0]);
	// const [ showDropdown, setShowDropdown ] = useState(true);
	return (
		<div>
			{/* <Accordion items={items} /> */}
			{/* <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button> */}
			{/* {showDropdown ? <Dropdown options={options} selected={selected} onSelectedChange={setSelected} /> : null} */}
			{showAccordion()}
			{showList()}
			{showDropdown()}
			{showTranslate()}
		</div>
	);
};
