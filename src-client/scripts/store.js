export const STORE = {

  _data: {
    chirpPost: [],
    currentNavRoute: '',
    currentUser: {}
  },

  getStoreData: function(){
    return this._data;
  },

  setStore: function(storeProp, storePropVal){
    if (typeof this._data[storeProp] === 'undefined'){
      throw new Error('define data!')
    }
    this._data[storeProp] = storePropVal;

    if (typeof _cb === 'function'){
      this._cb()
    }
  },

  onStoreChange: function(cbFunc){
    this._cb = cbFunc
  }

}
