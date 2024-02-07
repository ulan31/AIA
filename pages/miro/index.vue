<template>
    <arcticle>
        <button @click="createBoards">Создать доску</button>
    </arcticle>
</template>

<script>
export default {
    data() {
        return {}
    },
    mounted() {
        const options = {method: 'GET', headers: {accept: 'application/json', 'Authorization': 'Bearer eyJtaXJvLm9yaWdpbiI6ImV1MDEifQ_xeYqVFXA0tbO3ldmVK2A9FYiY7I'}};

        fetch('https://api.miro.com/v2/boards', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    },
    methods: {
        createBoards() {
            const options = {
                method: 'POST',
                headers: {accept: 'application/json', 'content-type': 'application/json', 'Authorization': 'Bearer eyJtaXJvLm9yaWdpbiI6ImV1MDEifQ_xeYqVFXA0tbO3ldmVK2A9FYiY7I'}
            };

            fetch('https://api.miro.com/v2/boards', options)
                .then(response => response.json())
                .then(response => console.log(response))
                .catch(err => console.error(err));
        }
    }
}
</script>