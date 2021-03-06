/* global $ */

import MSWidgets from './class.js';

(function () {
	window.Widgets = window.Widgets || {};
	window.Widgets.comment = function ($comment) {
		initial($comment);
	};
	window.Widgets.comment();

})();

function initial($comment) {
	$comment = $comment || $('[data-widget="comment"]');
	if (!$comment) {
		return;
	}
	$comment.each(function () {
		const $block = $(this);
		if (!$block.data('ms.comment')) {
			let comment;

			comment = new MSWidgets({
				$block: $block,
				service: $block.data('arg-service'),
				name: $block.data('arg-name'),
				id: $block.data('arg-id')
			});

			$block.data('ms.comment', comment);
			comment.addContant();
		}
	});
}
