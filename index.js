let entrada = require("readline-sync")

function registrarPedido(pendentes){
    var data = new Date()
    let cliente = {
         numeropedido: Math.floor(Math.random() * 1000),
         nome : entrada.question("informe seu nome: "),
         fone : entrada.question("informe seu telefone: "),
         descricao : entrada.question("digite a descricao do seu pedido: "),
         data : {
             dia: `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`
         },
         
        hora:`${data.getHours()}:${data.getMinutes()}`, 
        previsaochegada:`${data.getHours()}:${data.getMinutes()+20}`+ " ate " + `${data.getHours()}:${data.getMinutes()+30}`, 
        Atendido : false,
    } 
     pendentes.push(cliente)
  
 }
 
 function buscar_pedido(pendentes,atendidos){
    let usuario = entrada.question("digite o nome do usuario do pedido: ")
  
    for(let i = 0; i<pendentes.length;i++) {
        if(usuario === pendentes[i].nome) {
            console.log(pendentes[i])
        }
        let atendidoSimOuNao = parseInt(entrada.question("Pedido atendido? (1)sim (2)nao: "))
        if(atendidoSimOuNao === 1) {
            pendentes[i].atendido = true
            atendidos.push(pendentes[i])           
            pendentes.splice(i,1)
            
        }else if(atendidoSimOuNao === 2) {
            console.log(`seu pedido logo sera atendido`)
        }
    }
   }

function Listarpendentes(pendentes){
    for(var i = 0; i < pendentes.length; i++){
        console.log('Usuário:', i +1 )
        console.log(pendentes[i])
        
    } 
}

function listaratendidos(atendidos){
    for(var i = 0; i < atendidos.length; i++){
        console.log('Usuário:', i +1 )
        console.log(atendidos[i])
        
    } 
}

 
 
 function main(){
     
    var pedidosatendidos = []
    var pedidospendentes = []
    
   
     while(true){
         let opcao = entrada.question("digite 1-para registrar pedido, 2-para buscar pedido, 3-para pedidos pendentes, 4-para pedidos atendidos: ")
         if(opcao == 1){
             registrarPedido(pedidospendentes)
             
         }else if(opcao == 2){
           buscar_pedido(pedidospendentes, pedidosatendidos)
            
         }else if(opcao == 3){
           Listarpendentes(pedidospendentes)
         }else if(opcao == 4){
            listaratendidos(pedidosatendidos)
         }else{
            console.log('opcao invalida')
         }
     }
 }
  
 main();      