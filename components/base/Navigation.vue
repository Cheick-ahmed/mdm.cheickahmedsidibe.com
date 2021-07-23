<template>
	<div class="relative bg-white overflow-hidden z-50">
		<div class="relative py-4 z-50">
			<div>
				<nav
					class="relative z-50 max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6"
					aria-label="Global"
				>
					<div class="flex items-center flex-1">
						<div
							class="flex items-center justify-between w-full md:w-auto"
						>
							<a href="#">
								<span class="sr-only">Workflow</span>
								<img
									class="h-8 w-auto sm:h-10"
									src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
									alt=""
								/>
							</a>
							<div class="-mr-2 flex items-center md:hidden">
								<button
									type="button"
									class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
									aria-expanded="false"
									@click.prevent="mobileMenu = true"
								>
									<span class="sr-only">Open main menu</span>
									<!-- Heroicon name: outline/menu -->
									<svg
										class="h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
					<div
						class="hidden md:flex text-right md:items-center space-x-8"
					>
						<span class="inline-block relative">
							<svg-icon name="cart" class="h-6 w-6" />
							<span
								class="absolute -top-1.5 -right-2 text-[10px] block px-1 text-center rounded-full ring-2 ring-white bg-gray-300"
							>
								0
							</span>
						</span>

						<nuxt-link
							:to="{ name: '' }"
							class="inline-block relative"
						>
							<svg-icon name="user" class="h-6 w-6" />
						</nuxt-link>
					</div>
				</nav>

				<!--
                Mobile menu, show/hide based on menu open state.
                -->
				<transition
					enter-active-class="duration-150 ease-out"
					enter-class="opacity-0 scale-95"
					enter-to-class="opacity-100 scale-100"
					leave-active-class="duration-100 ease-in"
					leave-class="opacity-100 scale-100"
					leave-to-class="opacity-0 scale-95"
				>
					<div
						class="absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
						v-if="mobileMenu"
					>
						<div
							class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
						>
							<div
								class="px-5 pt-4 flex items-center justify-between"
							>
								<div>
									<img
										class="h-8 w-auto"
										src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
										alt=""
									/>
								</div>
								<div class="-mr-2">
									<button
										type="button"
										class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
										@click.prevent="mobileMenu = false"
									>
										<span class="sr-only"
											>Close main menu</span
										>
										<!-- Heroicon name: outline/x -->
										<svg
											class="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</button>
								</div>
							</div>
							<div class="px-2 pt-2 pb-3 space-y-1">
								<nuxt-link
									:to="{ name: 'products' }"
									class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
								>
									Produits
								</nuxt-link>
							</div>
							<a
								href="#"
								class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
							>
								Log in
							</a>
						</div>
					</div>
				</transition>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			mobileMenu: false,
		};
	},
};
</script>
