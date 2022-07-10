import MeetupList from "../components/meetups/MeetupList"
import { useEffect, useState } from "react";

const DUMMY_MEETUP = [
    {
        id: "m1",
        title: "A first Meetup",
        image: "https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15872.jpg?t=st=1657376066~exp=1657376666~hmac=6af63b4f9058019d3da48e8ac4504ac37173bab41df55e0307cf2a69c986caa1&w=740",
        address: "some address,5,some city,12345",
        discretion: "This is First Meetup"
    },
    {
        id: "m2",
        title: "A Second Meetup",
        image: "https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15872.jpg?t=st=1657376066~exp=1657376666~hmac=6af63b4f9058019d3da48e8ac4504ac37173bab41df55e0307cf2a69c986caa1&w=740",
        address: "some address,5,some city,12345",
        discretion: "This is Second Meetup"
    },
    {
        id: "m3",
        title: "A Third Meetup",
        image: "https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15872.jpg?t=st=1657376066~exp=1657376666~hmac=6af63b4f9058019d3da48e8ac4504ac37173bab41df55e0307cf2a69c986caa1&w=740",
        address: "some address,5,some city,12345",
        discretion: "This is Third Meetup"
    },
]

const HomePage = (props) => {


    return <MeetupList meetups={props.meetups} />
}

// // ever time regenerate data
// export async function getServerSideProps(context) {
//     const request = context.req;
//     const response = context.res
//     return {
//         props: {
//             meetups: DUMMY_MEETUP
//         }
//     }
// }

export async function getStaticProps(cntext) {
    // const meetupid=context.params
    return {
        props: {
            meetups: DUMMY_MEETUP
        },
        revalidate: 1 // ever 1 sec new data comes 
    }
}

export default HomePage;