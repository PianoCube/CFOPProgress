const paras = document.querySelectorAll('p');

// Ads the pStyle class to all paragraphs
paras.forEach(p => {
    p.classList.add('pStyle')
});

// Toggles what list of steps is shown
function togglePart(element){
    console.log(element.innerText);

    const theCross = document.getElementById('Cross');
    const theF2L = document.getElementById('F2L');
    const theLL = document.getElementById('LL');

    if(element.innerText == 'Cross'){
        theCross.classList.remove('hideElement');
        theF2L.classList.add('hideElement');
        theLL.classList.add('hideElement');
    }
    if(element.innerText == 'F2L'){
        theCross.classList.add('hideElement');
        theF2L.classList.remove('hideElement');
        theLL.classList.add('hideElement');
    }
    if(element.innerText == 'LL'){
        theCross.classList.add('hideElement');
        theF2L.classList.add('hideElement');
        theLL.classList.remove('hideElement');
    }
}

// Changes descriptoion box on the right
function changeDescription(element){
    console.log(element.innerText);
    document.getElementById('description').innerText = element.innerText;

    for(i=0; i<paras.length; i++) {
        if(element.innerText == paras[i].innerText) {
            document.getElementById('description').innerHTML = descriptionList[i];
            break;
        }
    }
}

// All the potential text for the description div
const descriptionList = [
    `It's common for beginner guides to teach to solve the cross on top, or using
    the <a href="https://www.speedsolving.com/wiki/index.php/Daisy">Daisy method</a>.
    This method is nice to make it as easy as possible for beginners, but is very slow
    and not recommended for if you want to get faster. Solving the cross more directly
    is harder, but much faster once you get used to it.
    <br><br>
    Similarly, solving the cross on top makes it easier to see what you're doing, but
    it makes it harder to see what to do next.`,

    `potato`,

    `hello`,

    `This is a list
    <li>one</li>
    <li>two</li>
    <li>three</li>`,

    `5`,

    `6`,

    `7`,

    `8`,

    `9`,

    `10`,

    `11`,

    `12`,

    `13`,

    `14`,

    `15`,

    `16`,

    `17`,

    `18`];