var deftypes=["navbar","sidepane"];// custom attribute list //
document.body.style.margin="0";
for(var b=0;b<deftypes.length;b++)
{
var def = document.querySelectorAll('[def="'+deftypes[b]+'"]');
if(def[0]!==undefined)
{
//alert(def[0]);
if(def.length<=1 && deftypes[b]==="navbar")
{
	var x = def[0];
	x.style.height="100vh";
	x.style.width="100vw";
	x.style.display="block";
	x.style.backgroundColor="green";	
	var x1=document.createElement("navibar");
	x1.style.height="10vh";
	x1.style.width="100vw";
	x1.style.display="block";
	x1.style.backgroundColor="red";
	var tnm=x.tagName.toLowerCase();
	var tgtnm=document.getElementsByTagName(tnm)[0];
	document.getElementsByTagName(tnm)[0].appendChild(x1);
	//alert(tgtnm.children[2].tagName);
	for (var i = 0; i < tgtnm.children.length; i++) 
	{
	var tagpos=tgtnm.children[0].getAttribute("pos");
	////alert(tagpos);
	if(tagpos!=="navibar")
	////alert("in");
	////alert(tagpos);
	var content=document.querySelectorAll('[pos="'+tagpos+'"]')[0];
	var child=document.adoptNode(content);
	x1.appendChild(child);
	////alert(child.tagName);	
	}
	var tgnm=x1.tagName.toLowerCase();
	var tg=document.getElementsByTagName(tgnm)[0];
	//alert(tg.children[0].nodeName);
	for (var i = 0; i < tg.children.length; i++) 
	{	
		var chn=tg.children[i].getAttribute("pos");
		if(tg.children[i].nodeName!=="LAZYB")
		document.querySelectorAll('[pos="'+chn+'"]')[0].style.cssFloat="left";

  	}
}
if(def.length<=1 && deftypes[b]==="sidepane")
{
	if(document.getElementsByTagName("navibar")[0]!==null)
	{
		var x=def[0];
		var child=document.adoptNode(x);
		var divtotal=document.querySelectorAll('[def="navbar"]')[0];
		divtotal.appendChild(child);
		var ht=100;
		divtotal.style.position="fixed";
		x.style.position="absolute";
		x.style.height="100%";
		x.style.width="15vw";
		x.style.display="inline-block";	
		x.style.backgroundColor="red";
		x.style.cssFloat="left";
		//alert(x.offsetTop);		
	}
}
}
}