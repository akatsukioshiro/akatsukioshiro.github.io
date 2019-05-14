var count=document.getElementsByTagName("create").length;
for(var e=0;e<count;e++)
{
	var x = document.getElementsByTagName("create")[0].childNodes;
	var txt,fText,res;
	for(var i = 0; i < x.length; i++) 
	{
    		if (x[i].nodeName === "#text") 
		{
        		fText = x[i].nodeValue;
	    	}
	}
	fText = fText.replace(/\r?\n|\r/g, " ");
	res =fText.split(" ");
	var elem;
	for(var i=0;i<res.length;i++)
		{
			if(res[i]==="create")
			{	
				elem=document.createElement(res[i+1]);
			}
			if(res[i]==="dimensions")
			{
				var hw=res[i+1].split("*");
				elem.style.height=hw[0]+"vh";
				elem.style.width=hw[1]+"vw";
				elem.style.display="block";
			}
			if(res[i]==="color")
			{
				elem.style.backgroundColor=res[i+1];
			}
			if((res.length-i)===1)
			{
				document.body.appendChild(elem);
				var c = document.body.children;
				var ctxt = "";
  				for (var j = 0; j < c.length; j++) 
				{
    					ctxt=c[j].tagName.toLowerCase();
					if(ctxt==="create")
					{
						var dd=document.getElementsByTagName(ctxt)[0];
						dd.parentNode.removeChild(dd);
					}
	  			}
		
			}

		}
}