new Vue({
	el: '#tasks',

	data: {
		tasks: [
			{ body: 'Wash the clothes', completed: false}
		]
	},

	methods: {
		addTask: function(e)
		{
			e.prevenDefault();
			this.tasks.push()
		}
	}
})