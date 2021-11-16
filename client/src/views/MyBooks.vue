<template>
    <div class="index">
        <div>
            <ul>
                <li v-for="book in books" :key="book.id">

                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'MyBooks',
    data(){
        return{
            books: []
        }
    },
    mounted(){
        this.getAllBooks()
    },
    methods: {
        getAllBooks(){
            axios
                .get('/books?page=0')
                .then(response => {
                    console.log(response.data)
                })
        }
    }
}
</script>

<style>
.index{
    display: flex;
    justify-content: center;
}
</style>