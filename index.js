const PERSONS = [
   {
      name: '殷',
      age: 22,
      sex: 'male',
      fullName: '殷杰'
   },
   {
      name: '王',
      age: 22,
      sex: 'male',
      fullName: '王奇奇'
   },
   {
      name: '杨',
      age: 21,
      sex: 'male',
      fullName: '杨斌'
   },
   {
      name: '王',
      age: 22,
      sex: 'male',
      fullName: '王若浩'
   },
   {
      name: '林',
      age: 22,
      sex: 'female',
      fullName: '林晶'
   },
   {
      name: '王',
      age: 21,
      sex: 'female',
      fullName: '王蓓'
   },
   {
      name: '陈',
      age: 22,
      sex: 'female',
      fullName: '陈玉荣'
   }
]

var list = document.getElementsByClassName('list-box')[0],
    submit = document.getElementsByClassName('submit')[0],
    oName = document.getElementById('name-input'),
    oAge = document.getElementById('age-input'),
    oSex = document.getElementById('sex-selected');
var sexVal = 'male';

oSex.onclick = function (e) {
   var target = e.target;
   if (target.tagName !== 'LI') {
      return;
   }
   var len = this.children.length;
   for (var i = 0; i < len; i++) {
      this.children[i].style.background = "#e3e3e3";
   }
   target.style.background = 'red';
   sexVal = target.innerText;
}


submit.onclick = function () {
   var nameVal = oName.value,
       ageVal = oAge.value;
   axios.post('/user', {
      name: nameVal,
      age: ageVal,
      sex: sexVal
   })
   .then(function () {

   })
   .catch(function () {});
}

axios.interceptors.request.use((config) => {
   //在发送请求之前做某件事
   var newList;
   if(config.method  === 'post'){
      var conditions = config.data;
      newList = PERSONS.filter(function (value) {
         console.log(value)
         for (key in value) {
            console.log(value[key], conditions[key])
            if (key != 'fullName' && value[key] != conditions[key]) {
               return false;
            }
         }
         return true;
      })
      append(newList);
   }
   
},(error) =>{
   console.log('错误的传参')
   return Promise.reject(error);
});

function append (newList) {
   var str = '';
   newList.forEach(function (obj) {     
      str += '<li>' + obj.fullName + '</li>';
   })
   list.innerHTML = str; 
}






