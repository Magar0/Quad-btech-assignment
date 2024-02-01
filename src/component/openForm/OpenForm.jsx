import { useState } from "react";
import { ImCross } from "react-icons/im";

const OpenForm = ({ show, close }) => {

    const [details, setDetails] = useState({
        title: show?.name,
        time: show?.shedule?.time,
        name: "",
        email: "",
        phone: ""
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setDetails(pre => ({ ...pre, [name]: value })
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(details))
        close()
    }


    return (
        <section className='h-screen w-full top-0 left-0 grid place-items-center z-10 fixed'>

            <form action="" className=' bg-slate-200 px-20 py-10 relative rounded userForm ' onSubmit={handleSubmit}>
                <ImCross className="text-red-600 cursor-pointer float-end top-5 right-5 absolute" onClick={() => close()} />
                <div className="flex flex-col">

                    <label htmlFor="title">
                        <h3>Title: </h3>
                        <input type="text" name='title' id='title' placeholder={"title"} value={details.title} required />
                    </label>
                    <label htmlFor="title">
                        <h3>Time: </h3>
                        <select name="time" id="time" >
                            <option value={show?.schedule.time}>{show?.schedule.time}</option>
                        </select>
                    </label>

                    <label htmlFor="name">
                        <h3>Name: </h3>
                        <input type="text" name='name' id='name' placeholder={"Your Name"} onChange={handleChange} value={details.name} />
                    </label>
                    <label htmlFor="email">
                        <h3>Email: </h3>
                        <input type="email" name='email' id='email' placeholder={"your email"} onChange={handleChange} value={details.email} required />
                    </label>
                    <label htmlFor="phone">
                        <h3>Phone No: </h3>
                        <input type="number" name='phone' id='phone' placeholder={"your phone no."} onChange={handleChange} value={details.phone} />
                    </label>
                    <button type='submit' className="btn"> Submit </button>

                </div>

            </form>
        </section>
    )
}

export default OpenForm