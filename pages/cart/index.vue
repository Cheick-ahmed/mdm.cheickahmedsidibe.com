<template>
	<div class="pb-16 min-h-screen">
		<!-- Header section -->
		<div class="py-16 px-4">
			<div class="text-center">
				<h1 class="text-base font-semibold text-cyan-600 uppercase tracking-wide">Mon panier</h1>
				<p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">Mes articles (1)</p>
			</div>
		</div>

		<div v-if="products">
			<div v-for="product in products">
				{{ product }}
			</div>
		</div>

	</div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
	computed: {
		...mapGetters({
			empty: 'cart/empty',
			products: 'cart/products'
		})
	},


	async asyncData({ $content }) {
		const cart = await $content('cart').fetch()
		return { cart }
	}
}
</script>