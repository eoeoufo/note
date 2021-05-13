var app = new Vue({
	el: "#note",
	data: {
		message: "",
		arr: ["吃饭饭","睡觉觉","写代码"],
		index: 0,
		length: 0,
		showArr: [],
		tip: "",
		isShow: false
	},
	methods: {
		save: function(message) {
			if (message == "") {
				this.isShow = true;
				this.tip = "输入框不能为空，请输入任务！！！";
			} else if (message.length > 20) {
				this.isShow = true;
				this.tip = "输入框内容不能超过20个字！！！";
			} else {
				console.log(message.length);
				this.isShow = false;
				this.length = this.arr.push(message);
				this.message = "";
				this.showArr.push(false);
				//保存每一条列表叉叉图片的显示状态，方便更改和调用
			}
		},
		clear(index) {
			this.length--;
			console.log(this.length);
			this.arr.splice(index, 1);
		},
		kong: function() {
			this.length = 0;
			this.arr.splice(0, this.arr.length);
		},
		show: function(index) {
			this.showArr.splice(index, 1, true);
		},
		noShow: function(index) {
			this.showArr.splice(index, 1, false);
		},
		notip: function() {
			this.isShow = false;
		}
	}
})
