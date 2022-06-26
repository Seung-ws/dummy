function textCopy(msg){
	if(!msg){		
		return "Copy failed";
	}
	var $tmp = $('<input>');
    $('body').append($tmp);
    $tmp.val(msg).select();
    document.execCommand('copy');
    $tmp.remove();	
	return "Copied to clipboard";	
}