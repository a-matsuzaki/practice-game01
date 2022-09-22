<?php
$stmt = $db->prepare('SELECT datetime, result FROM result_table order by datetime desc');
if (!$stmt) {
    die($db->error);
}

$success = $stmt->execute();
if (!$success) {
    die($db->error);
}

$stmt->bind_result($datetime, $result);
while ($stmt->fetch()) :
    ?>
    <tr>
      <td><?php echo $datetime ?></td>
      <td><?php echo $result ?></td>
    </tr>
<?php endwhile; ?>
