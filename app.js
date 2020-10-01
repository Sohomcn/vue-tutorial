new Vue({
	el: '#vue-app',
	data: {
		name: 'Sohom',
		job: 'Developer',
		website: 'https://example.com',
		websiteTag: '<a href="https://example.com">Link2</a>'
	},
	methods: {
		greet: function(time){
			return 'Good ' + time;
		}
	}
});