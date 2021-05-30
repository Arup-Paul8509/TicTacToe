var elem="X"
			function change()
			{
				if(elem=="X")
					elem="0";
				else if(elem=="0")
					elem="X";
			}
			function change1()
			{
				document.getElementById("id01").innerHTML=elem;
				change();
				document.getElementById("id01").onclick=null;
			}
			function change2()
			{
				document.getElementById("id02").innerHTML=elem;
				change();
				document.getElementById("id02").onclick=null;
			}
			function change3()
			{
				document.getElementById("id03").innerHTML=elem;
				change();
				document.getElementById("id03").onclick=null;
			}
			function change4()
			{
				document.getElementById("id04").innerHTML=elem;
				change();
				document.getElementById("id04").onclick=null;
			}
			function change5()
			{
				document.getElementById("id05").innerHTML=elem;
				change();
				document.getElementById("id05").onclick=null;
			}
			function change6()
			{
				document.getElementById("id06").innerHTML=elem;
				change();
				document.getElementById("id06").onclick=null;
			}
			function change7()
			{
				document.getElementById("id07").innerHTML=elem;
				change();
				document.getElementById("id07").onclick=null;
			}
			function change8()
			{
				document.getElementById("id08").innerHTML=elem;
				change();
				document.getElementById("id08").onclick=null;
			}
			function change9()
			{
				document.getElementById("id09").innerHTML=elem;
				change();
				document.getElementById("id09").onclick=null;
			}
			function checkResult()
			{
				var b1=document.getElementById("id01").innerHTML;
				var b2=document.getElementById("id02").innerHTML;
				var b3=document.getElementById("id03").innerHTML;
				var b4=document.getElementById("id04").innerHTML;
				var b5=document.getElementById("id05").innerHTML;
				var b6=document.getElementById("id06").innerHTML;
				var b7=document.getElementById("id07").innerHTML;
				var b8=document.getElementById("id08").innerHTML;
				var b9=document.getElementById("id09").innerHTML;
				
				if(b1==b2&&b2==b3&&b3==b1&&b1!=""&&b2!=""&&b3!="")
				{
					alert(b1+" wins");
					location.reload();
				}
				else if(b4==b5&&b5==b6&&b6==b4&&b6!=""&&b4!=""&&b5!="")
				{
					alert(b3+" wins");
					location.reload();
				}
				else if(b7==b8&&b8==b9&&b9==b7&&b7!=""&&b8!=""&&b9!="")
				{
					alert(b3+" wins");
					location.reload();
				}
				else if(b1==b4&&b4==b7&&b7==b1&&b1!=""&&b4!=""&&b7!="")
				{
					alert(b1+" wins");
					location.reload();
				}
				else if(b2==b5&&b5==b8&&b8==b2&&b2!=""&&b5!=""&&b8!="")
				{
					alert(b2+" wins");
					location.reload();
				}
				else if(b3==b6&&b6==b9&&b9==b3&&b3!=""&&b6!=""&&b9!="")
				{
					alert(b3+" wins");
					location.reload();
				}
				else if(b1==b5&&b5==b9&&b9==b1&&b1!=""&&b5!=""&&b9!="")
				{
					alert(b1+" wins");
					location.reload();
				}
				else if(b3==b5&&b5==b7&&b7==b3&&b7!=""&&b5!=""&&b3!="")
				{
					alert(b3+" wins");
					location.reload();
				}
				if(b1!=""&&b2!=""&&b3!=""&&b4!=""&&b5!=""&&b6!=""&&b7!=""&&b8!=""&&b9!="")
				{
					alert("Draw");
					location.reload();
				}
			}