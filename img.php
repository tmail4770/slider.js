<?php

if (isset($_GET['img']) && filter_var($_GET['img'], FILTER_VALIDATE_URL)) {

    $img = $_GET['img'];

    if (strpos($img, '/s72-c/') !== FALSE) {

        $img = str_replace('/s72-c/', '/w600-h315-c/', $img);

        header("Location: {$img}");

    }

}

exit;
