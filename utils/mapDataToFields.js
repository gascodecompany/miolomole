import arrayToStringFormatter from './arrayToStringFormatter'

function getDataValue({ newFields, field, data }) {
  if(Array.isArray(data[field])) { 
    if( data[field].length > 1) { newFields[field].value = arrayToStringFormatter(data[field]) }
    else { newFields[field].value = [data[field][0]] }
  } else { newFields[field].value = data[field] || newFields[field]?.value }
}

function getDataSelectValue({ newFields, field, data, constant }) {
  newFields[field].value = data[field] ? { label: data[field]?.label || data[field]?.name || data[field]?.legalName || data[field]?._id || data[field].title || constant?.options?.find(({value}) => value == data[field]).label || data[field], value: data[field]._id || data[field] } : ''
}

function getDataMultiValue({ newFields, field, data }) {
  newFields[field].value = data[field]
    .filter((item) => !!item)
    .map((item) => item._id || item.label || item) || newFields[field].value
}

function getDataSelectObjectMultiValue({ newFields, field, data }) {
  newFields[field].value = data[field]
    .filter((item) => !!item)
    .map((item) => ({ label: item.userFullName || item.label, value: item._id , _id: item._id }))
}

function getDataSelectMultiValue({ newFields, field, data }) {
  newFields[field].value = data[field]
    .filter((item) => !!item)
    .map((item) => ({ ...item, label: item.label || item.name || item.userFullName || item.title || item._id || item, value: item._id || item })) || newFields[field].value
}

export default function mapDataToFields({ newFields, constantFields, data }) {
  if(data) {
    for (const field in newFields) {
      switch (constantFields[field]?.type) {
        case "select":
          getDataSelectValue({ newFields, field, data, constant: constantFields[field] })
          break;
        case "selectMulti":
          getDataSelectMultiValue({ newFields, field, data })
          break;
        case "selectObjectMulti":
          getDataSelectObjectMultiValue({ newFields, field, data })
          break;
        case "switchMulti":
          getDataMultiValue({ newFields, field, data })
          break;
        default:
          getDataValue({ newFields, field, data })
          break;
        }
      }
  }
  return newFields;
}
