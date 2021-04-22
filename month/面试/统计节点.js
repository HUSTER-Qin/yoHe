class Ele {
    constructor(ele) {
      this.ele = ele;
      this.depthNum = 1;
    }
    // 获取当前节点的元素深度
    getEleDepth() {
      let parentNode = this.ele.parentNode;
      if (parentNode !== document) {
        this.depthNum++;
        this.ele = parentNode;
        return this.getEleDepth();
      } else {
        return this.depthNum;
      }
    }
    // 获取当前节点的子元素个数
    getEleSubNum() {
      let childNodes = this.ele.childNodes;
      let childNum = 0;
      for (let i = 0; i < childNodes.length; i++) {
        if (childNodes[i].nodeType == 1) {
          childNum++;
        }
      }
      return childNum;
    }
  }


  function domInfo(dom) {
    let totalElementsCount = 0; // 最大子元素个数
    totalElementsCount = dom.length; //dom中的所有节点数量
    let eleDepthArr = [];
    let eleSubArr = [];
    for (let i = 0; i < totalElements.length; i++) {
      eleDepthArr.push(new Ele(totalElements[i]).getEleDepth());
      eleSubArr.push(new Ele(totalElements[i]).getEleSubNum());
    }
    eleDepthArr = eleDepthArr.sort((a, b) => b - a); // 最大嵌套深度
    eleSubArr = eleSubArr.sort((a, b) => b - a); // 最大子元素个数
    return {
      totalElementsCount:totalElementsCount,
      maxDOMTreeDepth:eleDepthArr[0],
      maxChildrenCount:eleSubArr[0]
    }
  }
  const totalElements = document.getElementsByTagName('*');
  let obj = domInfo(totalElements)
  console.log(obj);