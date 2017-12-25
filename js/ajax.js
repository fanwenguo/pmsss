var $ = {
	ajax:function(obj){
		var defaults = {
			async:true,
			method:'get',
			data:""
		}
		var ops = Object.assign({},defaults,obj);
		//{name:""zs",age":"18}  name=zs&age=18
		var data = typeof ops.data === 'string' ? ops.data : this.setOptions(ops.data);

		var xhr = null;
		if(window.XMLHttpRequest){
			xhr = new XMLHttpRequest();
		}else{
			xhr = new AcrtiveXObject('Microsoft.XMLHTTP');
		}
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4){
				if(xhr.status === 200){
					ops.success(xhr.responseText);
				}
			}
		}
		if(ops.method === 'get'){
			xhr.open(ops.method,ops.url+'?'+data,ops.async);
			xhr.send(null);
		}else{
			xhr.open(ops.method,ops.url.async);
			xhr.setRequestHeader('content-type',"application/x-www-form-urlencoded");
			xhr.send(data);
		}

	},
	setOptions:function(a){
		var str = "";
		for(var key in a){
			str += key + '=' + a[key] + '&';
		}
		return str.replace(/&$/,"");
	}
}