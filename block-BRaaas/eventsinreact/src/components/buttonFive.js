// - Map over the data and create button for each
// - Each button should have different text based on the value
// - When user clicks on the button display the name of fruit in `alert`
// - Don't forget to use `key` when you are using `map` on array


let fruits = [
    { id: 'apple', value: '🍎 apple' },
    { id: 'orange', value: '🍊 orange' },
    { id: 'grape', value: '🍇 grape' },
    { id: 'pear', value: '🍐 pear' },
];

// function to handle click event on these buttons 

function handleClick(event){
    alert(event.target.innerText);
}

function Buttonfive(){
    return (
        <>
        { fruits.map(data=> <CreateButton key= {data.id} {...data}/>)}
        </>
    ) 
}

function CreateButton(props){
    return (
        <button className="btn-five" onClick={handleClick}>{props.value}</button>
    ) 
}

export default Buttonfive;


