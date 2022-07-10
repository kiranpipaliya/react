// our-domain.com/meetup id / index
import MeetupDetail from "../../components/meetups/MeetupDetail";
const MeetupDetailPage = () => {
    return <MeetupDetail id="m2"
        title="A Second Meetup"
        src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15872.jpg?t=st=1657376066~exp=1657376666~hmac=6af63b4f9058019d3da48e8ac4504ac37173bab41df55e0307cf2a69c986caa1&w=740"
        address="some address,5,some city,12345"
        discretion="This is Second Meetup" />
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: "m1"
                }
            },
            {
                params: {
                    meetupId: "m2"
                }
            }
        ]
    }
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId
    console.log(meetupId);
    return {
        props: {
            meetupData: {
                id: meetupId,
                title: "A Second Meetup",
                src: "https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15872.jpg?t=st=1657376066~exp=1657376666~hmac=6af63b4f9058019d3da48e8ac4504ac37173bab41df55e0307cf2a69c986caa1&w=740",
                address: "some address,5,some city,12345",
                discretion: "This is Second Meetup"
            }
        }
    }

}

export default MeetupDetailPage; 