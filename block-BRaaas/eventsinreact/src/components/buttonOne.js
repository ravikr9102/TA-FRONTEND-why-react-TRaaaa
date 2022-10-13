// Create a button with text `Click Me`
// Handle a event of type `click` on the button
// When user click on the button `alert` a message saying `Hello React Event`

function Buttonone(){
    return (
        <button className="btn-one" onClick={handleClick}>Click Me</button>
    )
}

function handleClick(event){
    alert(`Hello React Event`)
}

export default Buttonone;