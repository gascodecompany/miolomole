export default function arrayToStringFormatter(array) {
  return `${array.slice(0, array.length - 1).join(', ')} e ${array[array.length-1]}`
}