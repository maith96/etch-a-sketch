
function createGrid(size){
    const gridContainer = document.createElement('div')
    const _body = document.querySelector('body')

    gridContainer.classList.add('grid-container')

    for (let i=0; i< size; i++){
        const gridRow = document.createElement('div')
        gridRow.classList.add('grid-row')

        for (let j=0; j< size; j++){
            const gridCol = document.createElement('div')
            gridCol.classList.add('grid-col')
            gridCol.classList.add('pixel')
            gridCol.setAttribute('data-transparency',0.5)

            gridCol.addEventListener('mouseenter', (e)=>{
                let transparency = 0.1 + parseFloat(e.target.getAttribute('data-transparency'))
                if (transparency < 1) e.target.setAttribute('data-transparency',transparency)
                e.target.style.background=`rgba(0,0,0,${transparency})`
            })

            gridRow.appendChild(gridCol)
        }
        gridContainer.appendChild(gridRow)
    }

    _body.appendChild(gridContainer)

}

function destroyGrid(){
    const grid = document.querySelector('.grid-container')
    grid.remove()
}

function clearPixel(pixel){
    pixel.style.background = 'white'
}
function clearSketch(){
    const pixels = [...document.getElementsByClassName('pixel')]
    pixels.forEach(pixel=> pixel.style.background = 'white');
}
function changeResolution(){
    const resolution = prompt("Enter Resolution: between (2 - 100)")
    if (resolution > 100) resolution = 100
    if (resolution < 2) resolution = 2

    destroyGrid()
    createGrid(resolution)
    sketchResolution.textContent = resolution

}

const pixelSizeInput = document.getElementById('pixel-size-input')
const changeResolutionButton = document.getElementById('change-resolution')
const clearSketchButton = document.getElementById('clear-sketch')
const sketchResolution = document.getElementById('sketch-resolution')

changeResolutionButton.addEventListener('click', changeResolution)
clearSketchButton.addEventListener('click', clearSketch)

let pixelSize
createGrid(16)
