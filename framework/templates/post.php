<article <?php post_class('bt-post'); ?>>
	<div class="bt-post--infor">
		<?php
		echo __THEME_SLUG__post_category_render();
		if (is_single()) {
			echo __THEME_SLUG__single_post_title_render();
		} else {
			echo __THEME_SLUG__post_title_render();
		}
		echo __THEME_SLUG__post_meta_single_render();
		?>
	</div>
	<?php
		echo __THEME_SLUG__post_featured_render();
		echo __THEME_SLUG__post_content_render();
	?>
</article>