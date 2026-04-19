function customRender(reactElement,container){
    const domElement =document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.Children
    domElement.setAtribute('href', reactElement.props.
        href)
    domElement.setAtribute('target', reactElement.props.
        target)
     container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target:'_blank'
    },
    Children:'Click me visist google'
}

const mainComtainer = document.querySelector('#root')

custmRender(reactElement,mainComtainer)