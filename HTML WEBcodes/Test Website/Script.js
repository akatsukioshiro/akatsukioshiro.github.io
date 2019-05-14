func_count=0;
var x = document.getElementsByTagName("body")[0].childNodes;
var txt,fText,res,gText;
for(var i = 0; i < x.length; i++) 
{
	if (x[i].nodeName === "#text") 
	{
        	fText = x[i].nodeValue;
	}
}
for(var i = 0; i < x.length; i++) 
{
	if (x[i].nodeName === "#text") 
	{
       		//alert(x[i].nodeValue);
		x[i].parentNode.removeChild(x[i]);
    	}
}
for(var i = 0; i < x.length; i++) 
{
	if (x[i].nodeName === "DATA")
	{
		var y=document.getElementsByTagName(x[i].nodeName.toLowerCase())[0].childNodes;
		for(var i = 0; i < y.length; i++) 
		{
			if (y[i].nodeName === "#text") 
			{
        			gText = y[i].nodeValue;
			}
		}
	}
}
txt = fText.split(/\r?\n|\r/g);
for(var i = 0; i < x.length; i++) 
{
	if (x[i].nodeName === "DATA")
	{
		x[i].parentNode.removeChild(x[i]);
	}
}
document.body.style.margin="0";
var box=document.createElement("box");
box.style.height="100vh";
box.style.width="100vw";
box.style.display="block";
document.body.appendChild(box);
var tgnm="box";
var funcs = [
    first_function,
    second_function,
    third_function,
    forth_function,
    fifth_function,
    sixth_function
]
for(var i=0;i<txt.length;i++)
{
	if(txt[i]!=="")
	{
		var make;
		var line=txt[i].split(" ");
		var check=0;
		for(var j=0;j<line.length;j++)
		{
			if(line[j]==="make")
			{
				check=1;
				make=document.createElement(line[j+1]);
				//make.style.display="block";
				for(var mk=2;mk<4;mk++)
				{
					if(line[j+mk]!==undefined && line[j+mk]!=="undefined" && line[j+mk]!==null)
					{
						var chk=line[j+mk].split("=");
						if(chk[0]==="id")make.id=chk[1];
						else if(chk[0]==="class")make.className=chk[1];
					}	
					
				}
			}
			
			if(line[j]==="of")
			{
				var dimensions=line[j+1].split("*");
				make.style.height=dimensions[0];
				make.style.width=dimensions[1];
			}
			if(line[j]==="in")tgnm=line[j+1];
			if(line[j]==="with")
			{
				check=2;
				//alert(tgnm);
				//alert(make.nodeName.toLowerCase());
				document.getElementsByTagName(tgnm)[0].appendChild(make);
				
				for(var iwit=(j+1);iwit<line.length;iwit++)
				{
					if(line[iwit]==="where")break;
					var ic=line[iwit].split("(");
					var w=document.createElement(ic[0]);
					if(ic[1]!==undefined)
					{
						var ic2=ic[1].split(")");
						var ic3=ic2[0].split(";")
						if(ic2[1]==="")
						{	
							for(var mk=0;mk<(ic3.length)-1;mk++)
							{
								if(ic3[mk]!==undefined && ic3[mk]!=="undefined" && ic3[mk]!==null)
								{
									var chk=ic3[mk].split("=");
									if(chk[0]==="id")w.id=chk[1];
									else if(chk[0]==="class")w.className=chk[1];
								}	
							}
						}
					}
					document.getElementsByTagName(make.nodeName.toLowerCase())[0].appendChild(w);
				}	
			}
			if(line[j]==="where")
			{
				if((line[j+2]==="is" || line[j+2]==="are")&&(line[j+3]==="clickable"))
				{
					if(line[j+1]==="all")
					{
						var divs=document.getElementsByTagName(make.nodeName.toLowerCase())[0].children;	
					}
					else
					{
						var divs=line[j+1].split(",");
					}
					for(var wit=0;wit<divs.length;wit++)
					{
						if(line[j+1]==="all")var a=divs[wit].tagName.toLowerCase();
						else a=divs[wit];
						var butt=document.getElementsByTagName(a)[0];
						butt.innerHTML=a;
						butt.addEventListener("click", funcs[func_count], false);
						func_count++;
					}
				}
				if((line[j+2]==="takes" || line[j+2]==="take")&&(line[j+3]==="input"))
				{
					if(line[j+1]==="all")
					{
						var divs=document.getElementsByTagName(make.nodeName.toLowerCase())[0].children;	
					}
					else
					{
						var divs=line[j+1].split(",");
					}
					for(var wit=0;wit<divs.length;wit++)
					{
						if(line[j+1]==="all")var a=divs[wit].tagName.toLowerCase();
						else a=divs[wit];
						var ce=document.getElementsByTagName(a)[0];
						ce.style.outline="thin solid grey";
						ce.setAttribute("contenteditable","true");
					}	
				}
				if(line[j+4] ==="and")
				{
					j=j+4;
					if((line[j+2]==="is" || line[j+2]==="are")&&(line[j+3]==="clickable"))
					{
						if(line[j+1]==="all")
						{
							var divs=document.getElementsByTagName(make.nodeName.toLowerCase())[0].children;	
						}
						else
						{
							var divs=line[j+1].split(",");
						}
						for(var wit=0;wit<divs.length;wit++)
						{
							if(line[j+1]==="all")var a=divs[wit].tagName.toLowerCase();
							else a=divs[wit];
							var butt=document.getElementsByTagName(a)[0];
							butt.innerHTML=a;
							butt.addEventListener("click", funcs[func_count], false);
							func_count++;
						}
					}
					if((line[j+2]==="takes" || line[j+2]==="take")&&(line[j+3]==="input"))
					{
						if(line[j+1]==="all")
						{
							var divs=document.getElementsByTagName(make.nodeName.toLowerCase())[0].children;	
						}
						else
						{
							var divs=line[j+1].split(",");
						}
						for(var wit=0;wit<divs.length;wit++)
						{
							if(line[j+1]==="all")var a=divs[wit].tagName.toLowerCase();
							else a=divs[wit];
							var ce=document.getElementsByTagName(a)[0];
							ce.style.outline="thin solid grey";
							ce.setAttribute("contenteditable","true");
						}	
					}
				}
				
				
			}
			
			
		}
		if(check===1)document.getElementsByTagName(tgnm)[0].appendChild(make);
		tgnm="box";	
	}
}
//===================================================
if(gText!==undefined && gText!==null)
{
	var data=gText.split("|");

	for(var t=0;t<data.length;t++)
	{
		var TagNM=data[t].split("(");
		if(TagNM[1]!==undefined && TagNM[1]!==null)
		{
			var TagID1=TagNM[1].split(";");
			var TagID=TagID1[0].split("=");
			var TagCN1=TagID1[1].split("{");
			var TagCNM=TagCN1[1].split("}");
			TagCNM[0]=TagCNM[0].replace(/\r?\n|\r/g, " ");
			var temp=TagNM[0];
			dataline(temp,TagID[1],TagCNM[0]);
		}
	}
}
function dataline(name,id,dataline)
{
	name=name.trim();
	id=id.trim();
	dataline=dataline.trim();
	var mx=document.getElementsByTagName(name).length;
	for(var run=0;run<mx;run++)
	{
		if(document.getElementsByTagName(name)[run].id===id)
		{
			document.getElementsByTagName(name)[run].innerHTML=dataline;
		}
	}
}
//===================================================

function first_function(){alert("hi 1");}
function second_function(){alert("hi 2");}
function third_function(){alert("hi 3");}
function forth_function(){alert("hi 4");}
function fifth_function(){alert("hi 5");}
function sixth_function(){alert("hi 6");}