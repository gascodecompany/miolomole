export default async function updateModel (args, model) {
  const { _id } = args;
  let data = await model.findById(_id);
  if (!data) throw new Error('Documento não encontrado!');
  let hasChange = Object.keys(args).some(arg => data[arg] !== arg[args] );
  if (hasChange) { for (let arg in args) { data[arg] = args[arg] } };
  return data; 
}