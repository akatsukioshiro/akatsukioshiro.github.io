func_count=0;
var x = document.getElementsByTagName("body")[0].childNodes;
var txt,fText;
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
       		x[i].parentNode.removeChild(x[i]);
    	}
}
fText = fText.replace(/\r?\n|\r/g,"");
txt =  fText.split("$");
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
	var withwer="0";
	if(txt[i]!=="")
	{
		var make;
		var line=txt[i].split(" ");
		var check=0;
		for(var j=0;j<line.length;j++)
		{
			switch(line[j])
			{
				case "make":
				{
					check=1;
					make=document.createElement(line[j+1]);
					for(var mk=2;mk<4;mk++)
					{
						if(line[j+mk]!==undefined && line[j+mk]!=="undefined" && line[j+mk]!==null)
						{
							var chk=line[j+mk].split("=");
							if(chk[0]==="id")make.id=chk[1];
							else if(chk[0]==="class")make.className=chk[1];
						}	
					
					}
					break;
				}
			
				case "of":
				{
					var dimensions=line[j+1].split("*");
					make.style.height=dimensions[0];
					make.style.width=dimensions[1];
					break;
				}
				case "in":
				{		
					tgnm=line[j+1];
					break;
				}
				case "with":
				{
					check=2;withwer="1";
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
										var cross=chk[0].split("*");
										if(chk[0]==="id")w.id=chk[1];
										else if(chk[0]==="class")w.className=chk[1];
										else if(cross[1]!==null)
										{	
											w.style.height=cross[0];
											w.style.width=cross[1];
										}
									}	
								}
							}
						}
						document.getElementsByTagName(make.nodeName.toLowerCase())[0].appendChild(w);
					}
					break;	
				}
				case "remake":
				{
					if(line[j+2]==="having" && line[j+4]==="adding")
					{
						var iname=line[j+1];
						var iid=line[j+3].split("=");
						var mxx=document.getElementsByTagName(iname).length;
						for(var run=0;run<mxx;run++)
						{
							if(document.getElementsByTagName(iname)[run].id===iid[1])
							{
								var selected=document.getElementsByTagName(iname)[run];
								var toaddname=line[j+5].split("=");
								var toaddcontent=toaddname[1].split("|");
								for(var loc=j+6;loc<line.length;loc++)
								{
									toaddcontent[1]=toaddcontent[1]+" "+line[loc];
								}
								//toaddname[0] will have text
								//toaddcontent[1] will have textcontent
								switch(toaddname[0])
								{
									case "text":
									{
										selected.innerHTML=toaddcontent[1];
										break;	
									}
									case "image":
									{
										selected.style.backgroundImage = "url('"+toaddcontent[1]+"')"; 	
										selected.style.backgroundSize = "cover";
										break;	
									}									
								}
							}
						}
	
					}
					break;
				}
				case "where":
				{	
					if(withwer==="0")document.getElementsByTagName(tgnm)[0].appendChild(make);
					var dowill="0";
					do
					{
						if(dowill==="1")j=j+4;
						if(line[j+2]==="is" || line[j+2]==="are")
						{
							if(line[j+3]==="clickable")
							{
								if(line[j+1]==="all")
								{
									if(withwer==="1")
									{
										var divs=document.getElementsByTagName(make.nodeName.toLowerCase())[0].children;	
									}
									else if(withwer==="0")
									{
										var divs;
										divs[0]=make.nodeName.toLowerCase();
										
									}
									
								}
								else
								{
									if(withwer==="1")
									{
										var divs=line[j+1].split(",");	
									}
									else if(withwer==="0")
									{
										var divs;
										divs[0]=line[j+1];
										
									}
									
								}
								if(withwer==="1")
								{
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
								else if(withwer==="0")
								{
									a=divs[0];
									var butt=document.getElementsByTagName(a)[0];
									butt.innerHTML=a;
									butt.addEventListener("click", funcs[func_count], false);
									func_count++;
								}
								
							}
							else if(line[j+3]==="draggable")
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
									if(line[j+1]==="all")var a=divs[0].tagName.toLowerCase();//divs[wit]
									else a=divs[0];//divs[wit]
									var boxes = document.createElement(a+wit);
									var makenodenmlc=make.nodeName.toLowerCase();
									var content=document.getElementsByTagName(a)[0];
									content.onclick = calldrag(boxes,content,makenodenmlc);
								}
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
						
						if(line[j+4] ==="and")dowill="1";
						else dowill="0";
					}
					while(dowill==="1");	
					break;check==="2";	
				}
			}
			
		}
		if(check===1)document.getElementsByTagName(tgnm)[0].appendChild(make);
		tgnm="box";	
	}
}
//===================================================
function dragElement(elmnt) 
{
	var pos1, pos2, pos3, pos4;
	if (document.getElementById(elmnt.id)) 
	{
		document.getElementById(elmnt.id).onmousedown = dragMouseDown;
	} 
	else 
	{
		elmnt.onmousedown = dragMouseDown;
	}
	function dragMouseDown(e) 
	{
		if(elmnt.style.zIndex===null || elmnt.style.zIndex<=0 || elmnt.style.zIndex>=999)
		{
			elmnt.style.zIndex=0;
		}
		elmnt.style.zIndex +=5;
		e = e || window.event;
		e.preventDefault();
	    	pos3 = e.clientX;
    		pos4 = e.clientY;
    		document.onmouseup = closeDragElement;
    		document.onmousemove = elementDrag;
  	}
	function elementDrag(e) 
	{
    		e = e || window.event;
		e.preventDefault();
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	}
	function closeDragElement() 
	{
		elmnt.style.zIndex -=4;
		document.onmouseup = null;
		document.onmousemove = null;
		elmnt.position = "static";
	}
}
function calldrag(boxes,content,makenodenmlc)
{
	boxes.style.display="inline-block";//inline
	boxes.style.cssFloat="Left";
	boxes.style.marginLeft="auto";boxes.style.marginRight="auto";
	content.style.cssFloat="none";content.style.cssFloat="none";
	document.getElementsByTagName(makenodenmlc)[0].appendChild(boxes);
	var child=document.adoptNode(content);
	boxes.appendChild(child);
	boxes.style.height=content.style.height;boxes.style.width=content.style.width;
	content.style.position="absolute";
	boxes.style.marginTop=0;
	boxes.style.marginLeft=0;
	content.style.marginTop=0;
	content.style.marginLeft=0;
	dragElement(content);
}
//===================================================

function first_function(){alert("hi 1");}
function second_function(){alert("hi 2");}
function third_function(){alert("hi 3");}
function forth_function(){alert("hi 4");}
function fifth_function(){alert("hi 5");}
function sixth_function(){alert("hi 6");}