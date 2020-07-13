void main(List<String> args) {
  int num1 = 10;
  String str = num1.toString();
  var num2 = int.parse(str);
  print(str is String);
  print(num2 is int);

  var list = new List();
  list.add('value');
  list.takeWhile((value) => false);

  
}
