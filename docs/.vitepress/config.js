export default {
	base: '/',
	title: 'Everything for Frontend', //站点标题
	description: '与前端有关的一切...', //mate标签description，多用于搜索引擎抓取摘要
	lastUpdated: true,
	dest: 'public',
	markdown: {
		lineNumbers: true, //显示代码行数
	},
	themeConfig: {
		siteTitle: 'Everything for Frontend',
		// logo: "/logo.png",
		nav: [{ text: 'github', link: 'https://github.com/magnum-zx' }],
		socialLinks: [{ icon: 'github', link: 'https://github.com/magnum-zx' }],
		sidebar: getSidebar(),
	},
}

function getSidebar() {
	return [
		{
			text: 'handwriting',
			items: [
				// {
				// 	text: 'handwriting',
				// 	link: '/articles/handwriting/',
				// },
				{
					text: '实现Promise类',
					link: '/articles/handwriting/promise',
				},
				{
					text: '实现Promise类方法',
					link: '/articles/handwriting/promise-class-function',
				},
				{
					text: '实现发布订阅模式',
					link: '/articles/handwriting/publish-subscribe',
				},
				{
					text: '实现函数柯里化',
					link: '/articles/handwriting/curring',
				},
				{
					text: '实现数组拍平',
					link: '/articles/handwriting/array-flat',
				},
			],
		},
		{
			text: 'js',
			items: [
				
			],
		},
		{
			text: 'css',
			items: [
				
			],
		},
		{
			text: 'vue',
			items: [
				
			],
		},
		{
			text: 'react',
			items: [
				
			],
		},
		{
			text: 'ts',
			items: [
				
			],
		},


	]
}
