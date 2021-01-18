<template>
	<view class="content margin-bottom-xl">
		<unicloud-db ref="udb" v-slot:default="{data, pagination, loading, error, options}" :options="options" collection="test"
		 orderby="createTime desc" :page-size="10" :getcount="true" :getone="false" :action="action" :where="where" @load="onqueryload"
		 @error="onqueryerror">
			<view v-if="error" class="error">{{error.message}}</view>
			<view v-else class="list">
				<view @click="goto(item._id)" v-for="(item, index) in data" :key="index" class="list-item">
					<i>{{index + 1}}. </i>{{item.title}}
				</view>
			</view>
			<view v-if="loading" class="loading">加载中...</view>
		</unicloud-db>
	</view>
</template>

<script>
	export default {
		name: 'comp-js',
		data() {
			return {
				options: {}, // 插槽不能访问外面的数据，通过此参数传递, 不支持传递函数
				action: '',
				where: {} // 类型为对象或字符串
			}
		},
		onPullDownRefresh() { //下拉刷新
			console.info(this.$refs.udb, 'this.$refs.udb')
			this.$refs.udb.loadData({
				clear: true //可选参数，是否清空数据
			}, (res) => {
				console.info(res, 'res')
				uni.stopPullDownRefresh()
			})
		},
		onReachBottom() { //滚动到底翻页
			this.$refs.udb.loadMore()
		},
		methods: {
			onqueryload(data, ended) {
				// 可在此处预处理数据，然后再渲染界面
			},
			onqueryerror(e) {
				// 加载数据失败
			},
			goto(id) {
				uni.navigateTo({
					url: `/pages/js/details?id=${id}`
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		background-color: #f0f0f0;
	}

	.list-item {
		background-color: #fff;
		margin-bottom: 1px;
		padding: 30px 15px;
	}

	.loading {
		padding: 20px;
		text-align: center;
	}

	.error {
		color: #DD524D;
	}
</style>
