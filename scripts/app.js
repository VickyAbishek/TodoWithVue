new Vue({
	el: '#tasks',

	data: {
		tasks: [
			{ body: 'Wash the clothes', completed: false},
			{ body: 'Clean the Room', completed: false}
		],

		newTask: ''
	},

	computed:
	{
		completedTasks: function()
		{
			return this.tasks.filter(
				function(task)
				{
					return task.completed;
				}
			)
		},

		inCompleteTasks: function()
		{
			return this.tasks.filter
			(
				function(task)
				{
					return !task.completed;
				}
			)
		}
	},

	filters: {
		inProgress: function(tasks)
		{
			return tasks.filter(
				function(task)
				{
					return !task.completed;
				}
			)
		},

		completedTasks: function(tasks)
		{
			return tasks.filter(
				function(task)
				{
					return task.completed;
				}
			)
		}
	},

	methods: {
		addTask: function(e)
		{
			e.preventDefault();

			if (! this.newTask ) return;
			this.tasks.push({
				body: this.newTask,
				completed: false
			});
			this.newTask = '';
		},

		removeTask: function(task)
		{
			this.tasks.$remove(task);
		},

		redoTask: function(task)
		{
			task.completed = false;
		},

		editTask: function(task)
		{
			this.removeTask(task);
			this.newTask = task.body;
			this.$$.edit_input_v_el.focus();
		},

		completeTask: function(task)
		{
			task.completed = true;
		},

		completeAllTasks: function()
		{
			this.tasks.forEach
			(
				function(task)
				{
					task.completed = true;
				}
			)
		},

		clearCompleted: function()
		{
			console.log(this.completedTasks);	
			this.tasks = this.tasks.filter(
				function(task)
				{
					return !task.completed;
				}
			)
		}
	}
});