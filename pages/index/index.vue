<template>
	<view>
		<comp-js ref="comp-js" v-if="PageCur=='comp-js'"></comp-js>
		<comp-css ref="comp-css" v-if="PageCur=='comp-css'"></comp-css>
		<comp-html ref="comp-html" v-if="PageCur=='comp-html'"></comp-html>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="comp-js">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/basics' + [PageCur=='comp-js'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='comp-js'?'text-green':'text-gray'">js</view>
			</view>
			<view class="action" @click="NavChange" data-cur="comp-css">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/component' + [PageCur == 'comp-css'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='comp-css'?'text-green':'text-gray'">css</view>
			</view>
			<view class="action" @click="NavChange" data-cur="comp-html">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/plugin' + [PageCur == 'comp-html'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='comp-html'?'text-green':'text-gray'">html</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				PageCur: 'comp-js'
			}
		},
		onPullDownRefresh() { //下拉刷新
			this.$refs[this.PageCur].$refs.udb.loadData({
				clear: true //可选参数，是否清空数据
			}, () => {
				uni.stopPullDownRefresh()
			})
		},
		onReachBottom() { //滚动到底翻页
			this.$refs[this.PageCur].$refs.udb.loadMore()
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>

</style>
