<?php
$conn = mysqli_connect("localhost", "root", "", "data_siswa2");

if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}

?>

<?php
include 'koneksi.php';

$keyword = $_GET['keyword'];

$query = "SELECT * FROM siswa 
          WHERE nipd LIKE '%$keyword%' 
          OR nama LIKE '%$keyword%'";

$result = mysqli_query($conn, $query);

$data = [];

while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}

echo json_encode($data);
