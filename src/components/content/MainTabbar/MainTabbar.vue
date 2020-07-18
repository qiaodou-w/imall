<template>
	<tab-bar>
		<tab-bar-item link="/home">
			<template #icon>
				<i class="iconfont icon-all"></i>
			</template>
			<template #text>
				<div class="tab-bar-item">首页</div>
			</template>
		</tab-bar-item>
		<tab-bar-item link="/category">
			<template #icon>
				<i class="iconfont icon-category"></i>
			</template>
			<template #text>
				<div class="tab-bar-item">分类</div>
			</template>
		</tab-bar-item>
		<tab-bar-item link="/cart">
			<template #icon>
				<i class="iconfont icon-cart-Empty"></i>
			</template>
			<template #text>
				<div class="tab-bar-item">购物车</div>
			</template>
		</tab-bar-item>
		<tab-bar-item link="/profile">
			<template #icon>
				<i class="iconfont icon-smile"></i>
			</template>
			<template #text>
				<div class="tab-bar-item">我的</div>
			</template>
		</tab-bar-item>
	</tab-bar>
</template>

<script>
	import TabBar from "components/common/tapbar/Tapbar"
	import TabBarItem from "components/common/tapbar/Tapbar-item.vue"
	
	export default{
		name:"MainTabbar",
		components:{
		TabBar,TabBarItem
		}
	}
</script>

<style>
</style>
