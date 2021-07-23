<template>
	<div class="py-16">
		<div class="relative">
			<div class="lg:absolute lg:inset-0">
				<div class="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
					<img
						class="h-56 w-full object-cover lg:absolute lg:h-full"
						:src="formattedImageLink"
						:alt="product.name"
					/>
				</div>
			</div>
			<div
				class="relative px-4 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2 h-[500px] flex justify-center items-center"
			>
				<div class="lg:col-start-2 lg:pl-8">
					<div
						class="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0"
					>
						<h2
							class="leading-6 font-semibold tracking-wide uppercase"
						>
							#{{ product.reference }}
						</h2>
						<h3
							class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
						>
							{{ product.name }}
						</h3>
						<p class="mt-8 text-lg text-gray-500">
							Sagittis scelerisque nulla cursus in enim
							consectetur quam. Dictum urna sed consectetur neque
							tristique pellentesque. Blandit amet, sed aenean
							erat arcu morbi.
						</p>
						<div class="mt-16 space-y-8">
							<div class="flex items-center justify-between">
								<p class="text-lg font-extrabold">
									{{ product.price.base.formatted }}
								</p>
								<template v-if="product.qty === 0">
									<div
										class="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6"
									>
										<span
											class="flex items-center truncate space-x-2"
										>
											<span
												class="w-2.5 h-2.5 flex-shrink-0 rounded-full bg-red-600"
												aria-hidden="true"
											></span>
											<span
												class="font-medium truncate text-sm leading-6"
											>
												Indisponible
											</span>
										</span>
									</div>
								</template>
								<template v-else>
									<div
										class="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6"
									>
										<span
											class="flex items-center truncate space-x-2"
										>
											<span
												class="w-2.5 h-2.5 flex-shrink-0 rounded-full bg-green-600"
												aria-hidden="true"
											></span>
											<span
												class="font-medium truncate text-sm leading-6"
											>
												Disponible ({{ product.qty }} en
												stock)
											</span>
										</span>
									</div>
								</template>
							</div>
							<div class="rounded-md shadow">
								<button
									type="button"
									@click.prevent="addToCart"
									class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
								>
									Ajouter au panier
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		product() {
			return this._.find(this.products.products, {
				reference: this.$route.params.product,
			});
		},

		formattedImageLink() {
			return "https:" + this.product.images[0].large;
		},
	},

	methods: {
		addToCart() {
			console.log('added ...')
		}
	},

	async asyncData({ $content, params }) {
		const products = await $content("cart")
			.only(["products"])
			.fetch();

		return { products };
	},
};
</script>
