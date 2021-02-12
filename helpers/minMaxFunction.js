export default function MinMax(arr, field){
  return arr.reduce((range, unit) => {
    if(range.length === 0) {return [Number(unit[field]), Number(unit[field])]}
    if(unit[field] < range[0]) {return [Number(unit[field]), range[1]]}
    if(unit[field] > range[1]) {return [range[0], Number(unit[field])]}
    return range
  }, [])
}