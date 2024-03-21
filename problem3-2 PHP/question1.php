<?php

// Check if 'n' is set in the query string and is a number
if (isset($_GET['n']) && is_numeric($_GET['n'])) {
    // Get the number from the query string
    $n = $_GET['n'];

    // Generate and display the times table for the number
    for ($i = 1; $i <= 12; $i++) {
        echo "{$i} x {$n} = " . ($i * $n) . "<br>";
    }
} else {
    echo "Please provide a valid number in the query string with a key of 'n'.";
}

?>
