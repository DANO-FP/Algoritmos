function mostrar(str){
		var res="";
		var ret;
		var rep;
		var rsp;
		var spl=str.split(" ");
		for (var i=0;i<spl.length;i++)
		{
				rsp=spl[i];
				//console.log(rep);
				ret=spl[i].toUpperCase();
				//console.log(ret);
				rep=spl[i].replace(rsp[0],ret[0]);
				//console.log(rep);
				res=res+" "+rep+" ";
		}
		return res;
}