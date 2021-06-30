import slider from './modules/slider';
import modals from './modules/modals';
import forms from './modules/forms';
import showMore from './modules/showMore';
import calc from './modules/calc';
import tabs from './modules/tabs';
import hoverArts from './modules/hoverArts';
import accordion from './modules/accordion';
import burgerMenu from './modules/burgerMenu';
<<<<<<< HEAD
import dbGetStyles from './modules/dbGetStyles';
=======
import anchorScroll from './modules/anchorScroll';
import fileDragAndDrop from './modules/fileDragAndDrop';
>>>>>>> 09170ad0573162149f6457a5639b2367a998e56f

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
<<<<<<< HEAD
	dbGetStyles();
=======
	anchorScroll('.pageup');
	fileDragAndDrop();
>>>>>>> 09170ad0573162149f6457a5639b2367a998e56f
});
