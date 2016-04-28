
      <ul class="lang__dropdown">
        <!-- <li class="lang__dropdown--items"  data-lang="fr"><a href="?lang=fr">fr</a></li> -->
        <li class="lang__dropdown--items"  data-lang="en"><a href="?lang=en<?php if(isset($_GET['link'])){echo "&link=".$_GET['link'];} ?>"><?php echo $lang['LANG_EN']; ?></a></li>
        <li class="lang__dropdown--items"  data-lang="ja"><a href="?lang=ja<?php if(isset($_GET['link'])){echo "&link=".$_GET['link'];} ?>"><?php echo $lang['LANG_JA']; ?></a></li>
      </ul>

