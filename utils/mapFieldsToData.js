export default function mapFieldsToData(fields) {
  const newFields = Object.values(fields).reduce((obj, item) => {
    if(item.isArray) {
      let value;
      if(item.value.indexOf(' e ') !== -1) { value = item.value.replace(' e ', ', ').split(', ') }
      else { 
        if(item.value.indexOf(', ') !== 1) { value = item.value.split(', ') } 
        else { value = [item.value] }
      }
      return { ...obj, [item.name]: value };
    } else {
      if(item.type === 'select'){
        return { ...obj, [item.name]: item?.value.map((subItem) => subItem.value) }
      }
      else { return { ...obj, [item.name]: item.value } }
    }
  }, {})
  return {...newFields}
}
