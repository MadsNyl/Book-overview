<template>
    <div class="index">
        <div>
            <div class="addBook">
                <button @click="showBookForm = !showBookForm">Add book</button>
                <div class="infoAboutBooks">
                    <p>books: {{ countBooks }}</p>
                    <p>read: {{ readBooks }}</p>
                </div>
            </div>
            <div class="bookForm" v-if="showBookForm">
                    <form @submit.prevent="addBook()" class="form">
                        <i @click="showBookForm = !showBookForm" class="fas fa-minus-circle"></i>
                        <label>Title</label>
                        <input v-model="title" type="text">

                        <label>Author</label>
                        <input v-model="author" type="text">

                        <label>Pages</label>
                        <input v-model="pages" type="text">

                        <button>Add book</button>
                    </form>
            </div>
            <ul>
                <li class="book" v-for="book in books" :key="book.id">
                    <i @click="deleteBook(book.id)" class="fas fa-minus-circle"></i>
                    <div class="info">
                        <h1>{{ book.title }}</h1>
                        <p>{{ book.author }}</p>
                    </div>
                    <div>
                        <p>Pages: {{ book.pages }}</p>
                        <p @click="updateBook(book.title, book.author, book.pages, book.status, book.id)" class="status">
                            Read:
                            <span v-if="book.status"><i class="fas fa-check-circle"></i></span>
                            <span v-else><i class="far fa-circle"></i></span>
                        </p>
                    </div>
                </li>
            </ul>
            <div class="page-navigator">
                <button @click="previousPage()"><i class="fas fa-backward"></i></button>
                <p>{{page + 1}}</p>
                <button @click="nextPage()"><i class="fas fa-forward"></i></button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'MyBooks',
    data(){
        return{
            books: [],
            countBooks: 0,
            readBooks: 0,
            page: 0,
            showBookForm: false,
            title: '',
            author: '',
            pages: 0
        }
    },
    mounted(){
        this.getAllBooks(0)
        this.getNumberOfBooks()
        this.getNumberOfReadBooks()
    },
    methods: {
        async getAllBooks(page){
            const response = await axios.get(`/books?page=${page}`)
            this.books = response.data
        },
        async getNumberOfBooks(){
            const response = await axios.get('/books/count/')
            this.countBooks = response.data.count
        },
        async getNumberOfReadBooks(){
            const response = await axios.get('/books/read/')
            console.log(response.data)
            this.readBooks = response.data.count
        },
        async updateBook(title, author, pages, status, id){
            const updateData = {
                title: title,
                author: author,
                pages: pages,
                status: !status
            }
            console.log(updateData, id)
            const response = await axios.put(`/books/update/${id}/`, updateData)
            console.log(response)

            this.getAllBooks(this.page)
        },
        async nextPage(){
            if (this.books.length === 6) {
                this.page++
            } else if (6 > this.books.length > 0){
                this.page = this.page
            }
            this.getAllBooks(this.page)
        },
        async previousPage(){
            if (this.page > 0) {
                this.page--
            }
            this.getAllBooks(this.page)
        },
        async deleteBook(id){
            const response = await axios.delete(`/books/delete/${id}/`)
            console.log(response)
            this.getAllBooks(this.page)
        },
        async addBook(){
            const data = {
                title: this.title,
                author: this.author,
                pages: parseInt(this.pages)
            }
            const response = await axios.post('/books/new/', data)
            console.log(response)
            this.showBookForm = false
            this.getAllBooks(this.page)
        }
    }
}
</script>

<style lang='scss'>
.index{
    display: flex;
    justify-content: center;

    .addBook{
        display: flex;
        justify-content: center;
        padding: 5px 0;
        
        button{
            background: rgb(44, 196, 44);
            border: none;
            padding: 8px 12px;
            font-size: 16px;
            border-radius: 2px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
            cursor: pointer;
            transition: .3s ease-in-out;

            &:hover{
                opacity: .5;
                box-shadow: none;
            }
        }
    }

    .bookForm{
        position: absolute;
        z-index: 1000;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        backdrop-filter: blur(2px);
        width: 100%;
        height: 100%;

        .form{
            position: absolute;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.3);
            padding: 40px 120px;
            background: #fff;
            display: block;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            .fa-minus-circle{
                position: absolute;
                color: darkred;
                cursor: pointer;
                font-size: 18px;
                top: 0;
                right: 0;
            }

            label{
                display: block;
                font-size: 20px;
                padding: 10px 0;
            }

            input{
                display: inline-block;
                border: 1px solid darkgray;
                outline: none;
                height: 20px;
            }

            button{
            display: block;
            margin-top: 20px;
            background: rgb(44, 196, 44);
            border: none;
            padding: 8px 12px;
            font-size: 16px;
            border-radius: 2px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
            cursor: pointer;
            transition: .3s ease-in-out;

            &:hover{
                opacity: .5;
                box-shadow: none;
            }
        }
        }
    }

    ul{
        display: flex;
        justify-content: space-between;
        max-width: 800px;
        flex-wrap: wrap;
    }

    p{
        font-weight: bold;
    }

    .book{
        position: relative;
        width: 300px;
        margin: 14px 0;
        padding: 10px 40px;
        background: #d8c7b8;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: space-between;
        align-items: center;

        .fa-minus-circle{
            position: absolute;
            top: -5px;
            right: -6px;
            color: darkred;
            cursor: pointer;
            transition: .3s ease-in-out;

            &:hover{
                font-size: 17px;
            }
        }

        .info{
            padding: 0 20px;

            h1{
                font-size: 20px;
            }
        }

        .status{
            cursor: pointer;

            .fa-check-circle{
                color: rgb(14, 151, 14);
            }
        }
    }

    .page-navigator{
        display: flex;
        justify-content: center;
        align-items: center;

        button{
            background: none;
            border: none;
            cursor: pointer;
            margin: 0 20px;
            transition: .3s ease-in-out;

            &:hover{
                opacity: .3;
            }
        }
    }
}
</style>