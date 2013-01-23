// q1 : Dê console.log() nos valores que são avaliados para false

var q1Var1 = "hello",
    q1Var2 = 0,
    q1Var3 = true,
    q1Var4 = "false",
    q1Var5 = -1,
    q1Var6 = undefined,
    q1Var7 = null,
    q1Var8;

var array = [q1Var1, q1Var2, q1Var3, q1Var4, q1Var5, q1Var6, q1Var7, q1Var8];

for(var i = 0; i < array.length; i++){
  if(!array[i]){
    console.log(array[i]);
    console.log("avaliado para falso");
  }
}
