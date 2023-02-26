migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nd1lr5v3kgqov5t")

  collection.viewRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nd1lr5v3kgqov5t")

  collection.viewRule = "@request.auth.id != \"\""

  return dao.saveCollection(collection)
})
