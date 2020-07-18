<template>
	<div id="tab-bar-item" @click="itemClick">
		<div class="item-icon" :style="activeStyle">
			<slot name="icon"></slot>
		</div>
		<div class="item-text" :style="activeStyle">
			<slot name="text"></slot>
		</div>
	</div>

</template>

<script>
	export default {
		name: "TabBarItem",
		props: {
			link: {
				type: String,
				required: true
			}
		},
		methods:{
			itemClick(){
				this.$router.replace(this.link)
			}
		},
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.link) !== -1
			},
      activeStyle() {
				return this.isActive ? {'color': 'red'} : {}
      }
		}
	}
	
</script>

<style>
	#tab-bar-item {
		margin-top: 0.1875rem;
		flex: 1;
	}

	.item-icon i,
	.item-active-icon i {
		font-size: 1.5rem;
	}

	.item-text {
		font-size: 0.75rem;
		margin-top: 0.1875rem;
		color: #333333;
	}
</style>
