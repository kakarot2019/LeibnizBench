var app = new Vue({
    el: '#scoreList',
    data: {
      scores: [],
    },
    methods:{
    mounted() {
      database.collection("scores").onSnapshot(snapshot=>{
          snapshot.data().forEach(snap=>{
              scores.push(snap);
          })
      })
    }
}
  });
  