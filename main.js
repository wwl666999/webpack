const app = new Vue({
  el:"#app",
  data:{
    books:[
      {
        id: 1,
        author: '曹雪芹',
        name: '红楼梦',
        data:"1120-04-3",
        price: 32.0,
        count: 1
      }, {
        id: 2,
        author: '施耐庵',
        name: '水浒传',
        data:"1120-04-3",
        price: 30.0,
        count: 1
      }, {
        id: '3',
        author: '罗贯中',
        name: '三国演义',
        data:"1120-04-3",
        price: 24.0,
        count: 1
      }, {
        id: 4,
        author: '吴承恩',
        name: '西游记',
        data:"1120-04-3",
        price: 20.0,
        count: 1
      }
    ]
  },
  methods:{
    decrement :function(index){
      this.books[index].count--;
    },
    increment :function(index){
      this.books[index].count++;
    },
    removeHandler :function(index){
      this.books.splice(index, 1);
    },
  },
  computed:{
    //1.普通for循环
    totalPrice:function(){
      var totalPrice = 0;
      for( i = 0; i < this.books.length; i++){
        totalPrice += this.books[i].price * this.books[i].count;
      }
      return totalPrice;
    }
  },
  //全局过滤器 ,filter 不能定义在创建的Vue对象后面 ,filters局部过滤器
  filters:{
    showPrice :function(price){
      return "¥" + price.toFixed(2);
    }
  },
})



//编程范式：命令式编程/声明式编程
//编程范式：面向对象编程(第一公民：对象)/函数式编程(第一公民：函数)
//const  nums=[100,23,564,75,433,542,111]
//var newNums=[]
//for(let n of nums){
//  if(n<100){
//    newNums.push(n)
//  }
//}