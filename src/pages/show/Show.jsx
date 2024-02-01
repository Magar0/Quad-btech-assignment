import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Show = () => {
    const shows = useSelector(state => state.show.data)
    const { id } = useParams()

    const data = shows.filter(e => e.show.id == Number(id))[0]
    console.log(data)

    const { name, type, language, genres, status, premiered, image, ended, summary, rating } = data?.show || {}

    return (
        <>
            <section className='py-10 px-16 bg-slate-100 '>
                {data &&
                    <>
                        <div className='bg-orange-100 py-2 px-7 mb-5'>
                            <h1 className='text-2xl text-red-400 '> {type} / <span className='text-red-600 font-bold '> {name}</span></h1>
                        </div>
                        <div className='flex'>

                            <div className="img ms-5">
                                <img src={image?.original} alt="img" width={400} />
                                <div><p className='float-end me-2 text-gray-700 italic  '>{status}</p></div>
                            </div>
                            <div className="details grid justify-around   w-2/3 ">
                                <ul>
                                    <li> <p>Rating:</p> {rating?.average} </li>
                                    <li> <p>Rating:</p> {rating?.average} </li>
                                    <li> <p>Rating:</p> {rating?.average} </li>
                                    <li> <p>Rating:</p> {rating?.average} </li>
                                </ul>
                            </div>
                        </div>
                        <div className='mt-5 px-20 show-summary'> {summary} </div>
                    </>
                }
            </section>
        </>
    )
}

export default Show