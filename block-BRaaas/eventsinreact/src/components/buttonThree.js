//  Create three button with text `Arya`, `John` and `Bran`
//  When clicked on any button alert message with the name like `Hello Arya|John|Bran`
//  Don't write three different click handler function
//  One function should be able to handle this.

function Buttonthree(){
    return(
        <>
            <button className="btn-three" onClick={handleClick}>Arya</button>
            <button className="btn-three" onClick={handleClick}>John</button>
            <button className="btn-three" onClick={handleClick}>Bran</button>
        </>
    )
}

function handleClick(event){
    let name = event.target.innerText;
    alert(`Hello ${name}`)
}

export default Buttonthree;