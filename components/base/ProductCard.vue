<template>
	<div class="space-y-4">
		<div class="aspect-w-3 aspect-h-2">
			<nuxt-link
				:to="{
					name: 'products-product',
					params: { product: this.product.reference },
				}"
			>
				<img
					class="object-cover rounded-lg"
					:src="formattedImageLink"
					alt=""
				/>
			</nuxt-link>
		</div>

		<div class="space-y-2">
			<div class="text-lg space-y-2">
				<nuxt-link
					:to="{
						name: 'products-product',
						params: { product: this.product.reference },
					}"
				>
					<h3 class="font-light">
						{{ product.price.base.formatted }}
					</h3>
				</nuxt-link>
				<nuxt-link
					:to="{
						name: 'products-product',
						params: { product: this.product.reference },
					}"
				>
					<p class="font-medium">{{ product.name }}</p>
				</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		product: {
			required: true,
			type: Object,
		},
	},

	computed: {
		formattedImageLink() {
			return "https:" + this.product.images[0].large;
		},
	},
};
</script>
