import { createRequire } from 'module'
import { defineConfig } from 'vitepress'

export default defineConfig({
	// base: '/',
	title: 'Everything for Frontend', //站点标题
	description: '与前端有关的一切...', //meta标签description，多用于搜索引擎抓取摘要
	lastUpdated: true,
	dest: 'public',
	
	markdown: {
		lineNumbers: true, //显示代码行数
	},
	themeConfig: {
		siteTitle: 'Everything for Frontend',
		// logo: "/logo.png",
		nav: nav(),

		socialLinks: [{ icon: 'github', link: 'https://github.com/magnum-zx' }],

		sidebar: {'/articles/': getSidebar()},

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
		{ text: 'Github', link: 'https://github.com/magnum-zx'},
	]
  }

function getSidebar() {
	return [
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
			],
		},
		{
			text: 'js',
			collapsed: false,
			items: [
				
			],
		},
		{
			text: 'css',
			collapsed: false,
			items: [
				
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


	]
}
