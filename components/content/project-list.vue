<template>
    <div class="not-prose">
        <section v-if="pending">Loading</section>
        <section v-if="error">Something went wrong... try again</section>
        <section v-else>
            <ul class="grid grid-cols-1 gap-4">
                <li v-for="repository in repos" class="border border-gray-200 rounded-sm p-4 hover:bg-gray-100 font-mono">
                    <a :href="repository.html_url" target="_blank">
                        <div class="flex items-center justify-between text-sm">
                            <div class="font-semibold">
                                {{ repository.name }}
                            </div>
                            <div>
                                {{ repository.stargazers_count }}
                            </div>
                        </div> 
                        <p class="text-sm">
                            {{ repository.description }}
                        </p>
                    </a>
                </li>
            </ul>
        </section>
    </div>
</template>
<script setup>
const { error, data } = await useFetch('https://api.github.com/users/gabrieltenachous/repos');
const repos = computed(() => data.value.sort((a,b) => b.stargazers_count - a.stargazers_count))

</script>