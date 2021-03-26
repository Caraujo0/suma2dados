    //programa 1.- Lanzar un dado 2 veces y sumar las caras que cayeron, repetir esto 100 veces y mostrar al final cuantas veces cayó cada posible valor de la suma.
let array=[ 0,0,0,0,0,0];
function dado(){
let x= Math.floor((Math.random()*6) +1);
  return x;
}
for(let a=0; a<100; a++){
  let x=dado();
  array[x-1]+=1;}

for(let a=0; a<6; a++)
document.write(' El numero '+ (1+a) +' cayo ' + array[a]+ ' veces ' + '<br>' );
  
  