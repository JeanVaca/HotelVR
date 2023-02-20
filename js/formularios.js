import {saveTask} from './firebase.js'

window.addEventListener('DOMContentLoaded', () => {
    console.log('funciona');
})

const taskForm = document.getElementById('task-form')

taskForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = taskForm['name']
    const phone = taskForm['phone']
    const email = taskForm['email']
    const school = taskForm['school']
    const experience = taskForm['experience']
    const location = taskForm['location']
    const able = taskForm['able']

    saveTask(name.value, phone.value, email.value, school.value, experience.value, location.value, able.value)
})
