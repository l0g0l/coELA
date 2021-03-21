//Redondeo

function roundup (buy){
    return Math.floor(buy) + 1
   }
   const lastbuy = 7.3
   roundup (lastbuy)
   
   //Porcentaje
   //Calcula donacion y desgrabacion
   
   function percent( income, per){
     let resultado = {
       donacion: 0,
       desgravas: 0
       
     }
   
     resultado.donacion = per/100*income
     if (resultado.donacion <= 150){
       resultado.desgravas = 0.8*resultado.donacion;
       return resultado
     }else {
       resultado.desgravas = 0.8*150 +(resultado.donacion - 150)*0.35
       return resultado
     }
   }
   
   percent(10000, 5)
   // Primer parametro es el dinero sobre el que se aplica el porcentaje (nomina) y el segundo el acelrador de velocidad
   
   // Periodica
   
   
   function percent( cantidad, p){
     let resultado = {
       donacion: 0,
       desgravas: 0
       
     }
     if (p === 'diario') {
       resultado.donacion = cantidad*365
     } else if (p === 'semanal'){
   
       resultado.donacion = cantidad * 52
   
     }else if (p === 'mensual'){
       resultado.donacion = cantidad * 12
     }
     
     if (resultado.donacion <= 150){
       resultado.desgravas = 0.8*resultado.donacion;
       return resultado
     }else {
       resultado.desgravas = 0.8*150 +(resultado.donacion - 150)*0.35
       return resultado
     }
   }
   
   percent(1, 'diario')