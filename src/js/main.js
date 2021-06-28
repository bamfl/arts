import slider from './modules/slider';
import modals from './modules/modals';
import forms from './modules/forms';
import showMore from './modules/showMore';
import calc from './modules/calc';
import tabs from './modules/tabs';
import hoverArts from './modules/hoverArts';
import accordion from './modules/accordion';
import burgerMenu from './modules/burgerMenu';
import anchorScroll from './modules/anchorScroll';

document.addEventListener('DOMContentLoaded', () => {
	slider();
	modals();
	forms();
	showMore();
	calc();
	tabs();
	hoverArts();
	accordion();
	burgerMenu();
	anchorScroll('.pageup');
});
