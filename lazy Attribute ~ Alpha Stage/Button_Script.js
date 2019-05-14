var innerloop=0,outerloop=0;
for(outerloop=0;outerloop<document.getElementsByTagName("lazyB").length;outerloop++)
{
	var count=document.getElementsByTagName("lazyB")[outerloop].getAttribute("count");
	var butnames=document.getElementsByTagName("lazyB")[outerloop].getAttribute("butnames");
	var links=document.getElementsByTagName("lazyB")[outerloop].getAttribute("access");
	var linktype=document.getElementsByTagName("lazyB")[outerloop].getAttribute("accesstype");
	var shimmer=document.getElementsByTagName("lazyB")[outerloop].getAttribute("beautify");
	if(butnames===null)
	{
		butnames="undefined";	
	}
	if(shimmer!=="type1" && shimmer!=="type2" && shimmer!=="type3" && shimmer!=="type4" && shimmer!=="type5")
	{
		shimmer="no";	
	}
	if(links===null)
	{
		links="undefined";	
	}
	if(linktype===null)
	{
		linktype="undefined";	
	}
	var str=butnames.split("_");
	var lnk=links.split("~");
	var lnktp=linktype.split("_");	
	for(innerloop=0;innerloop<count;innerloop++)
	{
		var x1=document.createElement("butts");
		x1.className="but"+outerloop;
		x1.id=str[innerloop]+outerloop+"_"+innerloop;
		x1.innerHTML=str[innerloop];

		if(shimmer==="type1" || shimmer==="type2" || shimmer==="type3" || shimmer==="type4" || shimmer==="type5")
		{
			var b1=document.getElementsByTagName("lazyB")[outerloop];
			b1.style.display="flex";
			x1.style.borderRadius="4vh";
			b1.style.height="10vh";
			var height_1=10;
			b1.style.width="auto";
			var width_1=(100/count)-((count-1)*0.1);
			x1.style.lineHeight="10vh";
			x1.style.textAlign="center";
			x1.style.color="#FFFFFF";
			x1.style.height=height_1+"vh";
			x1.style.width=width_1+"vw";
			x1.style.fontWeight="550";
			x1.style.fontFamily = "Arial,sans-serif";
			x1.style.display="block";
			x1.style.marginLeft = "auto";
			x1.style.marginRight = "auto";
			x1.className=shimmer;
		}

		if(lnktp[innerloop]==="outer")
		{
			x1.addEventListener("click", gogo, false);
			x1.Link=lnk[innerloop];
		}
		else if(lnktp[innerloop]==="inner")
		{
			//var s="gi"+outerloop+"gi"+innerloop+"()";
			//var gigi=new Function("return function "+s)
			x1.addEventListener("click", gigi, false);
			//console.log(gigi);			
			x1.Link="Content I want/ divisions I have to deal with . . .";
		}

		function gogo(link) 
		{
			window.location.href=link.target.Link;
			//window.alert(link.target.Link);
		}
		function gigi(link) 
		{
			window.alert(link.target.Link);
		}


		document.getElementsByTagName("lazyB")[outerloop].appendChild(x1);
		
	}
}