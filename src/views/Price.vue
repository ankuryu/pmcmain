<template>
  <div class="price">
<h1>Price Module</h1>

			<br>
			<span >
				<select  v-model = "lcode" v-on:change="get_lc_pri" >
					<option  v-for = "t in lcodes"> {{t.lcode}}</option>
				</select>
			</span> &nbsp;&nbsp;


			<span class = "hlpi">
				<select v-model = "icode"  v-on:change="get_ic_pri" >
					<option v-for = "i in icodes"> {{i.icode}}</option>
				</select>

				&nbsp; <!-- <button @click= "shwpri" >Price</button> -->

			</span>&nbsp;&nbsp;


			<span>lcode{{lcode}} &nbsp; Icode:&nbsp; {{icode }} </span> 
			<br>
			<div class="shwpri">
			<div class="col1">LCODE</div>
			<div class="col2">Icode</div>
			<div class="col3">MMSIZE</div>
			<div class="col4">ASIZE</div>
			<div class="col5">Rate</div>
			<div class="col6">MRP</div>

			<template v-for= "p in prices">
				<div class="col1">{{p.lcode}}</div>
				<div class="col2">{{p.icode}}</div>
				<div class="col3">{{p.mm}}</div>
				<div class="col4">{{p.asize}}</div>
				<div class="col5">{{p.pri}}</div>
				<div class="col6">{{p.mrp}}</div>
			</template>

		<div class="o1"><br>
		</div>
		</div>

  </div>
</template>

<script>
var dom1 = window.location.href;
var lnk1 = document.createElement('a');
lnk1.setAttribute('href',lnk1);
var hst1 = lnk1.hostname ;
var port1 = lnk1.port ;
var pth1 = lnk1.pathname ;
var prt1 = lnk1.protocol ;

//console.log('pp',hst1,prt1,pth1,prt1) ;

var myburl = lnk1.protocol +'//' + lnk1.hostname + ':' + lnk1.port
console.log(myburl);

import Vue from 'vue';
 import VueResource from 'vue-resource';
 Vue.use(VueResource);
export default {
  name: 'Price',
  props: {
    msg: String
  },
  data:()=>{
    return {
		lcode:"",
		icode:"",
		lcodes:[],
		icodes:[],
		prices:[]
    }
  },
	created: function(){
		this.geta_icode(); 
		this.geta_lcode();  
	},
	methods: {
		geta_lcode:function(){
			let p = this ;
			this.$http.get(myburl + "/pmcpri/alcode.json",{params:""} ).then((response)=>{
				p.lcodes = response.data ;
			});
		},
		geta_icode:function(){
			debugger;
			let p = this ;
			console.log(`This is p ${p}`);
			p.$http.get(myburl + "/pmcpri/aicode.json",{params:""} ).then((response)=>{
				p.icodes = response.data ;
			});
		},
		get_lc_pri:function(){
			let p = this ;
			console.log("empty", p.lcode !="");
			if(p.lcode == undefined ) p.lcode ='' ;
			if(p.lcode !='' ) {
			p.$http.get(myburl +'/pmcpri/lcode.json/'+ p.lcode,{params:""} ).then((response)=>{
			console.log("lcode",p.lcode);
				p.prices= response.data ;
			});
			} else {
				p.prices = [] ;
			};
		},
		get_ic_pri:function(){
			let p = this ;
			if(p.icode == undefined) p.icode ='';
			if(p.icode  !='') {
			p1= {icode: this.icode};
			p.$http.get(myburl +'/pmcpri/icode.json/'+this.icode,{params:""} ).then((response)=>{
			console.log("icode",p.icode);
				p.prices= response.data ;
			});
			} else {
			  p.prices = [] ;
			}
		},
	}  // end of the methods
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shwpri {
 display:grid ;
				 width: 500px;
								 grid-gap: 2px;
 grid-template-columns : repeat(6,1fr);
 background-color: yellow 
}
			.col1 {
			 grid-column : 1 /span 1;
			 background-color: lightblue;
							 text-align: left;
			}
			.col2 {
			 grid-column : 2 / span 1;
			 background-color: lightblue ;
							 text-align: left;
			}
			.col3 {
			 grid-column : 3 / span 1;
			 background-color: lightgrey;
							 text-align: middle ;
			}
			.col4 {
			 grid-column : 4 / span 1;
			 background-color: lightgrey;
							 text-align: middle ;
			}
			.col5 {
			 grid-column : 5 / span 1;
			 background-color: pink ;
							 text-align: right;
			}
			.col6 {
			 grid-column : 6 / span 1;
			 background-color: lightgreen;
							 text-align: right;
			}
</style>