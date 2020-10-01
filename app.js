new Vue({
	el: '#vue-app',
	data: {
		age : 27,
		website: 'https://example.com',
	},
	methods: {
		add: function(inc){
			this.age += inc;
		},
		subtract: function(dec){
			this.age -= dec;
		},
		click: function(){
			alert('Click Triggered');
		}
	}
});