<template>
	<div class="pb-16">
		<!-- Header section -->
		<div class="py-16 px-4 sm:px-6 lg:px-8">
			<div class="text-center">
				<h1 class="text-base font-semibold text-cyan-600 uppercase tracking-wide">Nos produits</h1>
				<p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Nouveautés meubles</p>
			</div>
		</div>


		<div class="grid grid-cols-2 gap-16">
			<base-product-card v-for="product in cart.products" :key="product.reference" :product="product" />
		</div>
	</div>
</div>
</template>

<script>
	export default {
		async asyncData({ $content }) {
			const cart = await $content('cart').fetch()
			return { cart }
		}
	}
</script>