var ANCESTRY_FILE = "[\n  " + [
  '{"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"}',
  '{"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"}',
  '{"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"}',
  '{"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"}',
  '{"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
  '{"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null}',
  '{"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null}',
  '{"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"}',
  '{"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"}',
  '{"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"}',
  '{"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null}',
  '{"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"}',
  '{"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"}',
  '{"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"}',
  '{"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null}',
  '{"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
  '{"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"}',
  '{"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"}',
  '{"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
  '{"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
  '{"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null}',
  '{"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"}',
  '{"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"}',
  '{"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"}',
  '{"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
  '{"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
  '{"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"}',
  '{"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
  '{"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
  '{"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
  '{"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"}',
  '{"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"}',
  '{"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
  '{"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"}',
  '{"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"}',
  '{"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
  '{"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"}',
  '{"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"}',
  '{"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}'
].join(",\n  ") + "\n]";


//JSON跟一般的object格式一樣,只是更多限制
  //properter name,一定要用" "包起來
  //只能包含基本的資枓,不能引用函數,變數
  //不能加comments

//JSON.stringify將一般的object轉成JSON格式,也就是把name加上""號
//JSON.parse將JSON格式轉成object格式,把""拿掉
  // var string = JSON.stringify({name: "X", born: 1980});
  // console.log(string);
  // // → {"name":"X","born":1980}
  // console.log(string.born)
  // // ->undefined

  // console.log(JSON.parse(string));
  // //->{ name: 'X', born: 1980 } 
  // console.log(JSON.parse(string).born);
  // // → 1980
  
//拿AncestryFile來練習,它是一個JSON格式,先轉成object格式才能用length方法
  var ancestry = JSON.parse(ANCESTRY_FILE);
  //console.log(ancestry.length);  // → 39

//Filter, 找出1924年,小於25歲的人
  function filter(array,test){
    var passed=[];
    for (var i=0;i<array.length;i++){
      if (test(array[i])){
        passed.push(array[i]);
      }
    }
    return passed;
  }
  var result_1=filter(ancestry,function(ancestry_i){
    return ancestry_i.born>=1900 && ancestry_i.born<1925;
  })
  //console.log(result_1);

//Filter是Array預設方法,可以用array.filter(function),
//找出父親是"Carel Haverbeke"的人
    // console.log(ancestry.filter(function(person) {
    //   return person.father == "Carel Haverbeke";
    // })); 
    // // 找到一個
    // //[ { name: 'Carolus Haverbeke',sex: 'm',born: 1832,died: 1905,father: 'Carel Haverbeke',mother: 'Maria van Brussel' } ]

//Map,
//以上找出一個人,但回傳的資料落落長,我只想知道他叫什麼名字
  function map(array, transform) {
    var mapped = [];
    for (var i = 0; i < array.length; i++)
      mapped.push(transform(array[i]));
    return mapped;
  }
  var faterCarelHaverbeke=ancestry.filter(function(person) {
      return person.father == "Carel Haverbeke";
      });
  console.log(map(faterCarelHaverbeke,function(item){
    return item.name;
  }))

//Map是Array預設方法,可以用array.map(function),
//接下來我們來找出90歲以上的人
  var overNinety = ancestry.filter(function(person) {
    return person.died - person.born > 90;
  });
  console.log(overNinety.map(function(item){
    return item.name;
  }))


//reduce, 比較難理解, 可以想成是summarize an array
  function reduce(array, combine, start) {
    var current = start;
    for (var i = 0; i < array.length; i++)
      current = combine(current, array[i]);
    return current;
  }
  console.log(reduce([1, 2, 3, 4], function(cur, arr) {
    return cur + arr;
  }, 0)); // → 10

  //reduce的第二個參數,combine, is always a function with 2 argument.

//reduce是Array預設方法,可以用array.reduce(function(cur,arr),startvalue),
//找出最早出生的人
  var firstborn=ancestry.reduce(function(cur,arr){
    if(arr.born<cur.born) return arr;
    else return cur;
  })
  console.log(firstborn.name);

//找出男人&女人的平均年齡
//**這個例子運用以前教的重要function,很重要
  function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
  }
  function age(p) { return p.died - p.born; }
  function male(p) { return p.sex == "m"; }
  function female(p) { return p.sex == "f"; }
  console.log(average(ancestry.filter(male).map(age)));
  // → 61.67
  console.log(average(ancestry.filter(female).map(age)));
  // → 54.56

//我的名字叫"Philibert Haverbeke"
//我們之前找到最早的人Pauwels van Haverbeke,我們有一樣的姓
//我想知道他是不是我祖先,我有多少他的DNA
//首先,我們先建一個object,以name做為properity name
//byName={name1:{name..}, name2:{name..},....}
  var byName = {};
  ancestry.forEach(function(person) {
    byName[person.name] = person;
  });
  //console.log(byName["Philibert Haverbeke"]);
  // → {name: "Philibert Haverbeke", …}

//關於基因,做一個簡單的假設,Pauwels的下一代只有他一半的基因,
//再下一代再一半,,以此類推
//我們要先做出一個family tree的資料庫
//我們打算做一個函數,如果我們輸入A的名字,它會去找它父母,再去找父母的父母..

  function reduceAncestors(person, f, defaultValue) {
    function valueFor(person) {
      if (person == null){
        console.log('reduceAncestors==null '+defaultValue);
        return defaultValue;//這個例子,defaultValue=0
      }
      else{
        console.log('reduceAncestors==return '+person.name+',mother:'+person.mother
          +',father:'+person.father);
        return f(person, valueFor(byName[person.mother]),valueFor(byName[person.father]));
        //我們打算輸入的f函數,有3個參數
      }
    }
    console.log("value:"+ valueFor(person))
    return valueFor(person);
  }
  function sharedDNA(person, fromMother, fromFather) {
    if (person.name == "Pauwels van Haverbeke"){ 
      console.log("Pauwels van Haverbeke");
      return 1;}//這是最早的人,所以DNA=1
    else
      line+=1;
      console.log(line +" fromMother:"+ fromMother+",fromFather:"+fromFather);
      return (fromMother + fromFather) / 2;
  }
  var line=0;
  var ph = byName["Philibert Haverbeke"];
  console.log(reduceAncestors(ph, sharedDNA, 0));
  // → 0.00049
  //看不懂請見Ch05-2-DNAlog



