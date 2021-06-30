import slider from './modules/slider';
import modals from './modules/modals';
import forms from './modules/forms';
import showMore from './modules/showMore';
import calc from './modules/calc';
import tabs from './modules/tabs';
import hoverArts from './modules/hoverArts';
import accordion from './modules/accordion';
import burgerMenu from './modules/burgerMenu';
import dbGetStyles from './modules/dbGetStyles';

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
	dbGetStyles();
});
