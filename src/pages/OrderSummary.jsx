import React, { useContext } from 'react'
import { ProfileAndOrdersContext } from "../contexts/context";
import Loading from '../components/Loading'
import ErrorReport from '../components/ErrorReport'


export default function OrderSummary() {

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
    const restaurant = profileAndOrders.restaurant;
    const orderItems = profileAndOrders.items;
    const profile = profileAndOrders.user;
    console.log(profileAndOrders);
    let total = 0;

    return (
        <div className="order-bg">

            <span className="mask bg-gradient-default opacity-8"></span>
            <div className="container">
                <div className="row">
                    <div className="com-md-10 col-lg-8 mt-5">
                        <h1 className="h1 profile-name text-default">
                            Order Summary
                        </h1>

                    </div>
                </div>
            </div>


            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-md-12 my-3">
                        <div className="card " >
                            <div className="card-body ">
                                <div className="card-title ">
                                    <div className="row ">
                                        <div className="float-left"><h6 className="card-subtitle mb-2 text-muted text-uppercase "> restaurant details</h6></div>
                                    </div>
                                    <div className="row text-muted">
                                        <div className="float-left ml-1">
                                            <p>
                                                <b>Name</b>: {restaurant.name}
                                            </p>
                                            <p>
                                                <b>Address </b>: {restaurant.street + ", " + restaurant.city + ", " + restaurant.state + "."}
                                            </p>
                                            <p>
                                                <b>Zipcode</b>: {restaurant.zipcode}
                                            </p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-md-12 my-3">
                        <div className="card " >
                            <div className="card-body ">
                                <div className="card-title ">
                                    <div className="row ">
                                        <div className="float-left"><h6 className="card-subtitle mb-2 text-muted text-uppercase "> customer details</h6></div>
                                    </div>
                                    <div className="row text-muted">
                                        <div className="float-left ml-1">
                                            <p>
                                                <b>Name</b>: {profile.name}
                                            </p>
                                            <p>
                                                <b>Address </b>: {profile.address}
                                            </p>
                                            <p>
                                                <b>Phone</b>: {profile.phone}
                                            </p>


                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-xl-12 col-md-12 my-3">
                        <div className="card mt-3" >
                            <div className="table-responsive">
                                <table className="table table-borderless table-shopping-cart">
                                    <thead className="text-muted">
                                        <tr className="small text-uppercase">
                                            <th scope="col">Product</th>
                                            <th scope="col" width="120">Quantity</th>
                                            <th scope="col" width="120">Price (&#8377;)</th>
                                            <th scope="col" width="120">Subtotal (&#8377;)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orderItems.map((item, index) => {

                                            let itemTotal = item.price * item.quantity;
                                            let subtotal = ((2.5 / 100) * itemTotal) + itemTotal;
                                            total += subtotal;
                                            return (
                                                <tr key={index}>
                                                    <td>
                                                        <div className=" align-items-center">
                                                            <div className="">
                                                                <a href="#!" className=" text-dark" >{item.name}</a>
                                                                <p className="text-muted small"> Category: {item.category}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className="form-control">
                                                            {item.quantity}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <div className="price-wrap"> <var className=""> {itemTotal} </var>
                                                            <br />
                                                            <small className="text-muted "> {item.price} each <i>({item.tax_pct}% tax)</i> </small>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="price-wrap"> <var className=""> {subtotal} </var>

                                                        </div>
                                                    </td>
                                                </tr>

                                            );
                                        })}
                                        <tr>
                                            <td colSpan="3" className="text-uppercase">
                                                Total
                                            </td>
                                            <td colSpan="1" className="text-uppercase">
                                                {total}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="4" className="float-right text-left">

                                            </td>

                                        </tr>

                                    </tbody>
                                </table>

                                <button className="btn btn-default float-right m-2 text-right">
                                    Continue shopping
                                            </button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}
