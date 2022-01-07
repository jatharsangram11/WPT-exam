export default function App() {
    return (<>
        <MyComponent />
    </>
    );
}

function MyComponent() {
    return (
        <div className="container-fluid align-items-center">

            <div className="bg-secondary text-light p-3">
                <h2>MyChatApp</h2>
            </div>
            <div className="p-4 fs-1" >
                <input type="text" placeholder="Lets Chat here" />
                <input type="Button" value="Send" />
            </div >

            <div className="p-4 fs-2">
                <input type="text" value="hi" />
            </div>

            <div className="p-4 fs-2">
                <input type="text" value="hello" />
            </div>

            <div className="p-4 fs-2">
                <input type="text" value="whatsapp" />
            </div>


            <div className="p-4 fs-2">
                <input type="text" value="All Good" />
            </div>


            <div className="p-4 fs-2">
                <input type="text" value="All the best" />
            </div>
        </div>
    );
}