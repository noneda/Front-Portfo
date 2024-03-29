import divs from '../Components/divs'
import idk from '../layout/idk'


const Home = () => {
    const spaces = Array.from({length:10})
    return (
        <>
            <idk.Menu/>
            <idk.Header/>
            {
            /*spaces.map((_ , index)=> (
                <divs.Spaces key={index}/>
            ))
            */}
            <divs.DashBoard/>
            <idk.Footer/>
        </>
    )   
}

export default Home