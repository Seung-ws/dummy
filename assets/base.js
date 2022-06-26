function textCopy(msg){
	if(!msg){		
		return false;
	}
	var $tmp = $('<input>');
    $('body').append($tmp);
    $tmp.val(msg).select();
    document.execCommand('copy');
    $tmp.remove();	
	return true;	
}