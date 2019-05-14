var x = document.getElementsByTagName("body")[0].childNodes;
var txt,fText,res;
for(var i = 0; i < x.length; i++) 
{
	if (x[i].nodeName === "#text") 
	{
        	fText = x[i].nodeValue;
	}
}
txt = fText.split(/\r?\n|\r/g);
for(var i = 0; i < x.length; i++) 
{
	if (x[i].nodeName === "#text") 
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
    forth_function
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
				make.style.display="block";
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
				document.getElementsByTagName(tgnm)[0].appendChild(make);
				//alert(make.nodeName.toLowerCase());
				for(var wit=(j+1);wit<line.length;wit++)
				{
					var w=document.createElement(line[wit]);
					document.getElementsByTagName(make.nodeName.toLowerCase())[0].appendChild(w);
				}	
			}
			if(line[j]==="buttons")
			{
				if(line[j+1]==="are")
				{
					var butts=line[j+2].split(",");
					for(var b=0;b<butts.length;b++)
					{
						var butt=document.createElement(butts[b]);
						butt.innerHTML=butts[b];
						butt.addEventListener("click", funcs[b], false);
						butt.className="buttons";
						document.getElementsByTagName("buttons")[0].appendChild(butt);
					}
				}
			}
		}
		if(check===1)document.getElementsByTagName(tgnm)[0].appendChild(make);	
	}
}
function first_function(){alert("hi 1");}
function second_function(){alert("hi 2");}
function third_function(){alert("hi 3");}
function forth_function(){alert("hi 4");}