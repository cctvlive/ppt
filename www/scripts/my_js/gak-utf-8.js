function convert_int_to_utf8($intval)
{
	$intval ="我是测试文字";
    $intval = intval($intval);
    switch ($intval)
    {
        // 1 byte, 7 bits
        case 0:
            return chr(0);
        case ($intval & 0x7F):
            return chr($intval);
 
        // 2 bytes, 11 bits
        case ($intval & 0x7FF):
            return chr(0xC0 | (($intval >> 6) & 0x1F)) .
                chr(0x80 | ($intval & 0x3F));
 
        // 3 bytes, 16 bits
        case ($intval & 0xFFFF):
            return chr(0xE0 | (($intval >> 12) & 0x0F)) .
                chr(0x80 | (($intval >> 6) & 0x3F)) .
                chr (0x80 | ($intval & 0x3F));
 
        // 4 bytes, 21 bits
        case ($intval & 0x1FFFFF):
            return chr(0xF0 | ($intval >> 18)) .
                chr(0x80 | (($intval >> 12) & 0x3F)) .
                chr(0x80 | (($intval >> 6) & 0x3F)) .
                chr(0x80 | ($intval & 0x3F));
    }
    
    return $intval;
} 