
import { isFunction, isUndefined } from "../../util/functions/func";



function _traverse(obj) {
  var results = [] 

  obj.layers.length && obj.layers.forEach(it => {
    results.push(..._traverse(it));
  })

  results.push(obj);

  return results; 
}

export class Item {   
  constructor(json = {}) {
    if (json instanceof Item) {
      json = json.toJSON();
    }
    this.json = this.convert({ ...this.getDefaultObject(), ...json });


    this.ref = new Proxy(this, {
      get: (target, key) => { 
        var originMethod = target[key];
        if (isFunction(originMethod)) {
          // method tracking
          return (...args) => {
            return originMethod.apply(target, args);
          };
        } else {
          // getter or json property
          return originMethod || target.json[key];
        }
      },
      set: (target, key, value) => {
        // Dom 객체가 오면 자동으로 입력 해줌
        if (value && value.realVal && isFunction(value.realVal)) {
          value = value.realVal();
        }

        if (this.checkField(key, value)) {
          target.json[key] = value;
        } else {
          throw new Error(`${value} is invalid as ${key} property value.`);
        }

        return true;
      }
    });

    return this.ref; 
  }

  /***********************************
   *
   * override
   *
   **********************************/

  getDefaultTitle() {
    return "Item";
  }

  /**
   * check attribute object
   */
  isAttribute() {
    return false;
  }

  /***********************************
   *
   * getter
   *
   **********************************/

  get title() {
    return this.json.name || this.getDefaultTitle();
  }

  /**
   * get id
   */
  get id() {
    return this.json.id;
  }

  get layers () {
    return this.json.layers; 
  }

  get parent () {
    return this.json.parent;
  }



  is (...itemType) {
    if (!this.json) return false;
    return itemType.indexOf(this.json.itemType) > -1;
  }

  /***********************************
   *
   * action
   *
   **********************************/


  /**
   * when json is loaded, json object is be a new instance
   *
   * @param {*} json
   */
  convert(json) {

    return json;
  }

  /**
   * defence to set invalid key-value
   *
   * @param {*} key
   * @param {*} value
   */
  checkField(key, value) {
    return true;
  }

  toCloneObject () {
    var json = {
      itemType: this.json.itemType,
      type: this.json.type,
      selected: this.json.selected
    }

    return json; 
  }

  /**
   * clone Item
   */
  clone() {

    var ItemClass = this.constructor;


    // 클론을 할 때 꼭 부모 참조를 넘겨줘야 한다. 
    // 그렇지 않으면 screenX, Y 에 대한 값을 계산할 수가 없다. 
    var item =  new ItemClass(this.toCloneObject());
    item.parent =   this.json.parent

    return item; 
  }

  /**
   * set json content
   *
   * @param {object} obj
   */
  reset(obj) {
    if (obj instanceof Item) {
      obj = obj.toJSON();
    }

    this.json = this.convert({ ...this.json, ...obj });
  }

  /**
   * define defaut object for item
   *
   * @param {object} obj
   */
  getDefaultObject(obj = {}) {
    return {
      // id: uuidShort(),
      selected: false,  // 선택 여부 체크 
      type: '',
      itemType: '',
      ...obj
    };
  }



  add (layer) {
    this.json.layers.push(layer);
    layer.parent = this.ref; 
    return layer;
  }

  /**
   * toggle item's attribute
   *
   * @param {*} field
   * @param {*} toggleValue
   */
  toggle(field, toggleValue) {
    if (isUndefined(toggleValue)) {
      this.json[field] = !this.json[field];
    } else {
      this.json[field] = !!toggleValue;
    }
  }

  /**
   * convert to json
   */
  toJSON() {
    return this.json;
  }

  get html () {
    var {elementType, id, layers, itemType} = this.json;

    const tagName = elementType || 'div'

    return `
    <${tagName} class='element-item ${itemType}' data-id="${id}">
      ${layers.map(it => it.html).join('')}
    </${tagName}>
    `
  }

  resize () {}

  copy () {
    this.json.parent.copyItem(this.ref);
  }

  copyItem (childItem) {
     // clone 을 어떻게 해야하나? 

    var child = childItem.clone()  

    child.width.add(10);
    child.width.add(10);

    var layers = this.json.layers;

    var childIndex = -1; 
    for(var i = 0, len = layers.length; i < len; i++) {
      if (layers[i] === childItem) {
        childIndex = i; 
        break;
      }
    }

    if (childIndex > -1) {
      this.json.layers.splice(childIndex, 0, child);
    }
  }

  remove () {
    this.json.parent.removeItem(this.ref);
  }

  removeItem (childItem) {
    var layers = this.json.layers;

    var childIndex = -1; 
    for(var i = 0, len = layers.length; i < len; i++) {
      if (layers[i] === childItem) {
        childIndex = i; 
        break;
      }
    }

    if (childIndex > -1) {
      this.json.layers.splice(childIndex, 1);
    }
  }

  get allLayers () {
    return [..._traverse(this.ref)]
  }
}
