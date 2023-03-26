import Kitap from "./Kitap"
import kitaplar from "./veri"

const App = ()=> {

return (
    <>
    {kitaplar.map( (bilgi)=>{ return <p> <Kitap kitap={bilgi}/> </p>} )}
    </>
)

}

export default App