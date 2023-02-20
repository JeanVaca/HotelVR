window.addEventListener('DOMContentLoaded', () => {
    console.log('works');
})

const taskForm = document.getElementById('task-form')

taskForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    console.log('submited')
})
