const select = (slc) => document.querySelector(slc)
const clog = console.log
const create = (element, className = '') => { let ele = document.createElement(element); ele.className = className; return ele }


function make_todo_div(title = '[title]', description = '[description]') {
    let title_dom = create('h3', 'todo_title')
    title_dom.innerText = title

    let description_dom = create('span', 'todo_description')
    description_dom.innerText = description

    let todo_div = create('div', 'todo_item')
    todo_div.appendChild(title_dom)
    todo_div.appendChild(description_dom)

    // add controlls (functions)
    // 1. add a delete button
    // 2. add a cross button
    // 3. edit button ? maybe ?
    let delete_button = create('button', 'delete_todo')
    delete_button.innerText = 'delete'
    delete_button.addEventListener('click', e => {
        // TODO: remove also the data, assuming you isolate data from dom
        todo_div.remove()
    })

    let cross_button = create('button', 'cross_todo')
    cross_button.innerText = 'mark as done'
    let crossed = false;
    cross_button.addEventListener('click', e => {
        if (!crossed) {
            cross_button.innerText = 'unmark as done'
            todo_div.classList.add('done')
            crossed = true
        } else {
            todo_div.classList.remove('done')
            crossed = false
            cross_button.innerText = 'mark as done'
        }
    })

    todo_div.appendChild(delete_button)
    todo_div.appendChild(cross_button)
    todo_div.appendChild(create('hr'))
    return todo_div
}

let todo_container = select('.todo_container')

let form = select('.todo_form form')
form.addEventListener('submit', e => {
    e.preventDefault()

    let title = form.elements['title'].value
    let description = form.elements['title'].value

    todo_container.appendChild(
        make_todo_div(title, description)
    )
})