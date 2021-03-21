export default function setColorByBackGround(hexcolor){
  hexcolor = hexcolor.split("");
  var r = parseInt(hexcolor[0]+hexcolor[1],16);
  var g = parseInt(hexcolor[2]+hexcolor[3],16);
  var b = parseInt(hexcolor[4]+hexcolor[5],16);
  var yiq = ((r*299)+(g*587)+(b*114))/1000;
  return (yiq >= 128) ? 'black' : 'white';
}