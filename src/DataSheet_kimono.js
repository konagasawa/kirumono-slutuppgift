import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_kimono extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;

    // The contents of this data sheet will be loaded by plugin 'Firebase (Cloud Firestore)'.
    
    item = {};
    this.items.push(item);
    item['kimonoPrice'] = "1500";
    item['kimonoDescription'] = "It is good to wear spring/summer season.";
    item['document_key'] = "Irvx1XUwRsW1TI5JVfdJ";
    item['kimonoImage'] = "https://firebasestorage.googleapis.com/v0/b/kirumono-app-1555251317938.appspot.com/o/kimono%2Fitem_1.JPG?alt=media&token=7545d4cd-d193-4f60-8215-58d41b75219c";
    item['kimonoName'] = "Inner top";
    item['kimonoCategory'] = "top_inner";
    item['kimonoType'] = "Spring/Summer";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['kimonoPrice'] = "2000";
    item['kimonoDescription'] = "This is a standard type of kimono. It is designed to wear any occasions.";
    item['document_key'] = "SXT9Ta4BuTpIJ8q30Z37";
    item['kimonoImage'] = "https://firebasestorage.googleapis.com/v0/b/kirumono-app-1555251317938.appspot.com/o/kimono%2Fitem_2.JPG?alt=media&token=7971ec77-5038-4c35-befc-fcbdbcde9ad5";
    item['kimonoName'] = "Outer Top";
    item['kimonoCategory'] = "top_outer";
    item['kimonoType'] = "all_seasons";
    item.key = key++;
  }

  
  // this function's implementation is provided by React Studio.
  _fetchComplete = (err, options) => {
    if (err) {
      console.log('** Web service write failed: ', err, options);
    } else {
      if (this.updateCb) this.updateCb(this);
    }
  }
  
  
  addItem(item, options) {
    console.log("add to firebase: ", item);
      
    const db = this.firebase.firestore();
    const collection = db.collection(options.servicePath);
      
    collection.add(item)
      .then((docRef) => {
        console.log("Firebase document added with id: ", docRef.id);
        item.document_key = docRef.id;
        //super.addItem(item, options);
      
        this._fetchComplete(null, options);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        this._fetchComplete(error, options);
      });
  }
  
  removeItem(item, options) {
    //super.removeItem(item, options);
    
    console.log("delete from firebase: ", item);
  
    const db = this.firebase.firestore();
    const collection = db.collection(options.servicePath);
    const docRef = collection.doc(item.document_key);
    
    docRef.delete()
      .then(() => {
        this._fetchComplete(null, options);
      })
      .catch((error) => {
        console.error("Error deleting document: ", error);
        this._fetchComplete(error, options);    
      });
  }
  
  replaceItemByRowIndex(idx, item, options) {
    //super.replaceItemByRowIndex(idx, item, options);
    
    console.log("update in firebase: ", item);
  
    const db = this.firebase.firestore();
    const collection = db.collection(options.servicePath);
    const docRef = collection.doc(item.document_key);
    
    docRef.update(item)
      .then(() => {
        this._fetchComplete(null, options);
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
        this._fetchComplete(error, options);    
      });
  }
  

}
