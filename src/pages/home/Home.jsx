
import Card from "../../components/Card"
import Navbar from "../../components/Navbar"

const Home = (props) => {

    return (
        <>
            <Navbar />
            <div className="flex flex-wrap justify-around mt-10 mb-10">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}

export default Home