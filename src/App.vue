<template>
  <nav class ="bg-purple-600 text-white">
    <div class="container mx-auto">
      <div class="flex items-center">
        <router-link to="/home" class="inline-block px-16 py-4 transition-colors hover:bg-purple-500
        duration-300">Home</router-link>
         <router-link to="/hotels" class="inline-block px-16 py-4 transition-colors hover:bg-purple-500
        duration-300">Hotels</router-link>
      </div>
    </div>
  </nav>
   <router-view/>
</template>