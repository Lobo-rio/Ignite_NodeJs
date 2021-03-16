const express = require('express')

const app = express();

app.use(express.json())


app.get('/', (request, response) => {
    return response.json({ message: 'Helo word Ignite! - Fundamentos nodejs' })
})

app.get('/courses', (request, response) => {
    return response.json(["curso01", "curso02", "curso03"])
})


app.post('/courses', (request, response) => {
    return response.json(["curso01", "curso02", "curso03", "curso04"])
})


app.put('/courses/:id', (request, response) => {
    return response.json(["curso01", "curso02", "curso03", "curso04", "curso05"])
})


app.patch('/courses/:id', (request, response) => {
    return response.json(["curso01", "curso02", "curso03"])
})


app.delete('/courses/:id', (request, response) => {
    return response.json(["curso01", "curso02", "curso03"])
})

app.listen(3333, () => {
    console.log("Running start at port 3333!")
})