<?php header("Access-Control-Allow-Origin: *");$rest_json = file_get_contents("php://input");$_POST = json_decode($rest_json, true);$request='';if(isset($_POST['request'])){$request = $_POST['request'];$params = $_POST['params'];}if (!function_exists($request)) die("invalid request: '" . $request . "'"); 
/** 
* FlxZipArchive, Extends ZipArchiv. 
* Add Dirs with Files and Subdirs. 
* 
* <code> 
*  $archive = new FlxZipArchive; 
*  // ..... 
*  $archive->addDir( 'test/blub', 'blub' ); 
* </code> 
*/ 
class FlxZipArchive extends ZipArchive { 
/** 
* Add a Dir with Files and Subdirs to the archive 
* 
* @param string $location Real Location 
* @param string $name Name in Archive 
* @author Nicolas Heimann 
* @access private 
**/ 
public function addDir($location, $name) { 
$this->addEmptyDir($name); 
$this->addDirDo($location, $name); 
} // EO addDir; 
/** 
* Add Files & Dirs to archive. 
* 
* @param string $location Real Location 
* @param string $name Name in Archive 
* @author Nicolas Heimann 
* @access private 
**/ 
private function addDirDo($location, $name) { 
$name .= '/'; 
$location .= '/'; 
// Read all Files in Dir 
$dir = opendir ($location); 
while ($file = readdir($dir)) 
    { 
    if ($file == '.' || $file == '..') continue; 
    // Rekursiv, If dir: FlxZipArchive::addDir(), else ::File(); 
    $do = (filetype( $location . $file) == 'dir') ? 'addDir' : 'addFile'; 
    $this->$do($location . $file, $name . $file); 
    } 
    } // EO addDirDo(); 
    } 
    function DirectoryCopy($src, $dst) { 
    //check the source directory 
    $source_exists = is_dir($src); 
    $target_exists = is_dir($dst); 
    if (!$source_exists) { 
    //source does not exist 
    die("no"); 
    } 
    if ($target_exists) { 
    //target already exists 
    die("yes"); 
    } 
    // open the source directory 
    $dir = opendir($src); 
    // Make the destination directory if not exist 
    mkdir($dst, 0700, true); 
    // Loop through the files in source directory 
    foreach (scandir($src) as $file) { 
    if (( $file != '.' ) && ( $file != '..' )) { 
    if ( is_dir($src . '/' . $file) ) 
    { 
    // Recursively calling custom copy function 
    // for sub directory 
    DirectoryCopy($src . '/' . $file, $dst . '/' . $file); 
    } 
else { 
    copy($src . '/' . $file, $dst . '/' . $file); 
    } 
    } 
    } 
    closedir($dir); 
    //return directory existence 
    $res = DirectoryExists($dst); 
    die($res); 
    } 
    function FileUnzip($zipfile, $extractTo) { 
    if (!file_exists($zipfile)) { 
    die("no"); 
    } 
    // Create new zip class 
    $zip = new ZipArchive; 
    $zip->open($zipfile); 
    // Extracts to current directory 
    $zip->extractTo($extractTo); 
    $zip->close(); 
    //return directory existence 
    $res = FileExists($extractTo); 
    die($res); 
    } 
    function DirectoryListRecursive($path) { 
    $target_exists = is_dir($path); 
    if (!$target_exists) { 
    //source does not exist 
    die("{}"); 
    } 
    $iterator = new RecursiveDirectoryIterator($path); 
    // skip dot files while iterating 
    $iterator->setFlags(RecursiveDirectoryIterator::SKIP_DOTS); 
    $rii = new RecursiveIteratorIterator($iterator, RecursiveIteratorIterator::SELF_FIRST); 
    $files = array(); 
    foreach ($rii as $file) { 
    $fname = $file->getPathname(); 
    $fname = str_replace('\\', '/', $fname); 
    $files[] = $fname; 
    } 
    $output = json_encode($files); 
    die($output); 
    } 
    function DirectoryDelete($dir) { 
    $target_exists = is_dir($dir); 
    if (!$target_exists) { 
    //source does not exist 
    die("no"); 
    } 
    $iter = new RecursiveDirectoryIterator($dir); 
    foreach (new RecursiveIteratorIterator($iter, RecursiveIteratorIterator::CHILD_FIRST) as $f) { 
    if ($f->isDir()) { 
    rmdir($f->getPathname()); 
    } else { 
    unlink($f->getPathname()); 
    } 
    } 
    rmdir($dir); 
    //return directory existence 
    $res = DirectoryExists($dir); 
    } 
    function DirectoryZip($path, $zipname) { 
    $target_exists = is_dir($path); 
    if (!$target_exists) { 
    //source does not exist 
    die("no"); 
    } 
    $za = new FlxZipArchive; 
    $res = $za->open($zipname, ZipArchive::CREATE); 
    if($res === TRUE) { 
    $za->addDir($path, basename($path)); 
    $za->close(); 
    } 
    //return directory existence 
    $res = FileExists($zipname); 
    } 
    function FolderZip($source, $destination) { 
    if (extension_loaded('zip')) { 
    if (file_exists($source)) { 
    $zip = new ZipArchive(); 
    if ($zip->open($destination, ZIPARCHIVE::CREATE)) { 
    $source = realpath($source); 
    if (is_dir($source)) { 
    $iterator = new RecursiveDirectoryIterator($source); 
    // skip dot files while iterating 
    $iterator->setFlags(RecursiveDirectoryIterator::SKIP_DOTS); 
    $files = new RecursiveIteratorIterator($iterator, RecursiveIteratorIterator::SELF_FIRST); 
    foreach ($files as $file) { 
    $file = realpath($file); 
    if (is_dir($file)) { 
    $zip->addEmptyDir(str_replace($source . DIRECTORY_SEPARATOR, '', $file)); 
    } else if (is_file($file)) { 
    //There is no concept of "folders" for ZIP files. If you need to store data into folders, use forward slashes 
    $newName = str_replace($source . DIRECTORY_SEPARATOR, '', $file); 
    $newName = str_replace(DIRECTORY_SEPARATOR, "/", $newName); 
    $zip->addFile($file, $newName); 
    } 
    } 
    } else if (is_file($source)) { 
    $zip->addFile($source, basename($source)); 
    } 
    } 
    $zip->close(); 
    } 
    } 
    //return directory existence 
    $res = FileExists($destination); 
    return $res; 
    } 
    function FileGetJSON($url) { 
    $f = file_get_contents($url); 
    $f = mb_convert_encoding($f, "UTF-8"); 
    echo $f; 
    } 
	function FileDetails($url) { 
		if (file_exists($url)) { 
    		$f = stat($url); 
			$ft = filetype($url); 
			$mtime = $f["mtime"]; 
			$size = $f["size"]; 
			$mtime = date("Y-m-d H:i:s", $mtime); 
			$resp = array(); 
			$resp['size'] = $size; 
        	$resp['date'] = $mtime; 
			$resp['type'] = $ft; 
			$output = json_encode($resp); 
			echo $output; 
		}else { 
			die(""); 
		} 
    } 
	function FileRealPath($url) { 
		if (file_exists($url)) { 
    		$f = realpath($url); 
    		echo $f; 
		}else { 
			die(""); 
		} 
    } 
	function FileDirName($url) { 
		if (file_exists($url)) { 
    		$f = dirname($url); 
    		echo $f; 
		}else { 
			die(""); 
		} 
    } 
	function FileBaseName($url) { 
		if (file_exists($url)) { 
    		$f = basename($url); 
    		echo $f; 
		}else { 
			die(""); 
		} 
    } 
    function FileGetHTML($url) { 
    $f = file_get_contents($url); 
    $f = mb_convert_encoding($f, "UTF-8"); 
    echo $f; 
    } 
    function DirectoryMake($dirpath) { 
    $target_exists = is_dir($dirpath); 
    if ($target_exists) { 
    die("yes"); 
    } 
    mkdir($dirpath, 0700, true); 
    //return directory existence 
    $res = DirectoryExists($dirpath); 
    die($res); 
    } 
    function FileDelete($filex) { 
    if (file_exists($filex)) { 
    unlink($filex); 
    } 
    $res = FileExists($filex); 
    switch ($res) { 
case "yes": 
    die("no"); 
case "no": 
    die("yes"); 
    default: 
    die("no"); 
    } 
    } 
    function FileExists($path) { 
    if (file_exists($path)) { 
    die("yes"); 
    }else { 
    die("no"); 
    } 
    } 
    function DirectoryExists($path) { 
    $target_exists = is_dir($path); 
    if (!$target_exists) { 
    //source does not exist 
    die("no"); 
    } 
    die("yes"); 
    } 
    function RollingCopyright($message,$year) 
    { 
    die("$message &copy;$year-" . date("Y")); 
    } 
    function WriteFile($fileName, $fileContents) { 
    $fileContents = mb_convert_encoding($fileContents, "UTF-8"); 
    file_put_contents($fileName, $fileContents); 
    $res = FileExists($fileName); 
    die($res); 
    } 
    function LogFile($fileName, $fileContents) { 
    $fileContents = mb_convert_encoding($fileContents, "UTF-8"); 
    $msg = date("Y-m-d H:i:s ") . $fileContents . "\n"; 
    file_put_contents($fileName, $msg, FILE_APPEND); 
    $res = FileExists($fileName); 
    die($res); 
    } 
    function FileAppend($fileName, $fileContents) { 
    if (!file_exists($fileName)) { 
    die("no"); 
    } 
    $fileContents = mb_convert_encoding($fileContents, "UTF-8"); 
    file_put_contents($fileName, $fileContents, FILE_APPEND); 
    $res = FileExists($fileName); 
    die($res); 
    } 
    function FileCopy($source, $target) { 
    // does the file / directory 
    if (!file_exists($source)) { 
    die("no"); 
    } 
    copy($source, $target); 
    $res = FileExists($target); 
    die($res); 
    } 
    function FileRename($source, $target) { 
    // does the file / directory 
    if (!file_exists($source)) { 
    die("no"); 
    } 
    rename($source, $target); 
    $res = FileExists($target); 
    die($res); 
    } 
    function GetFile($fileName) { 
    // does the file / directory 
    if (!file_exists($fileName)) { 
    die(""); 
    } 
    $f = file_get_contents($fileName); 
    $f = mb_convert_encoding($f, "UTF-8"); 
    die($f); 
    } 
    function GetPathInfo($fileName) { 
    // does the file / directory 
    if (!file_exists($fileName)) { 
    die(""); 
    } 
    $path_parts = pathinfo($fileName); 
    $output = json_encode($path_parts); 
    die($output); 
    } 
    function SendEmail($from,$to,$cc,$subject,$msg) { 
    $msg = str_replace("|", "\r\n", $msg); 
    $msg = str_replace("\n.", "\n..", $msg); 
    // use wordwrap() if lines are longer than 70 characters 
    $msg = wordwrap($msg,70,"\r\n"); 
    //define from header 
    $headers = "From:" . $from . "\r\n"; 
    $headers .= "Cc: " . $cc . "\r\n"; 
    $headers .= "X-Mailer:PHP/" . phpversion(); 
    $headers .= "MIME-Version: 1.0\r\n"; 
    $headers .= "Content-type: text/html\r\n"; 
    // send email 
    $response = (mail($to,$subject,$msg,$headers)) ? "success" : "failure"; 
    $output = json_encode(array("response" => $response)); 
    header('content-type: application/json; charset=utf-8'); 
    die($output); 
    } 
    function DirectoryList($path) { 
    $files = array(); 
    $dirs = array(); 
    $fnum = $dnum = 0; 
    if (is_dir($path)) 
    { 
    $dh = opendir($path); 
    do 
        { 
        $item = readdir($dh); 
        if ($item !== FALSE && $item != "." && $item != "..") 
        { 
        if (is_dir("$path/$item")) $dirs[$dnum++] = $item; 
    else $files[$fnum++] = $item; 
        } 
        } while($item !== FALSE); 
        closedir($dh); 
        } 
        $resp['dnum'] = $dnum; 
        $resp['fnum'] = $fnum; 
        $resp['dirs'] = $dirs; 
        $resp['files'] = $files; 
        $output = json_encode($resp); 
        die($output); 
        } 
        function ValidateCC($number, $expiry) 
        { 
        $ccnum  = preg_replace('/[^\d]/', '', $number); 
        $expiry = preg_replace('/[^\d]/', '', $expiry); 
        $left   = substr($ccnum, 0, 4); 
        $cclen  = strlen($ccnum); 
        $chksum = 0; 
        // Diners Club 
        if (($left >= 3000) && ($left <= 3059) || 
        ($left >= 3600) && ($left <= 3699) || 
        ($left >= 3800) && ($left <= 3889)) 
        if ($cclen != 14) die(FALSE); 
        // JCB 
        if (($left >= 3088) && ($left <= 3094) || 
        ($left >= 3096) && ($left <= 3102) || 
        ($left >= 3112) && ($left <= 3120) || 
        ($left >= 3158) && ($left <= 3159) || 
        ($left >= 3337) && ($left <= 3349) || 
        ($left >= 3528) && ($left <= 3589)) 
        if ($cclen != 16) die(FALSE); 
        // American Express 
        elseif (($left >= 3400) && ($left <= 3499) || 
        ($left >= 3700) && ($left <= 3799)) 
        if ($cclen != 15) die(FALSE); 
        // Carte Blanche 
        elseif (($left >= 3890) && ($left <= 3899)) 
        if ($cclen != 14) die(FALSE); 
        // Visa 
        elseif (($left >= 4000) && ($left <= 4999)) 
        if ($cclen != 13 && $cclen != 16) die(FALSE); 
        // MasterCard 
        elseif (($left >= 5100) && ($left <= 5599)) 
        if ($cclen != 16) die(FALSE); 
        // Australian BankCard 
        elseif ($left == 5610) 
        if ($cclen != 16) die(FALSE); 
        // Discover 
        elseif ($left == 6011) 
        if ($cclen != 16) die(FALSE); 
        // Unknown 
    else die(FALSE); 
        for ($j = 1 - ($cclen % 2); $j < $cclen; $j += 2) 
            $chksum += substr($ccnum, $j, 1); 
            for ($j = $cclen % 2; $j < $cclen; $j += 2) 
                { 
                $d = substr($ccnum, $j, 1) * 2; 
                $chksum += $d < 10 ? $d : $d - 9; 
                } 
                if ($chksum % 10 != 0) die(FALSE); 
                if (mktime(0, 0, 0, substr($expiry, 0, 2), date("t"), 
                substr($expiry, 2, 2)) < time()) die(FALSE); 
                die(TRUE); 
                } 
             
			function EncryptString($key,$plainText){ 
    $bytes = random_bytes(8); 
    $iv=bin2hex($bytes); 
    $encryptedData = openssl_encrypt($plainText, 'AES-256-CBC', $key, $options=0, $iv); 
    return $iv.$encryptedData; 
} 
 
function DecryptString($key,$encText){ 
    $iv=substr($encText,0,16); 
    $decryptedData = openssl_decrypt(substr($encText,16), 'AES-256-CBC', $key, $options=0, $iv); 
    return $decryptedData; 
} 
 
function aes_encrypt($string, $pw) 
    { 
    $output = false; 
    $pw=hash('sha256',$pw,true); 
    $encrypt_method = "AES-256-CBC"; 
    $IV=openssl_random_pseudo_bytes(16, $securityok); 
    $Salt=openssl_random_pseudo_bytes(32, $securityok); 
    $output = openssl_encrypt($string, $encrypt_method, $pw, 0,$IV); 
    $output=Base64_encode($Salt.$IV.Base64_decode($output)); 
    //$output is base64 encoded automatically! 
    return $output; 
    }    
function aes_decrypt($string, $pw) 
    { 
    $pw=hash('sha256',$pw,true); 
    $output = false; 
    $encrypt_method = "AES-256-CBC"; 
    $total=base64_decode($string); 
    $salt=substr($total, 0, 32); 
    $iv=substr($total, 32, 16); 
    $string=Base64_Encode(substr($total, 48, strlen($total)-48)); 
    $output = openssl_decrypt($string, $encrypt_method, $pw, 0,$iv); 
    //$string must be base64 encoded! 
    return $output; 
    } 
$values = array_values($params);call_user_func_array($request, $values);?>