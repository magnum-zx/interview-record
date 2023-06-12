import { defineConfig } from 'vitepress'

export default defineConfig({
	title: 'Everything for Frontend', //站点标题
	description: '与前端有关的一切...', //meta标签description，多用于搜索引擎抓取摘要
	lastUpdated: true,
	markdown: {
		lineNumbers: true, //显示代码行数
	},
	themeConfig: {
		siteTitle: 'Everything for Frontend',
		// logo: "/logo.png",
		nav: nav(),

		socialLinks: [{ icon: 'github', link: 'https://github.com/magnum-zx' }],

		sidebar: {'/articles/': getSidebar()},
		
		search: {
			provider: 'local',
		},
		
		editLink: {
			pattern: 'https://github.com/magnum-zx/interview-record/edit/main/docs/:path',
			text: 'Edit this page on GitHub'
		  },

		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2023-present magnum-zx'
		},
	},
})

function nav() {
	return [
		{ text: 'Everything', link: '/articles/what-is-everything-for-frontend'},
		{ text: 'Road map 2023', link: '/articles/frontend-road-map/index'},
		{ text: 'Github', link: 'https://github.com/magnum-zx'},
	]
  }

function getSidebar() {
	return [
		{
			text: 'js',
			collapsed: false,
			items: [
				{
					text: 'JavaScript有哪些数据类型',
					link: '/articles/js/js-data-type',
				},
				{
					text: '如何判断JS数据类型',
					link: '/articles/js/how-check-data-type',
				},
				{
					text: 'let、const和var有什么区别',
					link: '/articles/js/let-const-var',
				},
				{
					text: 'null与undefined的区别',
					link: '/articles/js/null-and-undefined',
				},
				{
					text: 'JavaScript执行上下文',
					link: '/articles/js/js-execute-context',
				},
				{
					text: '为什么0.1+0.2 !== 0.3',
					link: '/articles/js/js-precision-problem-and-solution'
				},
				{
					text: 'this指向问题',
					link: '/articles/js/this'
				},
			],
		},
		{
			text: 'css',
			collapsed: false,
			items: [
				{
					text: 'link与@import的区别',
					link: '/articles/css/link-and-@import',
				},
			],
		},
		{
			text: '浏览器原理',
			collapsed: false,
			items: [
				{
					text: '从输入URL到页面加载过程中发生了什么？',
					link: '/articles/browser/what-happens-when-you-type-a-url-into-browser',
				},
			],
		},
		{
			text: 'vue',
			collapsed: false,
			items: [
				
			],
		},
		{
			text: 'react',
			collapsed: false,
			items: [
				
			],
		},
		{
			text: 'ts',
			collapsed: false,
			items: [
			],
		},
		{
			text: 'handwriting',
			collapsed: false,
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
					link: '/articles/handwriting/currying',
				},
				{
					text: '实现数组拍平',
					link: '/articles/handwriting/array-flat',
				},
				{
					text: '实现数组去重',
					link: '/articles/handwriting/remove-duplication',
				},
				{
					text: '实现防抖节流函数',
					link: '/articles/handwriting/debounce-and-throttle',
				},
				{
					text: '实现call、apply和bind函数',
					link: '/articles/handwriting/bind-apply-call',
				},
			],
		},


	]
}
