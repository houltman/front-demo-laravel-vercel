<?php
$cacheDir = __DIR__ . '/bootstrap/cache';
if (!is_dir($cacheDir)) {
    mkdir($cacheDir, 0755, true);
}
