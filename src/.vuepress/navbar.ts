import { navbar } from "vuepress-theme-hope";

export default navbar([
	"/",
	{
		text: "English",
		link: "/English/",
		icon: "material-symbols:book-3-outline",
	},
	{
		text: "VuePress",
		link: "/VuePress/",
		icon: "/icon/vuepresslogo.png",
	},
	//"/读书笔记/笔记的方法.md",
	"/工具/",

	{
		text: "项目",
		icon: "circle-info",
		children: [
		{
			text: "电力系统",
			children: ["/IEC 60870-5-104/"],
		},
		{
			text: "OpenGL",
			children: ["/LearnOpenGL/"],
		},
		{
			text: "C++",
			children: ["/网络编程/", "/并发编程/", "/C++ Primer/",],
		},

		],
	},
]);

