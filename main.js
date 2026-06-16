let historico = JSON.parse(localStorage.getItem("tmvHistorico")) || [];

function atualizar(){
 let div=document.getElementById("historico");
 div.innerHTML="";
 let somaArea=0,somaValor=0;

 historico.forEach(i=>{
   somaArea+=i.area;
   somaValor+=i.valor;
   div.innerHTML+=`
   <div class="item">
   <strong>${i.local}</strong><br>
   Área: ${i.area.toFixed(2)} m²<br>
   Valor: R$ ${i.valor.toFixed(2)}<br>
   <small>${i.data}</small>
   </div>`;
 });

 if(historico.length===0) div.innerHTML="Nenhum cálculo salvo.";

 document.getElementById("totalArea").innerHTML="Metragem Total: "+somaArea.toFixed(2)+" m²";
 document.getElementById("totalValor").innerHTML="<strong>Valor Total Geral: R$ "+somaValor.toFixed(2)+"</strong>";
}

function calcular(){
 let local=document.getElementById("local").value;
 let largura=parseFloat(document.getElementById("largura").value);
 let comprimento=parseFloat(document.getElementById("comprimento").value);
 let valorMetro=parseFloat(document.getElementById("valorMetro").value);

 if(!local || isNaN(largura)||isNaN(comprimento)||isNaN(valorMetro)){
   alert("Preencha todos os campos do ambiente.");
   return;
 }

 let area=largura*comprimento;
 let valor=area*valorMetro;

 document.getElementById("resultadoArea").innerHTML="Área: "+area.toFixed(2)+" m²";
 document.getElementById("resultadoValor").innerHTML="Valor: R$ "+valor.toFixed(2);

 historico.push({
   local, area, valor,
   data:new Date().toLocaleString("pt-BR")
 });

 localStorage.setItem("tmvHistorico",JSON.stringify(historico));
 atualizar();
}

function resetar(){
 if(confirm("Apagar todo o histórico?")){
   historico=[];
   localStorage.removeItem("tmvHistorico");
   atualizar();
 }
}

atualizar();