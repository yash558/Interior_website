import React from 'react'

const Cardone = () => { 
       const cardData = (
    [
        {
            id: 1,
            title: "furniture",
            desc: "Furniture Products",
            img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/bigpictures/carpenter.jpg"
        },
        { 
            id: 2,
            title: "furniture-2",
            desc: "Furniture Products",
            img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/bigpictures/carpenter.jpg"
        },
        {
            id: 3,
            title: "furniture-3",
            desc: "Furniture Products",
            img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/bigpictures/carpenter.jpg"
        },
        {
            id: 4,
            title: "furniture-4",
            desc: "Furniture Products",
            img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/bigpictures/carpenter.jpg"
        }
    ]);
return (
    cardData.map((data, id)=> (
        <div className="card mx-3 mt-5" style={{ width: "18rem" }} key={id} >
            <img className="card-img-top" src={data.img} alt={data.title} height={300} />
            <div className="card-body">
                <h5 className="card-title text-center">{data.title}</h5>
                <p className="text-center">{data.desc}</p>
            </div>
        </div>
    ))
)
}

export default Cardone