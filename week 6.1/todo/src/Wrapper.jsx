

function App() {
    return <div>
     <CardWrapper innerComponent={<TextComponent/>}/>
     <CardWrapper innerComponent={<TextComponent2/>}/>
    </div>
}

function TextComponent(){
    return <div>
        Hio there 
    </div>
}
function TextComponent2(){
    return <div>
        Hello veer bro
    </div>
}

// what does cardWrapper needs to do => to accept some react component as input and 
// render that react component here inside some extra style
function CardWrapper({innerComponent}){
    return <div style={{border: '1px solid black'}}>
         {innerComponent}
    </div>
}

export default App
