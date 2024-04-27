import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import baseURL from '../../Utils/url';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loader from '../../Utils/Loader/Loader';

const MyList = () => {
    const { user } = useAuth()
    const [myList, setMyList] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()


    useEffect(() => {
        setLoading(true)
        fetch(`${baseURL}/spots/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setMyList(data)
                console.log(data);
            })
    }, [])

    const handleDelete = id => {
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "This action cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes !!!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`${baseURL}/spot/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        const remaining = myList.filter(spot => spot._id !== id)
                        setMyList(remaining)

                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Tourists Spot has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }


    return (
        <div className='max-w-7xl mx-auto w-full my-12 mb-36 md:w-[89%]'>
            <div className="overflow-x-auto">
                {
                    loading ? <Loader></Loader>
                        : <table className="table">
                            {/* head */}
                            <thead>
                                <tr className='font-semibold *:p-1 md:p-3 text-[10px] md:text-base text-[#2BA2FF]'>
                                    <th></th>
                                    <th>Tourists Spot </th>
                                    <th>AVG Price</th>
                                    <th>Travel Time</th>
                                    <th className='flex justify-center'>Action</th>
                                </tr>
                            </thead>


                            <tbody>
                                {/* row 1 */}
                                {
                                    myList.map((list, idx) => <tr
                                        key={list?._id}
                                        className="hover rounded border-2 border-white text-[10px] md:text-base bg-[#e9f4fd]">
                                        <th className='p-2 md:p-2 grid place-content-center border-r border-white'>{idx + 1}</th>
                                        <td className='p-0 md:p-2 '>{list.spotName}</td>
                                        <td className='p-0 md:p-2'>${list.AVGCost}</td>
                                        <td className='p-0 md:p-2 border-r border-white'>{list.travel_time}</td>

                                        <td className=' flex p-2 items-center justify-center'>
                                            <span onClick={() => navigate(`/update/${list._id}`)} className='btn bg-green-500 btn-xs text-white mr-3 sm:btn-sm'>Update</span>
                                            <span onClick={() => handleDelete(list._id)} className='btn bg-red-500 btn-xs text-xs text-white sm:btn-sm'>Delete</span>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                }
            </div>
        </div>
    );
};

export default MyList;