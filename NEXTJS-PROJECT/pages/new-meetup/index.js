// our-domain.com/new-meetup

import { useRouter } from "next/router"
import NewMeetupForm from "../../components/meetups/NewMeetupForm"

const NewMeetup = () => {
    const route = useRouter()
    async function addMeetupHandler(meetup) {
        const response = await fetch("/api/new-meetup", {
            method: "POST",
            body: JSON.stringify(meetup),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json()
        // route.push("/")
        console.log("DATA", data);
    }
    return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}
export default NewMeetup;