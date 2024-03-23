<?php

// Check if 'n' exists and if it is a number
if (isset($_GET['n']) && is_numeric($_GET['n'])) {
    // get 'n'
    $n = $_GET['n'];

    // create time table
    for ($i = 1; $i <= 12; $i++) {
        echo "{$i} x {$n} = " . ($i * $n) . "<br>";
    }
} else {
    echo "no valid number is found with a key of 'n'.";
}

?>
