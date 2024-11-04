import CardSideScroll from "../CardSideScroll"
import JobCardMini from "./JobCardMini";
import tempCards from "../../../data/tempcards";

export default function AppliedJobs() {
  return (
   <CardSideScroll>
    {tempCards.map((card) => (
      <JobCardMini key={card.id} title={card.title}/>
    ))}
   </CardSideScroll>
  )
}