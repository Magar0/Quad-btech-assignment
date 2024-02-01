import { FaStar } from "react-icons/fa6";

const Card = ({ movie }) => {

    const { name, language, genres, status, premiered, image, ended, summary, rating } = movie
    console.log(image)
    return (
        <>
            <section className=" hover:bg-slate-200 py-2 px-3 rounded-2xl hover:scale-110 ease-out  ">
                <div className="img">
                    <img src={image?.medium} alt="img" width={250} height={340} />
                </div>
                <div className="details">
                    <div className="flex justify-between items-center px-3 py-1">
                        <h1 className="font-bold text-2xl">{name}</h1>
                        <i className="flex items-center me-2 gap-2 "><FaStar /> {rating.average}</i>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Card