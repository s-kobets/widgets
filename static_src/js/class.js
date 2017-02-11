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
}

export default MSWidgets;
