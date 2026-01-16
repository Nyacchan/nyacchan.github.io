// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
	[categoryName: string]: Device[];
} & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	Apple: [
		{
			name: "MacBook Pro (Retina, 13 英寸, 2014 年中) ",
			image: "/images/device/mbp_13-mul.png",
			specs: "2.6GHz 双核 Intel Core i5 处理器/8G+256G/MacOS BigSur",
			description:
				"MacOS BigSur 简便易用，异常强大，堪称了不起的先进操作系统.",
			link: "https://support.apple.com/zh-cn/111942",
		},
	],
};
