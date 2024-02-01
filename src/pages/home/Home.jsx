import { useSelector } from "react-redux"
import Card from "../../component/card/Card"
import { Link } from "react-router-dom"

const Home = () => {

    const data = useSelector(state => state.show.data)

    return (
        <>
            <section className="py-5 px-16">
                {
                    (!data || data?.length === 0) && <h2>No Show Found</h2>
                }
                <div className="show-container place-items-center">

                    {
                        data && data.map(movie => (
                            <Link to={`/show/${movie.show.id}`} key={movie.show.id}>
                                <Card movie={movie.show} />
                            </Link>
                        ))
                    }
                </div>
            </section>
        </>

    )
}

export default Home