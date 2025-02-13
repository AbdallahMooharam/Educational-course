import React, { useEffect, useState } from 'react'
import userCommentIcon from "../../components/assets/images/user comment.com.png"
import '../Reviews/Reviews.css'
import axios from 'axios'
export default function Reviews({ teacher }) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [trueSendComment, setTrueSendComment] = useState(false);
    const [rating, setRating] = useState(0);
    let user = (JSON.parse(localStorage.getItem("user")))
    const [inputComment, setInputComment] = useState({
        teacher_id: teacher.id,
        comment: "",
        rate: ""
    });
    useEffect(() => {
        getData();
    }, []);
    useEffect(() => {
        if (trueSendComment) {
            getData();
            setTrueSendComment(false);
        }
    }, [trueSendComment]);
    async function getData() {
        try {
            let response = await axios.get(`https://unih0me.com/api/reviews/${teacher.id}`);
            setData(response.data.data.reviews);
        } catch (error) {
            setError(error.message)
        }
    }
    async function inputData() {
        try {

            let response = await axios.post(`https://unih0me.com/api/auth/review`, inputComment, {
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization": `Bearer ${user.access_token}`
                }
            });
            setTrueSendComment(true);
        } catch (error) {
            setError(error)
        }
        if(error){
            return <p>{error.message}</p>
        }
    }
    function registerComment(e) {
        let inputreviews = { ...inputComment };
        inputreviews[e.target.name] = e.target.value;
        setInputComment(inputreviews)
    }
    function handleReview(e) {
        e.preventDefault()
        inputData()
    }
    function handleStarClick(ratingValue) {
        setRating(ratingValue);
        setInputComment({ ...inputComment, rate: ratingValue });
    };
    function starRating(rating) {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <span key={i} className={i < rating ? 'star filled' : 'star '}>
                    ★
                </span>
            );
        }
        return <div className="star-rating">{stars}</div>;
    }
    return <>
        <section className='reviews'>
            <div>
                <h1 className=" mt-5 mb-4 text-3xl font-semibold text-black ">Reviews</h1>
            </div>
            <div className={`review ${data.length >= 3 ? "overflow-y-scroll" : ""}`}>
                {data.map((item, index) => <>
                    <div key={index} className='d-flex justify-content-between mt-5' >
                        <div className='d-flex gap-3 ' >
                            <div>
                                <div className='user'><img src={userCommentIcon} alt="User Comment Icon" /></div>
                            </div>
                            <div className='d-flex flex-column gap-1'>
                                <span className='text-body'>{item.student.firstname + " " + item.student.lastname}</span>
                                <span>{item.created_at.split('T')[0]}</span>
                                <div className="stars d-flex align-items-center">
                                    <span className='bg-yellow-400 rounded-full px-2 py-2 text-white font-bold me-1'>{`${item.rate}.0`}</span>
                                    <span>{starRating(item.rate)}</span>
                                </div>
                            </div>
                        </div>
                        <div className='comment ms-5'>
                            <p>{item.comment}</p>
                        </div>
                    </div >
                </>)}
            </div>
            {user.user.type == "student" ? (<form onSubmit={handleReview} className='d-flex mt-5'>
                <input
                    type="text"
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-fulltext-sm w-100"
                    placeholder="Enter text here" name='comment' onChange={registerComment} required />
                <div className="selectLevelReview mx-2">
                    {[...Array(5)].map((_, i) => (
                        <span
                            key={i}
                            onClick={() => handleStarClick(i + 1)}
                            style={{
                                cursor: 'pointer',
                                fontSize: '30px',
                                color: i < rating ? 'gold' : 'gray',
                            }}
                            className='mx-2'
                        >
                            ★
                        </span>
                    ))}
                </div>
                <button type='submit' class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Send
                </button>
            </form>) : <p>false</p>}
        </section>
    </>
}