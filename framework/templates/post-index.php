<?php
$post_id = get_the_ID();
$category = get_the_terms($post_id, 'category');
?>
<article <?php post_class('bt-post'); ?>>
<div class="bt-post--inner">
    <?php echo __THEME_SLUG__post_cover_featured_render($args['image-size']); ?>
    <div class="bt-post--content">
      <?php 
      echo __THEME_SLUG__post_meta_render();
      echo __THEME_SLUG__post_title_render();
      echo __THEME_SLUG__post_excerpt_render();
      echo __THEME_SLUG__post_button_render('Read More');
      ?>
    </div>
  </div>
</article>