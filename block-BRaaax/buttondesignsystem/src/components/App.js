import { buttonSizes, buttonTypes } from "./Buttoninfo";
import Button from "./Button";

function App(){
    return (
        <div>
            <Button label="Click Me!" />
            <Button 
            label="Click Me!" type={buttonTypes.SECONDARY} size={buttonSizes.SMALL} />
            <Button 
            label="Click Me!" type={buttonTypes.TERTIARY} size={buttonSizes.LARGE} />
            <Button onClickHandler={() => alert('You clicked me!')} />
            <Button disabled />
        </div>
    )
}

export default App;