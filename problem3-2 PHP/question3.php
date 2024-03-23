<?php

// create header that return JSON content
header('Content-Type: application/json');

// Read 'n' from the query string and ensure it is an integer
$n = isset($_GET['n']) ? (int)$_GET['n'] : 0;

// starter of Fibonacci sequence
$fibSequence = [0, 1];

// Function to generate the Fibonacci sequence of length n
function generateFibonacci($n) {
    $sequence = [0, 1];
    for ($i = 2; $i < $n; $i++) {
        $sequence[] = $sequence[$i - 1] + $sequence[$i - 2];
    }
    return array_slice($sequence, 0, $n);
}

// Generate the Fibonacci sequence if n is greater than 0
if ($n > 0) {
    $fibSequence = generateFibonacci($n);
}

// Prepare the response array
$response = [
    'length' => $n,
    'fibSequence' => $fibSequence
];

// Encode and return the response as JSON
echo json_encode($response);

?>
