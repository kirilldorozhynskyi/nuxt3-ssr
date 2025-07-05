<template>
	<div class="min-h-screen bg-gray-50">
		<!-- Header -->
		<header
			class="from-sport-600 to-sport-800 bg-gradient-to-r text-white shadow-lg"
		>
			<div class="container mx-auto px-4 py-6">
				<div
					class="flex flex-col md:flex-row md:items-center md:justify-between"
				>
					<h1 class="mb-4 text-3xl font-bold md:mb-0">Sport Video PWA</h1>
					<nav class="flex space-x-6">
						<NuxtLink
							to="/"
							class="hover:text-sport-200 font-medium transition-colors duration-200"
							active-class="text-sport-200 border-b-2 border-sport-200"
						>
							Home
						</NuxtLink>
						<NuxtLink
							to="/products"
							class="hover:text-sport-200 font-medium transition-colors duration-200"
							active-class="text-sport-200 border-b-2 border-sport-200"
						>
							Products
						</NuxtLink>
					</nav>
				</div>
			</div>
		</header>

		<!-- Main Content -->
		<main class="container mx-auto px-4 py-8">
			<NuxtPage />
		</main>

		<!-- Footer -->
		<footer class="mt-auto bg-gray-800 py-8 text-white">
			<div class="container mx-auto px-4 text-center">
				<p class="text-gray-300">
					&copy; 2024 Sport Video PWA. Built with Nuxt 3 & Tailwind CSS v4.
				</p>
			</div>
		</footer>
	</div>
</template>
