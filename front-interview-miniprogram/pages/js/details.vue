<template>
	<view v-if="id" class="content margin-bottom-xl">
		<unicloud-db ref="udb" v-slot:default="{data, pagination, loading, error, options}" collection="test" :getone="true"
		 :where="where" field="title, content" @load="onqueryload" @error="onqueryerror">
			<view v-if="error" class="error">{{error.message}}</view>
			<view v-else class="list margin">
				<view>
					<view class="text-center text-bold text-lg margin-tb-xl" v-if="data">{{data.title}}</view>
					<view v-html="data.content" class="text-lg" v-if="data"></view>
				</view>
			</view>
			<view v-if="loading" class="loading">加载中...</view>
		</unicloud-db>
	</view>
</template>

<script>
	export default {
		name: 'comp-js',
		created() {
			this.id = this.$route.query.id
		},
		destroyed() {
			this.id = null
		},
		data() {
			return {
				options: {}, // 插槽不能访问外面的数据，通过此参数传递, 不支持传递函数
				action: '',
				id: null
			}
		},
		computed: {
			where() {
				return {
					_id: this.id
				}
			}
		},
		methods: {
			onqueryload(data, ended) {
				// 可在此处预处理数据，然后再渲染界面
			},
			onqueryerror(e) {
				// 加载数据失败
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
