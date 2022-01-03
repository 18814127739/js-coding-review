class UserCard extends HTMLElement {
	constructor() {
		super();
		// mode: 'closed' 表示 Shadow DOM 是封闭的，不允许外部访问
		const shadow = this.attachShadow({ mode: 'closed' });
		const tplEle = document.getElementById('userCard');
		const content = tplEle.content.cloneNode(true);
		content.querySelector('img').setAttribute('src', this.getAttribute('image'));
		content.querySelector('.container>.name').innerText = this.getAttribute('name');
		content.querySelector('.container>.email').innerText = this.getAttribute('email');

		const $button = content.querySelector('button');
		$button.addEventListener('click', () => {
			document.body.style.background = 'cyan';
			document.querySelector('h1').style.color = 'red';
		});

		shadow.appendChild(content);
	}
}

window.customElements.define('user-card', UserCard);
