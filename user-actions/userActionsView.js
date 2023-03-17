export function buildGreetings(name){
    const paragraph = document.createElement('p');
    paragraph.textContent = `Nice to see you ${name} !`;

    return paragraph
};