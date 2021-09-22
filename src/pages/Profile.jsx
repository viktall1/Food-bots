import React, { useContext } from 'react'
import { ProfileAndOrdersContext } from "../contexts/context";
import Loading from '../components/Loading'
import ErrorReport from '../components/ErrorReport'
import profileImage from '../assets/images/profile-img.png'
import { FaPhone, FaHome } from "react-icons/fa";


export default function Profile() {
    const profileAndOrders = useContext(ProfileAndOrdersContext);
    if (profileAndOrders.loading === true) {
        return (
            <Loading />
        )
    } else if (profileAndOrders.failed === true) {
        return (
            <ErrorReport />
        )
    }
    const profile = profileAndOrders.user;

    return (
        <div className="profile-bg">


            <span className="mask bg-gradient-default opacity-8"></span>
            <div className="container">
                <div className="row">
                    <div className="com-md-10 col-lg-8 mt-5">
                        <h1 className="h1 profile-name text-default">
                            Hello {profile.name}
                        </h1>

                        <div>
                            <a href="#editProfile" className="btn btn-dark ">
                                Edit Profile
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-12 col-md-12 my-3">
                        <div className="card mt-3" >
                            <div className="card-body text-center">
                                <div className="card-title row justify-content-center">
                                    <img className="rounded-circle  profile-img" src={profileImage} alt="profile" />
                                </div>
                                <h6 className="card-subtitle mb-2 text-muted"> {profile.name}</h6>
                                <div className=" px-2 px-lg-5">
                                    <p className="">{profile.about}</p>

                                    <p>
                                        <FaPhone /> {profile.phone}
                                    </p>
                                    <p>
                                        <FaHome /> {profile.address}
                                    </p>

                                </div>

                                <div className="row">
                                    <div className="col-6"><span>
                                        likes
                                    </span>
                                        <p>
                                            <span className="btn btn-sm  btn-secondary ">
                                                {profile.likes.map((like) => {
                                                    return like + " ";
                                                })}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="col-6">
                                        <span>Dislikes</span>
                                        <p>
                                            <span className="btn btn-sm  btn-secondary ">
                                                {profile.dislikes.map((dislike) => {
                                                    return dislike + " ";
                                                })}
                                            </span>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div id="editProfile" className="col-xl-12 col-md-12 my-3">
                        <div className="card " >
                            <div className="card-body ">
                                <div className="card-title ">
                                    <div className="row ">
                                        <div className="float-left"><h6 className="card-subtitle mb-2 text-muted"> My Profile Setings</h6></div>
                                    </div>
                                    <hr />
                                    <form >
                                        {/* No `onChange` handler was specified, this will render a read-only field. so the fields are set as `readOnly`. */}
                                        <h5>
                                            User information
                                        </h5>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Name</label>
                                            <input type="name" className="form-control" id="name" name="name" value={profile.name} readOnly />
                                        </div>
                                        <h5>
                                            Contact information
                                        </h5>
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone</label>
                                            <input type="text" className="form-control" name="phone" id="phone" value={profile.phone} readOnly />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="address">Address</label>
                                            <input type="text" className="form-control" name="address" id="address" value={profile.address} readOnly />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="about">About</label>
                                            <textarea className="form-control" name="about" id="about" value={profile.about} readOnly></textarea>
                                        </div>
                                        <div className="form-group">
                                            <button className="btn btn-dark " disabled>
                                                Update Profile
                                            </button>
                                        </div>

                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}
