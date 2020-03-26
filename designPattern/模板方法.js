/**
 * 通过把不变行为 移动到超类 ，去除子类的重复代码
 */
class TestPaper {
  question1 () {
    console.log('题目一：')
  }

  question2 () {
    console.log('题目2：')
  }

  question3 () {
    console.log('题目3：')
  }

  templateMethod () {
    this.question1()
    this.answer1()
  }
}

class APaper extends TestPaper {
  answer1 () {
    console.log('答案：B')
  }
}

class BPaper extends TestPaper {
  answer1 () {
    console.log('答案：X')
  }
}

const stuA = new APaper()
stuA.templateMethod()

const stuB = new BPaper()
stuB.templateMethod()
