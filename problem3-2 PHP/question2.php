<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Question 2</title>
    <style>
        .office-hours {
            font-family: Arial, sans-serif;
            width: 300px;
        }
        .office-hours dt {
            float: left;
            clear: left;
            width: 100px;
            text-align: left;
            font-weight: bold;
        }
        .office-hours dd {
            float: right;
            width: 200px;
            margin: 0;
        }
    </style>
</head>
<body>
    <?php
    $officeHours = [
        'Monday'    => '9am - 4pm',
        'Tuesday'   => '9am - 4pm',
        'Wednesday' => '9am - 4pm',
        'Thursday'  => '9am - 4pm',
        'Friday'    => '9am - 4pm',
        'Saturday'  => 'Closed',
        'Sunday'    => 'Closed'
    ];

    function displayOfficeHours($hours) {
        $output = '<dl class="office-hours">';
        foreach ($hours as $day => $time) {
            // .= append
            $output .= "<dt>$day</dt><dd>$time</dd>";
        }
        $output .= '</dl>';
        return $output;
    }

    echo displayOfficeHours($officeHours);
    ?>
</body>
</html>
