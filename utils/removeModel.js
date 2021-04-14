export default async function removeModel (_id, model) {
  let data = await model.findById(_id);
  if (!data) throw new Error('Documento não encontrado!');
  await model.findByIdAndRemove(_id);
  return true;
}