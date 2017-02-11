class MSWidgets {
	constructor(props) {
		const {
			$block,
			service,
			name,
			id
		} = props;
		this._$block = $block,
		this._service = service;
		this._name = name;
		this._id = id;
	}

	addContant() {
		this._$block
			.html('<input type="file" name="file"><button class="js-click">Добавить</button>')
			.on('click', '.js-click', () => {
				console.log(this._$block);
				this._$block.find('input[type="file"]').trigger('click');
		});
	}

	destroy() {
		this._$block.off().empty();
	}

}

export default MSWidgets;
