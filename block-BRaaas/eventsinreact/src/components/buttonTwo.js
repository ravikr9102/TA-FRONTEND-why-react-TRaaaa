//  Create another button with text `How can I help you?`
//  Handle a event of type `click`
//  When user clicks `alert` three different messages as given below
//  To learn React use https://reactjs.org
//  React and ReactDOM works together
//  Babel helps in writing JSX

function Buttontwo(){
    return (
        <button className="btn-two" onClick={handleClick}>How can I help you?</button>
    )
}

function handleClick(event){
    alert(`To learn React use https:reactjs.org`)
    alert(`React and ReactDOM works together`)
    alert(`Babel helps in writing JSX`)
}

export default Buttontwo;