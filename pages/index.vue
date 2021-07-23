<template>
	<div>
		<!-- Hero  -->
		<div class="pt-32 lg:grid lg:grid-cols-12 lg:gap-8">
			<div class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
				<h1>
					<span class="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">Coming soon</span>
					<span class="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
						<span class="block text-gray-900">Data to enrich your</span>
						<span class="block text-indigo-600">online business</span>
					</span>
				</h1>
				<p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
					Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt.
				</p>
				<div class="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
					<nuxt-link :to=" { name : 'products' } " class="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto">
						Nos produits
					</nuxt-link>
				</div>
			</div>
			<div class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
				<div class="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
					<button type="button" class="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
						<span class="sr-only">Watch our video to learn more</span>
						<img class="w-full" src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="">
					</button>
				</div>
			</div>
		</div>
	</div>
</div>

</template>

<script>
	export default {};
</script>
