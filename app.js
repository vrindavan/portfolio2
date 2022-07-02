// const sections = document.querySelectorAll('.section');
// const sectBtns = document.querySelectorAll('.btns');
// const sectBtn = document.querySelectorAll('.btn');
// const allSections = document.querySelector('.container');

(function () {
	[...document.querySelectorAll('.btn')].forEach((button) => {
		button.addEventListener('click', function () {
			document
				.querySelector('.active-btn')
				.classList.remove('active-btn');
			this.classList.add('active-btn');
			document.querySelector('.active').classList.remove('active');
			document.getElementById(button.dataset.id).classList.add('active');
		});
	});
	document.querySelector('.theme-btn').addEventListener('click', () => {
		document.body.classList.toggle('light-mode');
	});
})();
