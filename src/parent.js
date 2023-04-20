import React, { Fragment } from "react";
import Invitation from "./invitation";


export default function Parent() {


    return (
        <Fragment>
            <Invitation
            sub = {" Birthday party Invitation "}
            to = {"jaGdish@gmail.com"}
            name = {"jaGdish"}
            party = {" birthday party"}
            guest = {"Ritu , Saurabh , Kartik ."}
            venue = {"Green field Avenue ."}
            />
        </Fragment>

    )



}