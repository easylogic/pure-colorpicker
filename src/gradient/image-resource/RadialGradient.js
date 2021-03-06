import { Gradient } from "./Gradient";
import { Position, Length } from "../Length";
import { convertMatches, reverseMatches } from "../../util/functions/parser";
import { isString } from "../../util/functions/func";
import { ColorStep } from "./ColorStep";
const DEFINED_POSITIONS = {
  ["center"]: true,
  ["top"]: true,
  ["left"]: true,
  ["right"]: true,
  ["bottom"]: true
};

export class RadialGradient extends Gradient {
  getDefaultObject(obj = {}) {
    return super.getDefaultObject({
      type: "radial-gradient",
      radialType: "ellipse",
      radialPosition: [Position.CENTER, Position.CENTER],
      ...obj
    }); 
  }

  toCloneObject() {

    var radialPosition = this.json.radialPosition || [Length.percent(50), Length.percent(50)]

    return {
      ...super.toCloneObject(),
      radialType: this.json.radialType || 'ellipse',
      radialPosition: JSON.parse(JSON.stringify(radialPosition))
    }
  }

  isRadial() {
    return true;
  }

  toString() {
    if(this.colorsteps.length === 0) return '';        
    var colorString = this.getColorString();
    var json = this.json;
    var opt = '';
    var radialType = json.radialType;
    var radialPosition = json.radialPosition || ["center", "center"];

    if (DEFINED_POSITIONS[radialPosition]) {
      // noop 
    } else {  
      if (typeof radialPosition === 'string') {
        
      } else {
        radialPosition = radialPosition.map(it => {

          if (typeof it === 'string') {
            return it;
          }

          if (it.isString()) {
            return it.value;
          }
  
          return it.round(1000);
        }).join(' ');
      }

    }


    opt = radialPosition ? `${radialType} at ${radialPosition}` : radialType;

    return `${json.type || "radial-gradient"}(${opt}, ${colorString})`;
  }

  static parse(str) {
    var results = convertMatches(str);
    var radialType = "ellipse";
    var radialPosition = [Position.CENTER, Position.CENTER];
    var colorsteps = [];
    results.str
      .split("(")[1]
      .split(")")[0]
      .split(",")
      .map(it => it.trim())
      .forEach((newValue, index) => {
        if (newValue.includes("@")) {
          // color ??????
          newValue = reverseMatches(newValue, results.matches);

          // ???????????? ColorStep ??? ??????????????????
          // ColorStep ??? ???????????? colorsteps ??? ????????????... ?????????, ?????? ??????
          colorsteps.push(...ColorStep.parse(newValue));
        } else {
          // direction
          if (newValue.includes("at")) {
            // at ??? ????????? radialPosition ??? ?????? ??????
            [radialType, radialPosition] = newValue
              .split("at")
              .map(it => it.trim());
          } else {
            // at ??? ????????? radialPosition ??? center, center ??? ??????
            radialType = newValue;
          }

          if (isString(radialPosition)) {
            var arr = radialPosition.split(' ');
            if (arr.length === 1) {
              var len = Length.parse(arr[0]);

              if (len.isString()) {
                radialPosition = [len.value, len.value];
              } else {
                radialPosition = [len.clone(), len.clone()];
              }
            } else if (arr.length === 2) {
              radialPosition = arr.map(it => {
                var len = Length.parse(it);
                return len.isString() ? len.value : len;
              });
            }
          }
        }
      });

    return new RadialGradient({ radialType, colorsteps });
  }
}
 