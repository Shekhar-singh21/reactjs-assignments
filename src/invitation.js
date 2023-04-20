import React from "react";
import Parent from "./parent";
import { Fragment } from "react";


export default function Invitation(props) {



    return (
        <Fragment>

            <div>
                <p> Subject :<span>{props.sub}</span> </p>
                <p>To :<span>{props.to}</span></p>
                <br></br>
                <p> Hi ,<span>{props.name}</span></p>
                <br></br>
                <p>
                    I am having a <span>{props.party}</span> next Friday at my Home . Would you like to come ? It will be fun . Lots of people from my school are coming . you know some of them-<span>{props.guest}</span>
                </p>
                <p>My house is behind our school , near <span>{props.venue}</span></p>
                <p>I hope you will come and see you soon .</p>
                <p> from ,</p>
                <span className="name">{props.name}</span>
                <br></br>
                <br></br>

            </div>





        </Fragment>



    )
}
