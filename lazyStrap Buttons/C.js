var innerloop=0,outerloop=0;
for(outerloop=0;outerloop<document.getElementsByTagName("oph_button_type_1").length;outerloop++)
{
	var count=document.getElementsByTagName("oph_button_type_1")[outerloop].getAttribute("count");
	var butnames=document.getElementsByTagName("oph_button_type_1")[outerloop].getAttribute("butnames");
	var links=document.getElementsByTagName("oph_button_type_1")[outerloop].getAttribute("access");
	var linktype=document.getElementsByTagName("oph_button_type_1")[outerloop].getAttribute("accesstype");
	if(butnames===null)
	{
		butnames="undefined";	
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
		x1.innerHTML=str[innerloop];

		if(lnktp[innerloop]==="outer")
		{
			x1.addEventListener("click", gogo, false);
			x1.Link=lnk[innerloop];
		}
		else if(lnktp[innerloop]==="inner")
		{
			x1.addEventListener("click", gigi, false);
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


		document.getElementsByTagName("oph_button_type_1")[outerloop].appendChild(x1);
	}
}