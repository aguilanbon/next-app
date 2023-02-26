migrate((db) => {
  const collection = new Collection({
    "id": "nd1lr5v3kgqov5t",
    "created": "2023-02-26 06:17:15.316Z",
    "updated": "2023-02-26 06:17:15.316Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rkeere57",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("nd1lr5v3kgqov5t");

  return dao.deleteCollection(collection);
})
