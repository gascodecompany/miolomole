export default function urlNameFormatter(string) {
  return string.toLowerCase().normalize("NFD")
    .replace(/[\u0300-\u036f`~!@#$%^&*()_|+\=?;:'",.<>\{\}\[\]\\\/]/gi, '')
    .replace(/(\s)(?=\1)/gi, "")
    .replace(/\s/g, "-")  

}